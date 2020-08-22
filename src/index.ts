class EventLibrary implements IEventLibrary {
  private eventsTable: IEventsTable;

  constructor() {
    this.eventsTable = {};
  }

  public signal(eventName: string, evtTime?: Date) {
    const exists = eventName in this.eventsTable;

    const eventTime = evtTime || new Date();

    if (!exists) {
      this.eventsTable[eventName] = [];
    }
    this.eventsTable[eventName].push(eventTime);
  }

  public getCount(eventName: string, msElapsed?: number) {
    const currentTime = new Date();

    if (!msElapsed) {
      const eventArray = this.eventsTable[eventName];
      if (eventArray) { return eventArray.length; }
      return 0;
    }

    return this.eventsTable[eventName].filter((record: Date) => (
      (currentTime.getTime() - record.getTime()) <= msElapsed
    )).length;
  }

  public getEvents() {
    return this.eventsTable;
  }
}

const createEventLibrary = (): IEventLibrary => new EventLibrary();

export { createEventLibrary, EventLibrary };
