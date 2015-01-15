/**
 * Timeance.js 1.0.0
 * http://loverajoel/reveal-js
 * MIT licensed
 */

var Timeance = (function(window) {
    'use strict';

    var performance = (typeof window.performance !== 'undefined') ? window.performance : undefined,
        customEvents = [];

    /*
     * Function that return the mapped data, and append to
     * it, default info like, resources and timing.
     */
    var _getResponse = function() {
        return {
            resources: performance.getEntries(),
            timing: performance.timing,
            customEvents: customEvents
        };
    };

    /*
     * Function that allow inyect custom events.
     * Push the event to the _customerEvents var.
     * @param info {string|object}
     */
    var _event = function(info) {
        var data = {
            event: info,
            time: performance.now()
        };
        customEvents.push(data);
    };

    /*
     * Function that finish the record info.
     * @param callback {function}
     * @param wait {bool} *optional if is true, the response
     * will wait for the window.onload event fire
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
     * Public events
     */
    var methods = {
        event: performance ? _event : function(){},
        end: performance ? _endResponse : function(){}
    };

    return methods;

})(this);