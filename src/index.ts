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
    const eventArray = this.eventsTable[eventName];

    if (!eventArray) { return 0; }

    if (!msElapsed) {
      return eventArray.length;
    }

    return eventArray.filter((record: Date) => (
      (currentTime.getTime() - record.getTime()) <= msElapsed
    )).length;
  }

  public getEvents() {
    return this.eventsTable;
  }
}

const createEventLibrary = (): IEventLibrary => new EventLibrary();

export { createEventLibrary, EventLibrary };
