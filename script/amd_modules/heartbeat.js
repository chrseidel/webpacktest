"use-strict";
define(function(){
    var api = {};

    api.observers = [];
    api._tickrate = 1000;

    api._notify = function(){
        var i;
        for( i=0; i < this.observers.length; i++){
            this.observers[i].call(this.observers[i]);
        }
    };

    api.register = function(callback){
        this.observers.push(callback);
    };

    api.start = function(){
        this._timer = window.setInterval(this._notify.bind(this), this._tickrate);
    };

    api.stop = function(){
        window.clearInterval(this._timer);
    };

    return api;
});