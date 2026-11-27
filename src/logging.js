import { API_URL } from "./serverURL";
import axios from 'axios';
import { v4 as uuidV4 } from 'uuid';
/**
 * On load, check localStorage for existing clientID
 * If no id. register then store
 */

const UNREGISTERED = "unregistered";
const ID_STORE = "side-clientID";
const VERSION_ID = "TEST";

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
 * Describes a Misconception. Also describes a concept
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
 * Describes a Symptom. New for V2.
 */
class Symptom {
    #type;
    #block;
    #docIndex;
    #line;
    #lineIndex;
    #text;
    #otherProps;

    /**
     * 
     * @param {string} type 
     * @param {string} block 
     * @param {number} docIndex 
     * @param {number} line 
     * @param {number} lineIndex 
     * @param {string} text 
     * @param {{[key: string]: unknown}} otherProps 
     */
    constructor(type, block, docIndex, line, lineIndex, text, otherProps = {}) {
        this.#type = type;
        this.#block = block;
        this.#docIndex = docIndex;
        this.#line = line;
        this.#lineIndex = lineIndex;
        this.#text = text;
        this.#otherProps = otherProps;
    }

    /**
     * 
     * @returns {string}
     */
    getType() {
        return this.#type;
    }

    /**
     * 
     * @returns {string}
     */
    getBlock() {
        return this.#block;
    }

    /**
     * 
     * @returns {number}
     */
    getDocIndex() {
        return this.#docIndex;
    }

    /**
     * 
     * @returns {string}
     */
    getText() {
        return this.#text;
    }
}

/**
 * Describes a reason for detecting a symptom. New for V2.
 */
class Reason {
    #explanation;
    #contributingSymptoms;

    /**
     * 
     * @param {string} explanation 
     * @param {Symptom[]} contributingSymptoms 
     */
    constructor(explanation, contributingSymptoms = []) {
        this.#explanation = explanation;
        this.#contributingSymptoms = contributingSymptoms;
    }

    /**
     * 
     * @returns {Symptom[]}
     */
    getContributingSymptoms() {
        return this.#contributingSymptoms;
    }
}

/**
 * Describes a misconception occurrence. New for V2.
 */
class MisconceptionOccurrence {
    #docIndex;
    #line;
    #reason;

    /**
     * 
     * @param {number} docIndex 
     * @param {number} line 
     * @param {Reason} reason 
     */
    constructor(docIndex, line, reason) {
        this.#docIndex = docIndex;
        this.#line = line;
        this.#reason = reason;
    }

    /**
     * 
     * @returns {Reason}
     */
    getReason() {
        return this.#reason;
    }
}


/**
 * Describes a misconception in the V2 logging format.
 */
class MisconceptionV2Event extends BaseEvent {
    #misconceptionName;
    #occurrence;
    #symptomNames;
    #symptomBlocks;
    #symptomDocIndices;
    #symptomTexts;

    /**
     * 
     * @param {number} eventID 
     * @param {string} misconceptionName 
     * @param {number} occId 
     * @param {MisconceptionOccurrence} occ 
     */
    constructor(eventID, misconceptionName, occId, occ) {
        super(`${eventID}-${misconceptionName}-${occId}`);
        this.#misconceptionName = misconceptionName;
        this.#occurrence = occId;
        this.#symptomNames = [];
        this.#symptomBlocks = [];
        this.#symptomDocIndices = [];
        this.#symptomTexts = [];
        this.#populate(occ);
    }

    /**
     * 
     * @param {MisconceptionOccurrence} occ 
     */
    #populate(occ) {
        for (const symptom of occ.reason.contributingSymptoms) {
            this.#symptomNames.push(symptom.type);
            this.#symptomBlocks.push(symptom.block);
            this.#symptomDocIndices.push(symptom.docIndex);
            this.#symptomTexts.push(symptom.text);
        }
    }

    /**
     * 
     * @returns {string}
     */
    getMisconceptionName() {
        return this.#misconceptionName;
    }

    /**
     * 
     * @returns {number};
     */
    getOccurrence() {
        return this.#occurrence
    }

    /**
     * 
     * @returns {string[]}
     */
    getSymptomNames() {
        return this.#symptomNames;
    }

    /**
     * 
     * @returns {string[]}
     */
    getSymptomBlocks() {
        return this.#symptomBlocks;
    }

    /**
     * 
     * @returns {number[]}
     */
    getSymptomDocIndices() {
        return this.#symptomDocIndices;
    }

    /**
     * 
     * @returns {string[]}
     */
    getSymptomTexts() {
        return this.#symptomTexts;
    }

    toLogFormat(clientID, sessionID) {
        return {
            clientID, sessionID,
            eventID: this.getEventID(),
            misconceptionName: this.getMisconceptionName(),
            occurrence: this.getOccurrence(),
            symptomNames: this.getSymptomNames(),
            symptomBlocks: this.getSymptomBlocks(),
            symptomDocIndices: this.getSymptomDocIndices(),
            symptomTexts: this.getSymptomTexts()
        }
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

/**
 * Describes a function object returned by SIDE-lib. New for V2 logging.
 */
class FunctionEvent extends BaseEvent {
    #docIndex;
    #name;
    #block;
    #parameters;
    #returnTypes;

    /**
     * 
     * @param {number} eventID 
     * @param {number} docIndex 
     * @param {string} name 
     * @param {string} block 
     * @param {string[]} parameters 
     * @param {string[]} returnTypes 
     */
    constructor(eventID, docIndex, name, block, parameters = [], returnTypes = []) {
        super(eventID, `${eventID}-${name}-${docIndex}`);
        this.#docIndex = docIndex;
        this.#name = name;
        this.#block = block;
        this.#parameters = parameters;
        this.#returnTypes = returnTypes;
    }

    toLogFormat(clientID, sessionID) {
        return {
            clientID, sessionID,
            eventID: this.getEventID(),
            docIndex: this.#docIndex,
            name: this.#name,
            block: this.#block,
            parameters: this.#parameters,
            returnTypes: this.#returnTypes
        }
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
    #conceptEvents = [];
    #feedbackEvents = [];
    #feedbackActionEvents = [];
    #functionEvents = [];

    constructor(loggingActive = true) {
        Logger.#loggingActive = loggingActive;
        this.#sessionID = uuidV4();
        this.#setClientID();
    }

    /**
     * Creates a singleton Logger
     * @returns The existing Logger if it has already been created or a new Logger instance.
     */
    static getInstance() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const isActive = !urlParams.has("log") || urlParams.get("log") === false;
        console.log("Logging is active?", isActive);
        if (!Logger.#instance) {
            Logger.#instance = new Logger(isActive);
        }
        return Logger.#instance;
    }

    /**
     * Checks if the logger is active
     * @returns {boolean}
     */
    static isActive() {
        return Logger.#loggingActive;
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
                await axios.put(`${API_URL}/sessionV2`, { 
                    clientID: this.#clientID, 
                    sessionID: this.#sessionID,
                    extensionVersion: VERSION_ID,
                    showCodeLens: false
                });
                console.log("session started", this.#sessionID, "IDE version", VERSION_ID);
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
            const allConcepts = sideLibResult.parse && sideLibResult.parse.concepts? sideLibResult.parse.concepts: [];
            for (const concept of allConcepts) {
                this.#addConcept(eventID, concept);
            }
            const allFeedback = sideLibResult.feedback ? sideLibResult.feedback : [];
            for (const feedback of allFeedback) {
                this.#addFeedback(eventID, feedback);
            }
            const allBlocks = sideLibResult.parse.blocks ? sideLibResult.parse.blocks : {};
            const allFunctions = sideLibResult.parse.functions ? sideLibResult.parse.functions: [];
            if (Object.keys(allBlocks).length > 0) {
                const childBlocks = new Map(allBlocks.children.map(c => [c.id, c]));
                for (const func of allFunctions) {
                    const funcBlock = childBlocks.get(func.block);
                    let docIndex = funcBlock ? funcBlock.startIndex: -1;
                    this.#addFunction(eventID, func, docIndex);
                }
            }
        }
    }

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
        // V1
        // this.#misconceptionEvents.push(new MisconceptionEvent(eventID, misconceptionInfo.type, misconceptionInfo));

        // V2
        for (const [occId, occ] of misconceptionInfo.occurrences.entries()) {
            this.#misconceptionEvents.push(new MisconceptionV2Event(eventID, misconceptionInfo.type, occId, occ));
        }
    }


    /**
     * Track a new detected concept. From V2 logging onwards.
     * @param {number} eventID 
     * @param {object} conceptInfo 
     */
    #addConcept(eventID, conceptInfo) {
        for (const[occId, occ] of conceptInfo.occurrences.entries()) {
            this.#conceptEvents.push(new MisconceptionV2Event(eventID, conceptInfo.type, occId, occ));
        }
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

    /**
     * 
     * @param {number} eventID 
     * @param {object} functionInfo 
     * @param {number} docIndex 
     */
    #addFunction(eventID, functionInfo, docIndex) {
        this.#functionEvents.push(new FunctionEvent(eventID, docIndex, functionInfo.name, functionInfo.block, functionInfo.parameters, functionInfo.returnTypes));
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
                || this.#conceptEvents.length >= Logger.#maxLogSize
                || this.#feedbackEvents.length >= Logger.#maxLogSize
                || this.#feedbackActionEvents.length >= Logger.#maxLogSize
                || this.#functionEvents.length >=Logger.#maxLogSize
            );
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
            const concepts = this.#prepareToSend(this.#conceptEvents);
            const functions = this.#prepareToSend(this.#functionEvents);
            if (interactions.length > 0 || misconceptions.length > 0 || feedback.length > 0 || feedbackActions.length > 0
                || concepts.length > 0 || functions.length > 0
            ) {
                const response = (await axios.put(`${API_URL}/storeV2`, { interactions, misconceptions, feedback, feedbackActions, concepts, functions})).data;
                
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
                this.#conceptEvents = this.#conceptEvents.filter(event => updateAndKeep(event, response.savedConcepts, response.failedConcepts));
                this.#functionEvents = this.#functionEvents.filter(event => updateAndKeep(event, response.savedFunctions, response.failedFunctions));
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
