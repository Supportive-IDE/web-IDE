import './style.css'
import { setupEditor } from './codeEditor.js'

setupEditor(document.getElementById("code-editor"), document.getElementById("output"), document.getElementById("feedback"),
            document.getElementById("run"), {
                downloadBtn: document.getElementById("download"),
                editorTitle: document.getElementById("code-title"),
                feedbackAnimator: document.querySelector(".container"),
                feedbackStatus: document.getElementById("feedback-status")
            });

document.getElementById("clear").addEventListener("click", () => {
    document.getElementById("output").innerText = "";
})