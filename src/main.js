import './style.css'
import { setupEditor } from './codeEditor.js'

document.querySelector('#app').innerHTML = `
    <main>
        <div class="container">
            <div class="pane" id="code-pane">
                <div id="code-editor"></div>
                <button id="run">Run</button>
            </div>
            <div class="pane" id="output-pane">
            </div>
            <div class="pane" id="feedback-pane">
                <p>Feedback goes here</p>
            </div>
        </div>
    </main>
`

// setupCounter(document.querySelector('#counter'))
setupEditor(document.querySelector("#code-editor"), document.querySelector("#output-pane"),
            document.querySelector("#run"));
