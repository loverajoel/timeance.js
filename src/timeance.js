class Timeance {

    constructor() {
        this.performance = (typeof window.performance !== 'undefined') ? window.performance : undefined;
        this.customEvents = [];
    }
    
    /*
     * Function that return the mapped data, and append to
     * it, default info like, resources and timing.
     */
    get response() {
        return {
            resources: this.performance.getEntries(),
            timing: this.performance.timing,
            customEvents: this.customEvents
        };
    };

    /*
     * Function that allow inyect custom events.
     * Push the event to the _customerEvents var.
     * @param info {string|object}
     */
    _event(info) {
        let data = {
            event: info,
            time: this.performance.now()
        };
        customEvents.push(data);
    };

    /*
     * Function that finish the record info.
     * @param callback {function}
     * @param wait {bool} *optional if is true, the response
     * will wait for the window.onload event fire
     */
    _endResponse(callback, wait) {
        if (wait) {
            window.onload = function() {
                callback(this.response());
            };
        } else {
            callback(this.response());
        }
    };

    /*
     * Public events
     */
    var methods = {
        event: this.performance ? this._event : function(){},
        end: this.performance ? this._endResponse : function(){}
    };
}

export {Timeance};