interface IEventLibrary {
  signal: Function; // can do better than that, have signature here once you figure it out
  summarize: Function;
}

interface ICountsTable {
  [key: string]: number;
}

interface IEventsTable {
  [key: string]: Date;
}

class eventLibrary implements IEventLibrary {
  private _countsTable: ICountsTable;
  private _eventsTable: IEventsTable;

  constructor() {
    this._countsTable = {};
    this._eventsTable = {};
  }

  public signal() {

  }

  public summarize() {

  }
}