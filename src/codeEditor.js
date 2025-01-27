import Sk from "skulpt";
import {EditorState} from "@codemirror/state";
import {keymap} from "@codemirror/view";
import { basicSetup, EditorView } from "codemirror";
import {defaultKeymap, indentWithTab} from "@codemirror/commands";
import {python} from "@codemirror/lang-python";
import { setDiagnostics, lintGutter } from "@codemirror/lint";
import {feedback} from "./lib/side-lib.es";
import { loadFeedback } from "./showFeedback";


/**
 * Configure a Codemirror + Skulpt editor and add it to the DOM
 * @param {HTMLElement} editor The HTML element to add the editor to.
 * @param {HTMLElement} output The HTML element used for terminal output.
 * @param {HTMLElement} runBtn The button that will run the code.
 */
export const setupEditor = (editor, output, runBtn) => {

    /**
     * Run the code in the editor using Skulpt.
     */
    const runCode = () => {
        const code = view.state.doc.toString();
        Sk.configure({
            output: addOutput,
            __future__: Sk.python3,
            inputfun: inputFunc,
            inputfunTakesPrompt: true
        });

        const runner = Sk.misceval.asyncToPromise(() => Sk.importMainWithBody("<stdin>", false, code, true));
        runner.then(_ => {
            console.log("success");
        }, err => {
            addOutput(err.toString());
        });
    }


    /**
     * Handles the Python input function by adding a text input to the output. 
     * @param {string} prompt The input prompt message
     * @returns {Promise}
     */
    const inputFunc = prompt => {
        const p = new Promise((resolve, _) => {
            const userIn = document.createElement("p");
            const input = document.createElement("input");
            input.setAttribute("id", "userIn");
            input.setAttribute("type", "text");
            input.addEventListener("keydown", event => {
                if (event.key === "Enter") {
                    resolve(event.target.value);
                    userIn.innerText = `${LINE}${prompt}${event.target.value}`;
                }
            })

            const label = document.createElement("label");
            label.setAttribute("for", "userIn");
            label.innerText = `${LINE}${prompt}`;


            userIn.appendChild(label);
            userIn.appendChild(input);
            output.appendChild(userIn);
            scrollToBottom(output);
        });
        return p;
    }

    /**
     * Scrolls to the bottom of an element
     * @param {HTMLElement} element 
     */
    const scrollToBottom = element => {
        element.scrollTop = element.scrollHeight;
    }

    /**
     * Adds output to the "terminal"
     * @param {string} text The message to add to the terminal
     */
    const addOutput = text => {
        const newLine = document.createElement("p");
        newLine.innerText = `${LINE}${text}`;
        output.appendChild(newLine);
        scrollToBottom(output);
    }


    // May not be needed
    const checkForIndicators = update => {
        // Only check if code has changed
        if (update.docChanged) {
            const feedbackResults = feedback(view.state.doc.toString()).feedback;
            const diagnostics = []
            for (const miscon of feedbackResults) {
                diagnostics.push({
                    from: miscon.docIndex, 
                    to:miscon.docIndex + miscon.affectedText.length, 
                    severity: "error", 
                    message: miscon.firstMessage,
                    actions: [{
                        name: "Explain",
                        apply(view, from, to) { loadFeedback(miscon.extendedFeedbackParams) }
                    }]
                })
            }
            view.dispatch(setDiagnostics(view.state, diagnostics));
            // TODO: set some miscons as warning, others as error
        }
    }


    const LINE = "% ";

    // Create a new Codemirror editor and add it to the DOM
    const view = new EditorView({
        state: EditorState.create({
            doc: 'print("Hello, World!")',
            extensions: [
                basicSetup, python(),
                keymap.of([defaultKeymap, indentWithTab]),
                EditorView.updateListener.of(checkForIndicators),
                lintGutter()
            ]
        }),
        parent: editor
    });

    runBtn.addEventListener("click", runCode);
}