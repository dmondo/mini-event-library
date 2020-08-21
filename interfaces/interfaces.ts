interface ISignal {
  (eventName: string): void;
}

interface ISummarize {
  (eventName: string, secondsElapsed?: number): number;
}

interface IEventLibrary {
  signal: ISignal;
  summarize: ISummarize;
}

interface ICountsTable {
  [key: string]: number;
}

interface IEvent {
  eventName: string;
  eventTime: Date;
}
