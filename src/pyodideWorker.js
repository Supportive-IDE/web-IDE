import { loadPyodide } from "pyodide";
import { STATUS, MSG_TYPE } from "./utils";

let pyodide = null;
let signalArray = null; // Int32Array view for Atomics.wait, manages the synchronisation lock during communication between threads
let dataArray = null; // Uint8Array view for carrying text back and forth
const decoder = new TextDecoder();

/**
 * Initialise and configure pyodide
 */
async function init(sharedBuffer) {
    // First 8 bytes (2 x Int32): [0] = lock state (0 = waiting, 1 = ready), [1] = byte length
    signalArray = new Int32Array(sharedBuffer, 0, 2);
    // Remaining bytes: UTF-8 string payload
    dataArray = new Uint8Array(sharedBuffer, 8);

    self.postMessage({ type: MSG_TYPE.STATUS, status: STATUS.LOADING });

    pyodide = await loadPyodide();

    // Stream print() output back to the main thread in real time
    pyodide.setStdout({
        raw: (charCode) => {
            self.postMessage({ type: MSG_TYPE.STDOUT, text: charCode === 32 ? "&nbsp;" : String.fromCharCode(charCode)})
        },
        // batched: text => {
        //     self.postMessage({ type: MSG_TYPE.STDOUT, text: text + "\n" });
        // }
    });

    pyodide.setStderr({
        batched: (text) => {
            self.postMessage({ type: MSG_TYPE.STDERR, text: text + "\n" });
        },
    });

    pyodide.setStdin({
        stdin: () => {
            // 1. Reset state to 0 (waiting)
            Atomics.store(signalArray, 0, 0);

            // 2. Tell main thread to show the inline input box
            self.postMessage({ type: MSG_TYPE.INPUT_REQ });

            // 3. Block this worker thread until main thread sets signalArray[0] to 1 (ready)
            Atomics.wait(signalArray, 0, 0);

            // 4. Read the byte length and decode the user's input
            const length = Atomics.load(signalArray, 1);
            const bytes = dataArray.slice(0, length);

            return decoder.decode(bytes);
        }
    })

    self.postMessage({ type: MSG_TYPE.STATUS, status: STATUS.READY });
}

let readyPromise = null;

self.onmessage = async (event) => {
    const { type, sharedBuffer, code } = event.data;

    if (type === MSG_TYPE.INIT) {
        readyPromise = init(sharedBuffer);
    } else if (type === MSG_TYPE.RUN) {
        await readyPromise; // make sure pyodide is loaded
        self.postMessage({ type: MSG_TYPE.STATUS, status: STATUS.RUNNING });

        try {
            await pyodide.loadPackagesFromImports(code);

            // Run in a fresh namespace so variables don't leak across runs
            const namespace = pyodide.globals.get("dict")();
            await pyodide.runPythonAsync(code, { globals: namespace });
            namespace.destroy();
        } catch (err) {
            self.postMessage({ type: MSG_TYPE.STDERR, text: err.toString() + "\n" });
        } finally {
            self.postMessage({ type: MSG_TYPE.STATUS, status: STATUS.READY });
        }
    }
};