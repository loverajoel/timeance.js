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
You give each timer a id(String or Object) and when you want to end the measurement, you have
call the returned function, the method will output the time, in milliseconds, that elapsed since 
the timer was started.

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
};
timeTrack(function(event, time) {
	ga('event', event, time);
})
```

### event(info)
This method records a point during execution and return
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