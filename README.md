# Timeance.js

Abstract library for track loadtimes

**Note:** This is in development mode.

[ES6 version!](https://github.com/loverajoel/timeance.js/tree/es6)

# Install

```bower install timeance```

# Example

```html
  <img src="image.png">
```

```javascript

  Timeance.event({name: 'Jhon Galt'})

  Timeance.event('lister-one');

  Timeance.end(function(response) {
        // response {}
    }, true);
  
```
Response
```javascript
{
  "resources":[
    {
      "responseEnd":2156.4840000355616,
      "responseStart":0,
      "requestStart":0,
      "secureConnectionStart":0,
      "connectEnd":0,
      "connectStart":0,
      "domainLookupEnd":0,
      "domainLookupStart":0,
      "fetchStart":16.48900000145659,
      "redirectEnd":0,
      "redirectStart":0,
      "initiatorType":"img",
      "duration":2139.995000034105,
      "startTime":16.48900000145659,
      "entryType":"resource",
      "name":"http://image.jpg"
    }
  ],
  "timing":{
    "loadEventEnd":0,
    "loadEventStart":1421291560280,
    "domComplete":1421291560280,
    "domContentLoadedEventEnd":1421291558172,
    "domContentLoadedEventStart":1421291558172,
    "domInteractive":1421291558172,
    "domLoading":1421291558138,
    "responseEnd":1421291558127,
    "responseStart":1421291558123,
    "requestStart":1421291558123,
    "secureConnectionStart":0,
    "connectEnd":1421291558123,
    "connectStart":1421291558123,
    "domainLookupEnd":1421291558123,
    "domainLookupStart":1421291558123,
    "fetchStart":1421291558123,
    "redirectEnd":0,
    "redirectStart":0,
    "unloadEventEnd":1421291558128,
    "unloadEventStart":1421291558128,
    "navigationStart":1421291558123
  },
  "customEvents":[
    {
      "event":{
        "name":"Jhon Galt"
      },
      "time":49.35400001704693
    },
    {
      "event":"lister-one",
      "time":49.39400003058836
    }
  ]
}
```