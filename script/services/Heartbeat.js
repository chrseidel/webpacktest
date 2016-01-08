'use-strict';
class Heartbeat {

    get tickrate() {
        return this._tickrate || 1000; //default = tick every second
    }

    set tickrate(tickrate) {
        this._tickrate = tickrate;
    }

    constructor(){
        this.observers = [];
    }

    _notify(){
        this.observers.forEach(function(observer){
            observer.notify.call(observer);
        })
    }

    register(observer){
        this.observers.push(observer);
    }

    start(){
        this._timer = window.setInterval(this._notify.bind(this), this.tickrate);
    }

    stop(){
        window.clearInterval(this._timer)
    }
}

module.exports = Heartbeat;