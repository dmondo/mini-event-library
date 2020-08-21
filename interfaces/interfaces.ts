interface ISignal {
  (eventName: string, evtTime?: Date): void;
}

interface ISummarize {
  (eventName: string, secondsElapsed?: number): number;
}

interface IGetEvents {
  (): IEvent[];
}

interface IEventLibrary {
  signal: ISignal;
  summarize: ISummarize;
  getEvents: IGetEvents;
}

interface ICountsTable {
  [key: string]: number;
}

interface IEvent {
  eventName: string;
  eventTime: Date;
}
