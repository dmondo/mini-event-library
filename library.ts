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

    this.eventsTable.push({ eventName, eventTime });

    if (!exists) {
      this.countsSummary[eventName] = 0;
    }

    this.countsSummary[eventName] += 1;
  }

  public summarize(eventName: string, secondsElapsed?: number) {
    const currentTime = new Date();

    if (!secondsElapsed) {
      const count = this.countsSummary[eventName];
      if (count) { return count; }
      return 0;
    }

    return this.eventsTable.filter((record: IEvent) => (
      record.eventName === eventName
      && (currentTime.getTime() - record.eventTime.getTime()) <= secondsElapsed
    )).length;
  }

  public getEvents() {
    return this.eventsTable;
  }
}

export default EventLibrary;
