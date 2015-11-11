# Timeance.js

[![npm version](https://badge.fury.io/js/timeance.svg)](http://badge.fury.io/js/timeance)

> Abstract library for track loadtimes < 500 bytes

# Features

- Access to `window.performance` data
- Track custom events
- Measure events in execution time flow


# Install

```npm install timeance```

# Examples

[Simple](http://requirebin.com/?gist=c08cff9cc1a0c49a8506)

# Usage

Timeance provide a easy API.

### measure(event)
This method help you trace javascript performance and measure how long a portion of code can take
to be executed.
You have to pass an id(String or Object) and when you want to end the measurement, you have
call the returned function. This will return the time elapsed and the id of the process.

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
var timeTrack = Timeance.measure({call: 'get_user_info'});
fetch('user/me', function() {
  ...
  timeTrack();
});
```

Example:
Loging the response in GA in order to have metrics.

```js
var timeTrack = Timeance.measure('each_items');
for (var i = thousands_items.length - 1; i >= 0; i--) {
  ...
  if (thousands_items[i]) {
  ...
};
timeTrack(function(event, time) {
	ga('event', event, time);
})
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