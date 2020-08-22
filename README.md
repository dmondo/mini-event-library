# mini-event-library

A small JS library for counting events.

* built with TypeScript
* Jest testing framework

To use,

```js
import { EventLibrary } from 'mini-event-library';

const events = new EventLibrary();

events.signal('click');

events.getCount('click'); // ->1

events.signal('click');

events.getCount('click'); // ->2

```

Supports multiple event types (names),

```js
events.signal('click');
events.getCount('click'); // ->3

events.signal('close');
events.getCount('close'); // ->1
```

Events are tracked by the time they are signaled at; signal time can be manually assigned,

```js
const earlyTime = new Date(0);
events.signal('click', earlyTime); // this click is now associated with 1 Jan 1970
```

Supports slicing events by given amount of time until current time (in milliseconds),

```js
events.getCount('click') // ->4

events.getCount('click', 10000) // ->3, as the earlyTime click event occured over 10 seconds ago
```