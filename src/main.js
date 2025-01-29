import './style.css'
import { setupEditor } from './codeEditor.js'

setupEditor(document.getElementById("code-editor"), document.getElementById("output"), document.getElementById("feedback"),
            document.getElementById("run"), document.getElementById("download"));

document.getElementById("clear").addEventListener("click", () => {
    document.getElementById("output").innerText = "";
})