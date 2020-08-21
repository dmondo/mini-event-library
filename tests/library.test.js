import EventLibrary from '../dist/library';

test('library should instantiate without errors', () => {
  const lib = new EventLibrary();
  expect(lib).toBeInstanceOf(EventLibrary);
});
