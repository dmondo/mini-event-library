interface ISignal {
  (eventName: string, evtTime?: Date): void;
}

interface IGetCount {
  (eventName: string, msElapsed?: number): number;
}

interface IGetEvents {
  (): IEventsTable;
}

interface IEventLibrary {
  signal: ISignal;
  getCount: IGetCount;
  getEvents: IGetEvents;
}

interface IEventsTable {
  [key: string]: Date[];
}
