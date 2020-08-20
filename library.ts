class eventLibrary implements IEventLibrary {
  private _countsSummary: ICountsTable;
  private _eventsTable: IEvent[];

  constructor() {
    this._countsSummary = {};
    this._eventsTable = [];
  }

  public signal(eventName: string) {
    const exists = eventName in this._countsSummary;

    this._eventsTable.push({ eventName, eventTime: new Date() });

    if (!exists) {
      this._countsSummary[eventName] = 0;
    }

    this._countsSummary[eventName]++;
  }

  public summarize(eventName: string, secondsElapsed?: number) {
    const currentTime = new Date();

    if (!secondsElapsed) {
      const count = this._countsSummary[eventName];
      if (count) { return count; }
      return 0;
    }

    return this._eventsTable.filter((record) => (
      record.eventName === eventName &&
      (currentTime.getTime() - record.eventTime.getTime()) <= secondsElapsed
    )).length;
  }
}