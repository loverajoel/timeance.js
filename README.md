# Timeance.js

> Abstract library for track loadtimes

# Features

- Access to `window.performance` data
- Track custom events
- Measure events in execution time flow


# Install

```bower install timeance```

```npm install timeance```

# Usage

Timeance provide a easy API.

### measure(event)
Measure custom events in time flow execution.

Example:

```js
var timeTrack = Timeance.measure('test_track');
setTimeout(function() {
  timeTrack(function(event, time) {
    console.log(event); // 'test_track'
    console.log(time); // 1500
  });
}, 1500);
```

Example:

```js
var timeTrack = Timeance.measure('get_user_info');
fetch('user/me', function() {
  ...
  timeTrack();
});
```

### event(info)
Track a simple event in your execution flow. This will be return with final data.
```js
Timeance.event('lister-two');
Timeance.event({id: 'lister-two'});
```

### end(callback, wait)
End the currend record of information and obtain de data.
If `wait` is true, the end method will wait to `window.load` will fired.
```js
Timeance.end(function(response) {
  console.log(response);
});
```

# Licence

MIT