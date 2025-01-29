const FEEDBACK_URL = "https://supportive-ide.github.io/symptom-feedback";

/**
 * Load the external feedback URL into the feedback pane
 * @param {HTMLElement} feedbackPane The HTML element to load the feedback into
 * @param {string} urlParams The URL params that contain info about an indicator.
 * @param {HTMLElement | undefined} feedbackAnimator The HTML element to animate when the feedback loads
 * @param {HTMLElement | undefined} feedbackStatus The HTML element that displays feedback status
 */
export const loadFeedback = (feedbackPane, urlParams, feedbackAnimator, feedbackStatus) => {
    const iframe = document.createElement("iframe");
    iframe.setAttribute("src", `${FEEDBACK_URL}${urlParams}`)
    while (feedbackPane.childElementCount > 0) {
        feedbackPane.removeChild(feedbackPane.firstChild);
    }
    feedbackPane.appendChild(iframe);

    if (feedbackAnimator) {
        feedbackAnimator.classList.add("feedback-active");
    }
    
    updateFeedbackStatus(feedbackStatus, "");

    document.getElementById("close").addEventListener("click", () => {
        if (feedbackAnimator) {
            feedbackAnimator.classList.remove("feedback-active");
        }
        setTimeout(() => {
            feedbackPane.removeChild(iframe);
            updateFeedbackStatus(feedbackStatus, "");
        }, 1000);
    })

}

/**
 * Set the status message in the feedback pane
 * @param {HTMLElement | undefined} element The element to put the message in
 * @param {string} message The message to display
 */
export const updateFeedbackStatus = (element, message) => {
    if (element) {
        element.innerText = message;
    }
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

