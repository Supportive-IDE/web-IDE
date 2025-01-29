import Sk from "skulpt";
import { EditorState, Compartment } from "@codemirror/state";
import { keymap} from "@codemirror/view";
import { basicSetup, EditorView } from "codemirror";
import { defaultKeymap, indentWithTab } from "@codemirror/commands";
import { python } from "@codemirror/lang-python";
import { setDiagnostics, lintGutter } from "@codemirror/lint";
import { lightTheme, darkTheme } from "./themes";
import {feedback} from "./lib/side-lib.es";
import { getCurrentFeedback, loadFeedback, updateFeedbackStatus } from "./showFeedback";
import { clearSavedCode, getSavedCode, saveCode } from "./storage";
import { openSavedDialog } from "./dialog";

/**
 * TODO: 
 * Feedback - set breakpoint and dark mode to match this app
 */


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
export const setupEditor = (editor, output, help, runBtn, optionalElements = {
    downloadBtn: undefined,
    editorTitle: undefined,
    feedbackAnimator: undefined,
    feedbackStatus: undefined
}) => {

    // Indicators should be considered warnings by default. These indicators are errors.
    const errorIndicators = new Set(["AssignCompares", "ColonAssigns", "CompareMultipleValuesWithOr", "LocalVariablesAreGlobal",
                                    "PrintSameAsReturn", "ReturnWaitsForLoop", "StringMethodsModifyTheString", "TypeConversionModifiesArgument",
                                    "UnusedReturn"]);

    const downloadBtn = optionalElements.downloadBtn;
    const editorTitle = optionalElements.editorTitle;
    const feedbackAnimator = optionalElements.feedbackAnimator;
    const feedbackStatus = optionalElements.feedbackStatus;

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
            saveCode(editorTitle ? editorTitle.innerText : "untitled.py", view.state.doc.toString());

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
                        apply(view, from, to) { loadFeedback(help, miscon.extendedFeedbackParams, feedbackAnimator, feedbackStatus) }
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


    const savedCodeIsDifferent = (savedTitle, savedContents) => {
        if (!editorTitle) {
            return true;
        }
        return savedTitle !== editorTitle.innerText || savedContents !== view.state.doc.toString();
    }


    const LINE = "% ";
    
    const theme = new Compartment;
    
    // Create a new Codemirror editor and add it to the DOM
    const view = createView();
    // Check for saved code
    const savedCode = getSavedCode();
    if (savedCode.hasOwnProperty("title") && savedCode.hasOwnProperty("contents") && savedCodeIsDifferent(savedCode["title"], savedCode["contents"])) {
        openSavedDialog(savedCode["title"], savedCode["contents"], () => setEditorContents(savedCode["title"], savedCode["contents"]), clearSavedCode)
    }

    // Button event listeners
    runBtn.addEventListener("click", runCode);
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