"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventLibrary = exports.createEventLibrary = void 0;
class EventLibrary {
    constructor() {
        this.eventsTable = {};
    }
    signal(eventName, evtTime) {
        const exists = eventName in this.eventsTable;
        const eventTime = evtTime || new Date();
        if (!exists) {
            this.eventsTable[eventName] = [];
        }
        this.eventsTable[eventName].push(eventTime);
    }
    getCount(eventName, msElapsed) {
        const currentTime = new Date();
        if (!msElapsed) {
            const eventArray = this.eventsTable[eventName];
            if (eventArray) {
                return eventArray.length;
            }
            return 0;
        }
        return this.eventsTable[eventName].filter((record) => ((currentTime.getTime() - record.getTime()) <= msElapsed)).length;
    }
    getEvents() {
        return this.eventsTable;
    }
}
exports.EventLibrary = EventLibrary;
const createEventLibrary = () => new EventLibrary();
exports.createEventLibrary = createEventLibrary;
