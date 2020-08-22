interface ISignal {
  (eventName: string, evtTime?: Date): void;
}

interface ISummarize {
  (eventName: string, msElapsed?: number): number;
}

interface IGetEvents {
  (): IEventsTable;
}

interface IEventLibrary {
  signal: ISignal;
  summarize: ISummarize;
  getEvents: IGetEvents;
}

interface IEventsTable {
  [key: string]: Date[];
}
