import Sk from "skulpt";
import {EditorState} from "@codemirror/state";
import {keymap} from "@codemirror/view";
import { basicSetup, EditorView } from "codemirror";
import {defaultKeymap, indentWithTab} from "@codemirror/commands";
import {python} from "@codemirror/lang-python";
import { setDiagnostics, lintGutter } from "@codemirror/lint";
import {feedback} from "./lib/side-lib.es";
import { getCurrentFeedback, loadFeedback, updateFeedbackStatus } from "./showFeedback";
import { clearSavedCode, getSavedCode, saveCode } from "./storage";
import { openSavedDialog } from "./dialog";

/**
 * TODO: 
 * Code editor - dark / light themes
 * Feedback - set breakpoint to match this app
 * Move all hardcoded element selection into a configuration object in the editor
 */


/**
 * Configure a Codemirror + Skulpt editor and add it to the DOM
 * @param {HTMLElement} editor The HTML element to add the editor to.
 * @param {HTMLElement} output The HTML element used for terminal output.
 * @param {HTMLElement} help The HTML element used to display help.
 * @param {HTMLElement} runBtn The button that will run the code.
 * @param {HTMLElement} downloadBtn The button for downloading the code.
 */
export const setupEditor = (editor, output, help, runBtn, downloadBtn) => {

    // Indicators should be considered warnings by default. These indicators are errors.
    const errorIndicators = new Set(["AssignCompares", "ColonAssigns", "CompareMultipleValuesWithOr", "LocalVariablesAreGlobal",
                                    "PrintSameAsReturn", "ReturnWaitsForLoop", "StringMethodsModifyTheString", "TypeConversionModifiesArgument",
                                    "UnusedReturn"]);

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


    /**
     * Updates diagnostics (SIDE-lib feedback) if the editor text has changed.
     * @param {*} update A codemirror update event
     */
    const checkForIndicators = update => {
        // Only check if code has changed
        if (update.docChanged) {
            // Test
            saveCode(document.getElementById("code-title").innerText, view.state.doc.toString());

            const feedbackResults = feedback(view.state.doc.toString()).feedback;
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
                    severity: errorIndicators.has(miscon.type) ? "error" : "warning", 
                    message: miscon.firstMessage,
                    actions: [{
                        name: "More",
                        apply(view, from, to) { loadFeedback(help, miscon.extendedFeedbackParams) }
                    }]
                })
            }
            if (currentFeedback !== "" && !feedbackRelevant) {
                updateFeedbackStatus("Code has changed");
            }
            view.dispatch(setDiagnostics(view.state, diagnostics));
        }
    }

    /**
     * Get the current title of the code editor (the tab contents)
     * @returns {string}
     */
    const getCodeTitle = () => {
        // Avoid hardcoding
        return document.getElementById("code-title").innerText;
    }


    /**
     * Programmatically set the title of the code editor
     * @param {string} newTitle 
     */
    const setCodeTitle = newTitle => {
        // Avoid hardcoding
        document.getElementById("code-title").innerText = newTitle;
    }


    /**
     * Downloads the contents of the code editor as a Python file
     */
    const downloadCode = () => {
        const title = getCodeTitle();
        const fileName = title.innerText.endsWith(".py") ? title.innerText : `${title.innerText}.py`;
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
     * @returns {EditorView}
     */
    const createView = () => {
        const savedCode = getSavedCode();
        if (savedCode.hasOwnProperty("title") && savedCode.hasOwnProperty("contents")) {
            openSavedDialog(savedCode["title"], savedCode["contents"], () => setEditorContents(savedCode["title"], savedCode["contents"]), clearSavedCode)
        }
        return new EditorView({
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
    }


    const LINE = "% ";

    // Create a new Codemirror editor and add it to the DOM
    const view = createView();

    runBtn.addEventListener("click", runCode);
    downloadBtn.addEventListener("click", downloadCode);
}