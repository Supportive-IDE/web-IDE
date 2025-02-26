import { API_URL } from "./serverURL";
import axios from 'axios';
import { v4 as uuidV4 } from 'uuid';
/**
 * On load, check localStorage for existing clientID
 * If no id. register then store
 */

const UNREGISTERED = "unregistered";
const ID_STORE = "side-clientID";

//#region enums
class Status {
    static ready = 0;
    static inProgress = 1;
    static complete = 2;

}

class RegistrationStatus {
    static idPending = 0;
    static idReceived = 0;
    static idRefused = 0;
}

class EventTypes {
    static open = "open";
    static insert = "insert";
    static delete = "delete";
    static paste = "paste";
    static run = "run";
    static action = "action"; // for clicks
    static hover = "hover";
}
//#endregion


//#region logging event types
class BaseEvent {
    #eventID;
    #logStatus;

    /**
     * 
     * @param {string} eventID 
     */
    constructor(eventID) {
        this.#eventID = eventID;
        this.#logStatus = Status.ready; 
    }

    getEventID() {
        return this.#eventID;
    }

    getLogStatus() {
        return this.#logStatus;
    }

    setSaveInProgress() {
        this.#logStatus = Status.inProgress;
    }

    setSaveComplete() {
        this.#logStatus = Status.complete;
    }

    setSaveFailed() {
        this.#logStatus = Status.ready;
    }

    toLogFormat(clientID, sessionID) {
        return { clientID, sessionID }
    }

}

/**
 * Describes an interaction event (all other event types should be associated 
 * with an interaction event)
 */
class InteractionEvent extends BaseEvent {
    #eventType;
    #insertSize = 0;
    #deleteSize = 0;
    #editLocation = 0;
    #timeStamp;

    /**
     * 
     * @param {number} eventID 
     * @param {string | undefined} eventType 
     * @param {number} inserts 
     * @param {number} deletes 
     * @param {number} editLocation
     * @param {number} time 
     */
    constructor(eventID, eventType, inserts, deletes, editLocation, time) {
        super(eventID.toString());
        this.#eventType = eventType;
        this.#insertSize = inserts;
        this.#deleteSize = deletes;
        this.#timeStamp = time;
        this.#editLocation = editLocation;
        if (eventType === undefined) { // insert or delete
            // If insert > 1 then it's a paste
            if (inserts.length > 1) {
                this.#eventType = EventTypes.paste;
            } else if (inserts === 1) {
                this.#eventType = EventTypes.insert;
            } else {
                this.#eventType = EventTypes.delete;
            }
        }
    }


    //#region getters
    getEventType() {
        return this.#eventType;
    }

    getInsertSize() {
        return this.#insertSize;
    }

    getDeleteSize() {
        return this.#deleteSize;
    }

    getEditLocation() {
        return this.#editLocation;
    }

    getTimestamp() {
        return this.#timeStamp;
    }
    //#endregion

    /**
     * Creates a JSON object describing the interaction event to send to the database
     * @param clientID The client ID
     * @param sessionID The file ID
     * @returns A JSON object describing the interaction event
     */
    toLogFormat(clientID, sessionID) {
        return {
            clientID, sessionID,
            eventID: this.getEventID(),
            eventType: this.getEventType(),
            insertSize: this.getInsertSize(),
            deleteSize: this.getDeleteSize(),
            editLocation: this.getEditLocation(),
            timestamp: this.getTimestamp(),
        };
    }
}


/**
 * Describes a Misconception
 */
class MisconceptionEvent extends BaseEvent {
    #misconceptionName; // string, the type e.g. CompareMultipleWithOr
    #rawInfo; // The JSON object from SIDE-lib describing the misconception


    /**
     * 
     * @param {number} eventID 
     * @param {string} misconceptionName 
     * @param {{}} rawInfo 
     */
    constructor(eventID, misconceptionName, rawInfo) {
        super(`${eventID}-${misconceptionName}`);
        this.#misconceptionName = misconceptionName;
        this.#rawInfo = rawInfo;
    }


    getMisconceptionName() {
        return this.#misconceptionName;
    }

    getRawInfo() {
        return this.#rawInfo;
    }

    toLogFormat(clientID, sessionID) {
        return {
            clientID, sessionID,
            eventID: this.getEventID(),
            misconceptionName: this.getMisconceptionName(),
            rawInfo: this.getRawInfo()
        };
    }
}


/**
 * Describes a Feedback object returned by SIDE-lib
 */
class FeedbackEvent extends BaseEvent {
    #misconceptionName;
    #docIndex;
    #affectedText;
    #firstMessage;
    #extendedFeedbackParams;

    /**
     * 
     * @param {number} eventID 
     * @param {string} misconceptionName 
     * @param {number} docIndex 
     * @param {string} affectedText 
     * @param {string} firstMessage 
     * @param {string} extendedFeedbackParams 
     */
    constructor (eventID, misconceptionName, docIndex, affectedText, firstMessage, extendedFeedbackParams) {
        super(`${eventID}-${misconceptionName}-${docIndex}`);
        this.#misconceptionName = misconceptionName;
        this.#docIndex = docIndex;
        this.#affectedText = affectedText;
        this.#firstMessage = firstMessage;
        this.#extendedFeedbackParams = extendedFeedbackParams;
    }

    toLogFormat(clientID, sessionID) {
        return {
            clientID, sessionID,
            eventID: this.getEventID(),
            misconceptionName: this.#misconceptionName,
            docIndex: this.#docIndex,
            affectedText: this.#affectedText,
            firstMessage: this.#firstMessage,
            extendedFeedbackParams: this.#extendedFeedbackParams
        };
    }

}

/**
 * Describes an event where the user has clicked on a feedback action
 */
class FeedbackActionEvent extends BaseEvent {
    #extendedFeedbackParams;
    #type;

    /**
     * 
     * @param {number} eventID 
     * @param {string} extendedFeedbackParams 
     * @param {EventTypes} actionType
     */
    constructor(eventID, extendedFeedbackParams, actionType) {
        super(eventID.toString());
        this.#extendedFeedbackParams = extendedFeedbackParams;
        this.#type = actionType;
    }

    toLogFormat(clientID, sessionID) {
        return {
            clientID, sessionID,
            eventID: this.getEventID(),
            extendedFeedbackParams: this.#extendedFeedbackParams,
            type: this.#type
        };
    }

}

//#endregion

export class Logger {
    static #maxLogSize = 10;
    static #instance = undefined;
    #clientID = UNREGISTERED;
    #sessionID;
    static #loggingActive;
    static #registrationStatus = RegistrationStatus.idPending;

    // event tracking
    #lastInteractionEvent; // InteractionEvent | undefined
    #interactionEvents = [];
    #misconceptionEvents = [];
    #feedbackEvents = [];
    #feedbackActionEvents = [];

    constructor(loggingActive = true) {
        Logger.#loggingActive = loggingActive;
        this.#sessionID = uuidV4();
        this.#setClientID();
    }

    /**
     * Creates a singleton Logger
     * @param isActive 
     * @returns The existing Logger if it has already been created or a new Logger instance.
     */
    static getInstance(isActive) {
        if (!Logger.#instance) {
            Logger.#instance = new Logger(isActive);
        }
        return Logger.#instance;
    }

    //#region ID setup
    
    /**
     * Checks for and retrieves the client ID from local storage
     * @returns {string}
     */
    #getIDFromStorage() {
        if (localStorage.getItem(ID_STORE)) {
            return localStorage.getItem(ID_STORE);
        }
        return UNREGISTERED;
    }

    /**
     * Gets a new UUID for this client
     * @returns The UUID if registration is successful or "unregistered" if not
     */
    async #registerWithDB() {
        try {
            const response = await axios.put(`${API_URL}/register`, { clientType: "WebIDE"});
            return response.data;
        } catch (error) {
            console.log("Unable to register with DB.", error);
            return UNREGISTERED;
        }
    }


    /**
     * Last step to set the client ID and associated status flags
     * @param {string} id 
     */
    #finaliseID(id) {
        this.#clientID = id;
        Logger.#registrationStatus = RegistrationStatus.idReceived;
        this.#startSession();
    }


    /**
     * Manages the client ID setting process
     * 1. Check local storage
     * 2. If not in local storage, register with the database
     * 3. Update registrationStatus based on outcome
     */
    async #setClientID() {
        if (Logger.#loggingActive) {
            let id = this.#getIDFromStorage();
            if (id === UNREGISTERED) {
                Logger.#registrationStatus = RegistrationStatus.idPending;
                // try db
                id = await this.#registerWithDB();
                // save to storage
                if (id !== UNREGISTERED) {
                    localStorage.setItem(ID_STORE, id);
                    this.#finaliseID(id);
                } else {
                    Logger.#registrationStatus = RegistrationStatus.idRefused;
                    Logger.#loggingActive = false;
                }
            } else {
                // Retrieved from storage
                console.log("ID in storage", id);
                this.#finaliseID(id);
            }
        }
    }

    async #startSession() {
        if (Logger.#loggingActive) {
            try {
                await axios.put(`${API_URL}/session`, { clientID: this.#clientID, sessionID: this.#sessionID});
                console.log("session started", this.#sessionID);
            } catch (error) {
                console.log("Couldn't start a logging session:", error);
            }
        } else {
            console.log("not active")
        }
        console.log(this.#sessionID)
    }
    //#endregion

    //#region logging
    /**
     * The main logging method. Tracks all events, misconceptions, 
     * feedback objects, and feedback actions and triggers writing 
     * to the database once the log reaches the maximum size.
     * @param {*} update CodeMirror update event
     * @param {{}} sideLibResult Result of SIDE-lib parse
     * @param {string | undefined} eventType 
     */
    log(update, sideLibResult, eventType = undefined) {
        if (Logger.#loggingActive) {
            const inserts = update.changes.inserted.reduce((sum, obj) =>  sum + obj.length, 0);
            const deletes = (update.startState.doc.toString().length + inserts) - update.state.doc.toString().length;
            const editLocation = update.changes.sections.length > 0 ? update.changes.sections[0] : -1;
            const time = Date.now();
            // Add interaction
            const eventID = this.#addInteraction(eventType, inserts, deletes, editLocation, time);
            // misconceptions and feedback next
            this.#logMisconsAndFeedback(eventID, sideLibResult);
            if (this.#logIsReady()) {
                this.#checkAndSendData();
            }
        }
    }

    logRun(sideLibResult) {
        if (Logger.#loggingActive) {
            const time = Date.now();
            // Add interaction
            const eventID = this.#addInteraction(EventTypes.run, 0, 0, 0, time);
            // misconceptions and feedback next
            this.#logMisconsAndFeedback(eventID, sideLibResult);
            if (this.#logIsReady()) {
                this.#checkAndSendData();
            }
        }
    }

    /**
     * Logs a feedback action event
     * @param {string} params The URL params for the extended feedback
     */
    logAction(params, actionType = EventTypes.action) {
        if (Logger.#loggingActive) {
            const time = Date.now();
            const eventID = this.#addInteraction(actionType, 0, 0, 0, time);
            this.#addFeedbackAction(eventID, params);
            if (this.#logIsReady()) {
                this.#checkAndSendData();
            }
        }
    }

    #logMisconsAndFeedback(eventID, sideLibResult) {
        if (eventID > -1) {
            const allMiscons = sideLibResult.parse && sideLibResult.parse.misconceptions ? sideLibResult.parse.misconceptions : [];
            for (const miscon of allMiscons) {
                this.#addMisconception(eventID, miscon);
            }
            const allFeedback = sideLibResult.feedback ? sideLibResult.feedback : [];
            for (const feedback of allFeedback) {
                this.#addFeedback(eventID, feedback);
            }
        }
    }

    // TODO: Log action hovers and clicks - check in VSCode ext if miscons should be recorded too... prob not?

    /**
     * Tracks an interaction event
     * @param {string | undefined} possibleEventType 
     * @param {number} inserts 
     * @param {number} deletes 
     * @param {number} editLocation 
     * @param {number} time 
     * @returns {number} The id of the new event or -1 if it couldn't be tracked
     */
    #addInteraction(possibleEventType, inserts, deletes, editLocation, time) {
        const eventID = this.#lastInteractionEvent ? Number.parseInt(this.#lastInteractionEvent.getEventID()) + 1 : 0; 
        // Either the passed in event type (save / close, or open if this is the first event, or insert or delete)
        if (possibleEventType === undefined && this.#lastInteractionEvent !== undefined && inserts === 0 && deletes === 0) {
            // not a loggable event - duplicate open usually
            return -1;
        }
        this.#lastInteractionEvent = new InteractionEvent(eventID, this.#lastInteractionEvent === undefined && inserts > 1 ? EventTypes.open : possibleEventType,
                                                    inserts, deletes, editLocation, time);

        this.#interactionEvents.push(this.#lastInteractionEvent);
        return eventID;
    }

     /**
     * Track a new detected misconception
     * @param {number} eventID The ID of the event the misconception is associated with
     * @param {object} misconceptionInfo Information about the misconception
     */
    #addMisconception(eventID, misconceptionInfo) {
        this.#misconceptionEvents.push(new MisconceptionEvent(eventID, misconceptionInfo.type, misconceptionInfo));
    }


    /**
     * Track a feedback object returned by SIDE-lib
     * @param {number} eventID The ID of the event the feedback is associated with
     * @param {object} feedbackInfo Information about the feedback
     */
    #addFeedback(eventID, feedbackInfo) {
        this.#feedbackEvents.push(new FeedbackEvent(eventID, feedbackInfo.type, feedbackInfo.docIndex, feedbackInfo.affectedText, feedbackInfo.firstMessage, feedbackInfo.extendedFeedbackParams));
    }

    /**
     * Track an action on feedback (request for extra guidance)
     * @param {number} eventID The ID of the event the feedback is associated with
     * @param {object} feedbackParams The URL params for the extended guidance
     */
    #addFeedbackAction(eventID, feedbackParams) {
        this.#feedbackActionEvents.push(new FeedbackActionEvent(eventID, feedbackParams, "click"));
    }

    //#endregion

    //#region send to database
    /**
     * Checks if the client ID is available and if any of the event trackers
     * have exceeded the maximum log size
     * @returns True if events should be sent to the database
     */
    #logIsReady() {
        return Logger.#registrationStatus === RegistrationStatus.idReceived
                && (this.#interactionEvents.length >= Logger.#maxLogSize
                || this.#misconceptionEvents.length >= Logger.#maxLogSize
                || this.#feedbackEvents.length >= Logger.#maxLogSize
                || this.#feedbackActionEvents.length >= Logger.#maxLogSize);
    }

    /**
     * Convert all tracked objects to object literals to be sent to the database
     * @param eventArr An array of tracked objects (JS classes)
     * @returns An array of objects to send to the database
     */
    #prepareToSend(eventArr) {
        const prepared = [];
        for (const event of eventArr) {
            if (event.getLogStatus() === Status.ready) {
                event.setSaveInProgress();
                prepared.push(event.toLogFormat(this.#clientID, this.#sessionID));
            }
        }
        return prepared;
    }


    /**
     * Send all data to the database and update local tracking when a response is 
     * received e.g. remove events that have been successfully stored.
     */
    async #checkAndSendData() {
        try {
            const interactions = this.#prepareToSend(this.#interactionEvents);
            const misconceptions = this.#prepareToSend(this.#misconceptionEvents);
            const feedback = this.#prepareToSend(this.#feedbackEvents);
            const feedbackActions = this.#prepareToSend(this.#feedbackActionEvents);
            if (interactions.length > 0 || misconceptions.length > 0 || feedback.length > 0 || feedbackActions.length > 0) {
                const response = (await axios.put(`${API_URL}/store`, { interactions, misconceptions, feedback, feedbackActions})).data;
                
                /**
                 * Updates the log status of an event
                 * @param {BaseEvent} event The event that has been logged
                 * @param {string[]} saved The ids of saved events in the same category
                 * @param {string[]} failed The ids of failed events in the same category
                 * @returns {boolean} Returns true if the event should be kept in local tracking (it wasn't logged) or false if it can be discarded
                 */
                const updateAndKeep = (event, saved, failed) => {
                    if (saved.includes(event.getEventID())) {
                        event.setSaveComplete();
                        return false;
                    } else if (failed.includes(event.getEventID()))  {
                        event.setSaveFailed();
                    }
                    return true;
                };

                this.#interactionEvents = this.#interactionEvents.filter(event => updateAndKeep(event, response.savedEdits, response.failedEdits));
                this.#misconceptionEvents = this.#misconceptionEvents.filter(event => updateAndKeep(event, response.savedMisconceptions, response.failedMisconceptions));
                this.#feedbackEvents = this.#feedbackEvents.filter(event => updateAndKeep(event, response.savedFeedback, response.failedFeedback));
                this.#feedbackActionEvents = this.#feedbackActionEvents.filter(event => updateAndKeep(event, response.savedActions, response.failedActions));
                if (this.#logIsReady()) {
                    this.#checkAndSendData();
                }
            }
        } catch (error) {
            console.log("oops", error);
        }
    }
    //#endregion

}
