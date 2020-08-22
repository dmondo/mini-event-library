"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventLibrary = /** @class */ (function () {
    function EventLibrary() {
        this.eventsTable = {};
    }
    EventLibrary.prototype.signal = function (eventName, evtTime) {
        var exists = eventName in this.eventsTable;
        var eventTime = evtTime || new Date();
        if (!exists) {
            this.eventsTable[eventName] = [];
        }
        this.eventsTable[eventName].push(eventTime);
    };
    EventLibrary.prototype.getCount = function (eventName, msElapsed) {
        var currentTime = new Date();
        if (!msElapsed) {
            var eventArray = this.eventsTable[eventName];
            if (eventArray) {
                return eventArray.length;
            }
            return 0;
        }
        return this.eventsTable[eventName].filter(function (record) { return ((currentTime.getTime() - record.getTime()) <= msElapsed); }).length;
    };
    EventLibrary.prototype.getEvents = function () {
        return this.eventsTable;
    };
    return EventLibrary;
}());
exports.default = EventLibrary;
