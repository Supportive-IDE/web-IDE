const STORAGE_KEY = "supportiveIDE-web";
const PREFS = "-prefs";
const CODE = "-code";


/**
 * Save code to localStorage. Overwrites previously stored code
 * @param {string} title The code editor title
 * @param {string} contents The code editor contents
 */
export const saveCode = (title, contents) => {
    const toStore = {
        title,
        contents
    }
    localStorage.setItem(`${STORAGE_KEY}${CODE}`, JSON.stringify(toStore));
}


/**
 * Retrieves saved code from localStorage.
 * @returns {{title: string, contents: string} | {}} The saved code or an empty object
 */
export const getSavedCode = () => {
    const storedCode = localStorage.getItem(`${STORAGE_KEY}${CODE}`);
    if (storedCode !== null) {
        return JSON.parse(storedCode);
    }
    return {}
}


/**
 * Removes saved code from storage
 */
export const clearSavedCode = () => {
    localStorage.removeItem(`${STORAGE_KEY}${CODE}`);
}