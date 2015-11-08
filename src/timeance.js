'use strict';
/**
 * Timeance.js
 * https://github.com/loverajoel/timeance.js
 * MIT licensed
 */

var Timeance = (function(window) {

  var performance = (typeof window.performance !== 'undefined') ? window.performance : undefined;
  var _customEvents = [];

  /**
   * Function that return the mapped data, and append to
   * it, default info like, resources and timing.
   */
  var _getResponse = function() {
      return {
          resources: performance.getEntries(),
          timing: performance.timing,
          customEvents: _customEvents
      };
  };

  /*
   * Allow inject custom events, all events are pushed into an array and returned when
   * the end() public method is invoqued.
   * 
   * @private
   * @param {Object|String} info Id of event.
   * @return {Void}
   */
  var _event = function(info) {
      var data = {
          event: info,
          time: performance.now()
      };
      _customEvents.push(data);
  };

  /*
   * Finish the current record and return the data.
   * If a optional param `wait` exist, the end response will fire when the `window.load` was fired.
   *
   * @example
   * ```
   * Timeance.end();
   * ```
   * 
   * @private
   * @param {Function} callback Function to invoke when the response finished.
   * @param {Boolean} wait
   * @return {Function}
   */
  var _endResponse = function(callback, wait) {
    if (wait) {
      window.onload = function() {
        callback(_getResponse());
      };
    } else {
      callback(_getResponse());
    }
  };

  /*
   * Allow inject custom events, all events are pushed into an array and returned when
   * the end() public method is invoqued.
   *
   * @example
   * ```
   * var myEvent = Timeance.track('myEvent');
   * myEvent(function(event, time) {
   * 
   * });
   * ```
   * 
   * @private
   * @param {Object|String} info Id of event.
   * @return {Void}
   */
  var _track = function(name) {
    var _name = name;
    var _start = Date.now();
    return function(callback) {
      callback(_name, Date.now() - _start);
      return Date.now() - _start;
    };
  };

  /*
   * Public events
   */
  return {
      event: performance ? _event : function(){},
      track: performance ? _track : function(){},
      end: performance ? _endResponse : function(){}
  };
})(this);
