/**
 * Dialog to allow the user to decide whether to open saved code from localStorage
 * @param {string} savedCodeTitle The title of the saved code
 * @param {string} savedCodeContents The contents of the saved code
 * @param {function} onOpen The function to call when the user opts to open the saved code
 * @param {function} onCancel The function to call when the user does not opt to open the saved code
 */
export const openSavedDialog = (savedCodeTitle, savedCodeContents, onOpen, onCancel) => {
    const dialog = document.createElement("dialog");
    dialog.innerHTML = `<p>There is code saved in this browser:</p>
                <p class="small"><code>${savedCodeTitle}</code></p>
                <pre>${savedCodeContents}</pre>
                <p>Would you like to open this code?
                <form class="button-panel">
                    <button type="submit" class="confirm" id="open-saved" autofocus>Yes</button>
                    <button type="submit" class="cancel" id="start-fresh">No</button>
                </form>`
    document.body.appendChild(dialog);
    dialog.querySelector("#open-saved").addEventListener("click", event => {
        event.preventDefault();
        onOpen();
        dialog.close();
    });

    dialog.querySelector("#start-fresh").addEventListener("click", event => {
        event.preventDefault();
        onCancel();
        dialog.close();
    });
    
    dialog.showModal()
}