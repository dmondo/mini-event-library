import { createEventLibrary } from '../index';

const lib = createEventLibrary();

describe('library should exist', () => {
  test('library should instantiate with no signals', () => {
    expect(lib.getEvents()).toEqual({});
  });
});

describe('user may signal library about events', () => {
  test('user can signal library that an event has occured', () => {
    lib.signal('click');
    expect(lib.getCount('click')).toBe(1);
  });

  test('user can signal that events of different names have occured', () => {
    lib.signal('click');
    lib.signal('req');
    expect(lib.getCount('click')).toBe(2);
    expect(lib.getCount('req')).toBe(1);
  });

  test('getting count for event that has not occured returns 0', () => {
    expect(lib.getCount('post')).toBe(0);
  });
});

describe('events are associated with an eventTime', () => {
  test('user may override event time when signalling', () => {
    lib.signal('change', new Date(0));
    const allEvents = lib.getEvents();
    expect((allEvents.change)[0].getTime()).toBe(0);
  });

  test('user may request events over a specified amount of time', () => {
    const time1 = new Date();
    time1.setSeconds(time1.getSeconds() - 10);
    const time2 = new Date();
    time2.setSeconds(time2.getSeconds() - 20);
    const time3 = new Date();

    lib.signal('update', time1);
    lib.signal('update', time2);
    lib.signal('update', time3);

    expect(lib.getCount('update', 1000)).toBe(1);
    expect(lib.getCount('update', 15000)).toBe(2);
    expect(lib.getCount('update')).toBe(3);
  });
});
