class EventLibrary implements IEventLibrary {
  private countsSummary: ICountsTable;

  private eventsTable: IEvent[];

  constructor() {
    this.countsSummary = {};
    this.eventsTable = [];
  }

  public signal(eventName: string, evtTime?: Date) {
    const exists = eventName in this.countsSummary;

    const eventTime = evtTime || new Date();

    // JS array size ceiling is 2 ** 32 - 1
    if (this.eventsTable.length > 2 ** 31) {
      this.eventsTable.shift();
    }

    this.eventsTable.push({ eventName, eventTime });

    if (!exists) {
      this.countsSummary[eventName] = 0;
    }

    this.countsSummary[eventName] += 1;
  }

  public summarize(eventName: string, msElapsed?: number) {
    const currentTime = new Date();

    if (!msElapsed) {
      const count = this.countsSummary[eventName];
      if (count) { return count; }
      return 0;
    }

    return this.eventsTable.filter((record: IEvent) => (
      record.eventName === eventName
      && (currentTime.getTime() - record.eventTime.getTime()) <= msElapsed
    )).length;
  }

  public getEvents() {
    return this.eventsTable;
  }
}

export default EventLibrary;
