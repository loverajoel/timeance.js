"use strict";

class Timeance {

    /*
     * Init the vars
     */
    constructor() {
        this._performance = (typeof window.performance !== 'undefined') ? window.performance : undefined;
        this._customEvents = new Set();
    }

    /*
     * Private method
     * This method return the mapped data
     */
    _response() {
        return {
            resources: this._performance.getEntries(),
            timing: this._performance.timing,
            customEvents: this._customEvents.values()
        };
    };

    /*
     * Private method
     * This method allow you add custom events
     * @param info {string|object}
     */
    _event(info) {
        let data = {
            event: info,
            time: this._performance.now()
        };
        this._customEvents.add(data);
    };

    /*
     * Private method
     * Method that finish the record info.
     * @param callback {function}
     * @param wait {bool} *optional if is true, the response
     * will wait for the window.onload event fire
     */
    _end(callback, wait) {
        let self = this;
        if (wait) {
            window.onload = function() {
                return callback(self._response());
            }
        } else {
            return callback(self._response());
        }
    }

    /*
     * Public method
     * @param callback {function}
     * @param wait {bool}
     */
    event(info) {
        return this._performance ? this._event(info) : function(){}
    }

    /*
     * Public method
     * @param info {string|object}
     */
    end(callback, wait) {
        return this._performance ? this._end(callback, wait) : function(){}
    }
}