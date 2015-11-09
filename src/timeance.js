/**
 * Timeance.js 1.0.0
 * https://github.com/loverajoel/timeance.js
 * MIT licensed
 */

(function(root, factory){
    if(typeof define === 'function' && define.amd){
        define([],factory);
    }else{
        root.Timeance = factory;
    }
})(this, (function(){
  var Timeance = (function(window) {
    var performance = (typeof window.performance !== 'undefined') ? window.performance : undefined;
    var _customEvents = [];

    /**
     * Build the final response and atach to ir the custom events
     */
    var _getResponse = function() {
      return {
        performance: performance,
        customEvents: _customEvents
      };
    };

    /*
     * Atach custom events to an array that will be returned when end() is called.
     * 
     * @private
     * @param {Object|String} info Id of event.
     * @return {Object} Event recently tracked
     */
    var _event = function(info) {
      var data = {
        event: info,
        time: performance.now()
      };
      _customEvents.push(data);
      return data;
    };

    /*
     * Finish the current record and return the data.
     * If a optional param `wait` exist, the end response will fire when the `window.load` was fired.
     * 
     * @private
     * @param {Function} callback Function to invoke when the response finished.
     * @param {Boolean} [wait]
     * @return {Function}
     */
    var _endResponse = function(callback, wait) {
      if (wait) {
        window.onload = function() {
          return callback(_getResponse());
        };
      } else {
        return callback(_getResponse());
      }
    };

    /*
     * This method allow you measure events in execution time flow.
     * When you call for first time, save the current time and return a function, that when it's 
     * resolved calcule the difference between start and end Data.now(), and return the result in
     * miliseconds.
     *
     * @example
     * ```
     * var myEvent = Timeance.measure('myEvent');
     * setTimeout(function() {
     *  myEvent(function(event, time) {
     *    //event = 'myEvent'
     *    //time = 1500
     *  }, 1500);
     * })
     * 
     * ```
     * 
     * @private
     * @param {Object|String} info Id of event.
     * @return {Function}
     */
    var _measure = function(info) {
      var _info = info;
      var _start = Date.now();
      return function(callback) {
        callback(_info, Date.now() - _start);
        return Date.now() - _start;
      };
    };

    /*
     * Public events
     */
    return {
      event: performance ? _event : function(){},
      measure: performance ? _measure : function(){},
      end: performance ? _endResponse : function(){}
    };

  })(this);
  return Timeance;
})());
