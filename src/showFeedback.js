const FEEDBACK_URL = "https://supportive-ide.github.io/symptom-feedback";

/**
 * Load the external feedback URL into the feedback pane
 * @param {HTMLElement} feedbackPane The HTML element to load the feedback into
 * @param {string} urlParams The URL params that contain info about an indicator.
 */
export const loadFeedback = (feedbackPane, urlParams) => {
    const iframe = document.createElement("iframe");
    iframe.setAttribute("src", `${FEEDBACK_URL}${urlParams}`)
    while (feedbackPane.childElementCount > 0) {
        feedbackPane.removeChild(feedbackPane.firstChild);
    }
    feedbackPane.appendChild(iframe);

    // Avoid hardcoding this
    const container = document.querySelector(".container");
    container.classList.add("feedback-active");
    updateFeedbackStatus("");

    document.getElementById("close").addEventListener("click", () => {
        container.classList.remove("feedback-active");
        setTimeout(() => {
            feedbackPane.removeChild(iframe);
            updateFeedbackStatus("");
        }, 1000);
    })

}

/**
 * Set the status message in the feedback pane
 * @param {string} message The message to display
 */
export const updateFeedbackStatus = message => {
    // Avoid hardcoding
    document.getElementById("feedback-status").innerText = message;
}


/**
 * Gets the URL params of the currently loaded feedback
 * @param {HTMLElement} feedbackPane The element containing the feedback
 * @returns {string} URL params if there is feedback loaded, or an empty string if there is no feedback
 */
export const getCurrentFeedback = (feedbackPane) => {
    const iframe = feedbackPane.querySelector("iframe");
    if (iframe) {
        return iframe.src.replace(FEEDBACK_URL, "");
    }
    return "";
}

