export const loadFeedback = urlParams => {
    const feedbackPane = document.getElementById("feedback-pane");
    const iframe = document.createElement("iframe");
    iframe.setAttribute("src", `https://supportive-ide.github.io/symptom-feedback${urlParams}#feedback-content`)
    while (feedbackPane.childElementCount > 0) {
        feedbackPane.removeChild(feedbackPane.firstChild);
    }
    feedbackPane.appendChild(iframe);
}