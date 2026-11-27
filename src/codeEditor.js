import { EditorState, Compartment } from "@codemirror/state";
import { keymap } from "@codemirror/view";
import { basicSetup, EditorView } from "codemirror";
import { defaultKeymap, indentWithTab } from "@codemirror/commands";
import { python } from "@codemirror/lang-python";
import { setDiagnostics, lintGutter } from "@codemirror/lint";
import { lightTheme, darkTheme } from "./themes";
import {feedback} from "./lib/side-lib.es";
import { getCurrentFeedback, loadFeedback, updateFeedbackStatus } from "./showFeedback";
import { clearSavedCode, getSavedCode, saveCode } from "./storage";
import { openSavedDialog } from "./dialog";
import { Logger } from "./logging";
import { MSG_TYPE, STATUS } from "./utils";
import Worker from './pyodideWorker?worker';


/**
 * Configure a Codemirror + Skulpt editor and add it to the DOM
 * @param {HTMLElement} editor The HTML element to add the editor to.
 * @param {HTMLElement} output The HTML element used for terminal output.
 * @param {HTMLElement} help The HTML element used to display help.
 * @param {HTMLElement} runBtn The button that will run the code.
 * @param {{
 *      downloadBtn: undefined | HTMLElement, 
 *      editorTitle: undefined | HTMLElement, 
 *      feedbackAnimator: undefined | HTMLElement,
 *      feedbackStatus: undefined | HTMLElement
 * }} optionalElements HTMLElements used for various display changes
 */
export const setupEditor = (editor, output, help, runBtn, stopBtn, optionalElements = {
    downloadBtn: undefined,
    editorTitle: undefined,
    feedbackAnimator: undefined,
    feedbackStatus: undefined
}) => {

    // Indicators should be considered warnings by default. These indicators are errors.
    const errorIndicators = new Set(["AssignCompares", "ColonAssigns", "CompareMultipleValuesWithOr", "LocalVariablesAreGlobal",
                                    "PrintSameAsReturn", "ReturnWaitsForLoop", "StringMethodsModifyTheString", "TypeConversionModifiesArgument",
                                    "UnusedReturn"]);

    // UI elements                               
    const downloadBtn = optionalElements.downloadBtn;
    const editorTitle = optionalElements.editorTitle;
    const feedbackAnimator = optionalElements.feedbackAnimator;
    const feedbackStatus = optionalElements.feedbackStatus;

    // Web worker
    let worker = null;
    const encoder = new TextEncoder();
    let sharedBuffer = null;
    let signalArray = null;
    let dataArray = null;


    /**
     * Scrolls to the bottom of an element
     * @param {HTMLElement} element 
     */
    const scrollToBottom = element => {
        element.scrollTop = element.scrollHeight;
    }

    /**
     * Create a new line in the output
     */
    const prepOutputLine = () => {
        const newLine = document.createElement("p");
        newLine.innerHTML = LINE;
        output.appendChild(newLine);
    }

    /**
     * Adds output to the "terminal"
     * @param {string} text The message to add to the terminal
     */
    const addOutput = text => {
        if (output.children.length === 0) {
            prepOutputLine();
        }
        if (text !== "\n") {
            output.lastElementChild.innerHTML += text;
        }
        if (text.endsWith("\n")) {
            prepOutputLine();
        }

        scrollToBottom(output);
    }


    /**
     * Updates diagnostics (SIDE-lib feedback) if the editor text has changed.
     * @param {*} update A codemirror update event
     */
    const checkForIndicators = update => {
        // Only check if code has changed
        if (update.docChanged) {
            saveCode(editorTitle ? editorTitle.innerText : "untitled.py", view.state.doc.toString());
            const sideLibResults = feedback(view.state.doc.toString(), true, {showConcepts: true, showFunctions: true, showBlocks: true});
            logger.log(update, sideLibResults); 
            const feedbackResults = sideLibResults.feedback;
            const currentFeedback = getCurrentFeedback(help);
            let feedbackRelevant = false;
            const diagnostics = []
            for (const miscon of feedbackResults) {
                if (miscon.extendedFeedbackParams === currentFeedback) {
                    feedbackRelevant = true;
                }
                diagnostics.push({
                    from: miscon.docIndex, 
                    to:miscon.docIndex + miscon.affectedText.length, 
                    severity: errorIndicators.has(miscon.type) ? "error" : "info", 
                    message: miscon.firstMessage,
                    actions: [{
                        name: "More",
                        apply(view, from, to) { 
                            logger.logAction(miscon.extendedFeedbackParams);
                            loadFeedback(help, miscon.extendedFeedbackParams, feedbackAnimator, feedbackStatus); 
                        }
                    }]
                })
            }
            if (currentFeedback !== "" && !feedbackRelevant) {
                updateFeedbackStatus(feedbackStatus, "Code has changed");
            }
            view.dispatch(setDiagnostics(view.state, diagnostics));
        }
    }

    /**
     * Get the current title of the code editor (the tab contents)
     * @returns {string}
     */
    const getCodeTitle = () => {
        return editorTitle ? editorTitle.innerText : "untitled.py";
    }


    /**
     * Programmatically set the title of the code editor
     * @param {string} newTitle 
     */
    const setCodeTitle = newTitle => {
        if (editorTitle) {
            editorTitle.innerText = newTitle;
        }
    }


    /**
     * Downloads the contents of the code editor as a Python file
     */
    const downloadCode = () => {
        const title = getCodeTitle();
        const fileName = title.endsWith(".py") ? title : `${title}.py`;
        const contents = view.state.doc.toString();
        const downloadLink = document.createElement("a");
        downloadLink.setAttribute("href", `data:text/plain;charset=utf-8,${encodeURIComponent(contents)}`);
        downloadLink.setAttribute("download", fileName);
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }

    /**
     * Populate the editor with new content
     * @param {string} title The filename (tab title)
     * @param {string} contents The code
     */
    const setEditorContents = (title, contents) => {
        setCodeTitle(title);
        view.dispatch({
            changes: {
                from: 0, 
                to: view.state.doc.length, 
                insert: contents
            }
        });
    }


    /**
     * Creates and configures the code editor, loading code from localStorage if there is any
     * @param {boolean} startingCode The code to load in the editor
     * @returns {EditorView}
     */
    const createView = (startingCode = 'print("Hello, World!")') => {
        const extensions = [basicSetup, python(), keymap.of([defaultKeymap, indentWithTab]), 
                            EditorView.updateListener.of(checkForIndicators), lintGutter(),
                            theme.of(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? darkTheme : lightTheme)];

        return new EditorView({
            state: EditorState.create({
                doc: startingCode,
                extensions,
            }),
            parent: editor
        });
    }


    /**
     * Helper function to check if the code in localStorage is the same as the default editor code
     * @param {string} savedTitle 
     * @param {string} savedContents 
     * @returns {boolean} True if the localStorage code is different from the default code
     */
    const savedCodeIsDifferent = (savedTitle, savedContents) => {
        if (!editorTitle) {
            return true;
        }
        return savedTitle !== editorTitle.innerText || savedContents !== view.state.doc.toString();
    }


    /**
     * Helper function to activate a Codemirror diagnostic action when the user 
     * clicks anywhere in the diagnostic tooltip.
     */
    const watchForTooltips = () => {
        const observer = new MutationObserver((mutationsList, observer) => {
            const toolTip = document.querySelector(".cm-tooltip");
            if (toolTip) {
                toolTip.addEventListener("click", event => {
                    const tooltipBtn = toolTip.querySelector("button");
                    if (tooltipBtn) {
                        tooltipBtn.click();
                    }
                });
            }
        });
    
        const cmEditor = document.querySelector('.cm-editor');
        const config = { childList: true, subtree: true };
        observer.observe(cmEditor, config);
    }

    /**
     * Handles the terminal UI when an input() prompt is running
     */
    const prepareInput = () => {
        const userIn = document.createElement("p");
        const input = document.createElement("input");
        input.setAttribute("id", "userIn");
        input.setAttribute("type", "text");
        input.addEventListener("keydown", processInput);

        const label = document.createElement("label");
        label.setAttribute("for", "userIn");
        label.innerText = `${LINE}`;

        userIn.appendChild(label);
        userIn.appendChild(input);
        output.appendChild(userIn);
        input.focus();
        scrollToBottom(output);
    }

    /**
     * Processes user input. Written with help from Gemini.
     * @param {Event} event Keyboard event on a user input field
     */
    const processInput = (event) => {
        if (event.key === "Enter") {
            event.target.remove();
            addOutput(event.target.value + "\n")

            // Encode text (+ newline for Python's readline) into the shared buffer
            const encoded = encoder.encode(event.target.value);
            const byteLength = Math.min(encoded.length, dataArray.length);
            dataArray.set(encoded.subarray(0, byteLength));

            // Store byte length, flip lock state to 1, and wake the worker
            Atomics.store(signalArray, 1, byteLength);
            Atomics.store(signalArray, 0, 1);
            Atomics.notify(signalArray, 0, 1);
        }

    }

    /**
     * Starts the pyodide web worker. Written with help from Gemini.
     */
    const spawnWorker = () => {
        // Terminate any running worker
        if (worker) {
            worker.terminate();
        }

        // Allocated 4096 bytes: 8 bytes header + 4088 bytes text buffer
        sharedBuffer = new SharedArrayBuffer(4096);
        signalArray = new Int32Array(sharedBuffer, 0, 2);
        dataArray = new Uint8Array(sharedBuffer, 8);

        worker = new Worker();
        worker.postMessage({ type: MSG_TYPE.INIT, sharedBuffer });

        worker.onmessage = event => {
            const { type, text, status } = event.data;

            switch (type) {
                case MSG_TYPE.STDOUT:
                    addOutput(text);
                    break;
                case MSG_TYPE.STDERR:
                    addOutput(`[Error] ${text}\n`);
                    break;
                case MSG_TYPE.INPUT_REQ:
                    prepareInput();
                    break;
                case MSG_TYPE.STATUS:
                    if (status === STATUS.LOADING) {
                        runBtn.disabled = true;
                        stopBtn.disabled = true;
                        console.log("Loading...\n");
                    } else if (status === STATUS.READY) {
                        runBtn.disabled = false;
                        stopBtn.disabled = true;
                        console.log("Ready!\n");
                    } else if (status === STATUS.RUNNING) {
                        runBtn.disabled = true;
                        stopBtn.disabled = false;
                    }
                    break;
                default:
                    console.log("Unknown message type from pyodide:", type);
                    break;
            }
        }

        worker.onerror = (err) => {
            console.log(err)
            runBtn.disabled = false;
            stopBtn.disabled = true;
        }
    }

    // Start the web worker
    spawnWorker();
    

    const LINE = "% ";
    
    const theme = new Compartment;
    
    // Create a new Codemirror editor and add it to the DOM
    const view = createView();
    watchForTooltips();

    // Get the logger ready
    const logger = Logger.getInstance();

    // Check for saved code
    const savedCode = getSavedCode();
    if (savedCode.hasOwnProperty("title") && savedCode.hasOwnProperty("contents") && savedCodeIsDifferent(savedCode["title"], savedCode["contents"])) {
        openSavedDialog(savedCode["title"], savedCode["contents"], () => setEditorContents(savedCode["title"], savedCode["contents"]), clearSavedCode)
    }

    // Button event listeners
    runBtn.addEventListener("click", () => {
        if (!worker) {
            addOutput(`[Error] Python runtime not ready!\n`);
            return;
        }
        const code = view.state.doc.toString();
        const sideLibResults = feedback(code, true);
        logger.logRun(sideLibResults);
        worker.postMessage({ type: MSG_TYPE.RUN, code });

    });

    stopBtn.addEventListener("click", () => {
        runBtn.disabled = false;
        stopBtn.disabled = true;
        addOutput("[Info] Execution stopped!\n");
        spawnWorker();
    })

    if (downloadBtn) {
        downloadBtn.addEventListener("click", downloadCode);
    }

    // Theme change event listener
    if (window.matchMedia) {
        const checkMode = window.matchMedia('(prefers-color-scheme: dark)');
        checkMode.addEventListener("change", event => {
            view.dispatch({
                effects: theme.reconfigure(event.matches ? darkTheme : lightTheme)
            });
        })
    }
}