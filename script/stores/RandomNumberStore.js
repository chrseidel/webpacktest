'use-strict';
var Dispatcher = require('../AppDispatcher');
var Constants = require('../AppConstants');
var EventEmitter = require('events').EventEmitter;

class RandomNumberStore extends EventEmitter{

    constructor(){
        super();
        Dispatcher.register(this.onAction.bind(this));
        this.randomNumber = -1;
        this.heading = "";
    }

    get views(){
        if(this._views === undefined){
            this._views = [];
        }
        return this._views ;
    }

    onAction(actionEvent){
        let action = actionEvent.action;
        if(action.actionType === Constants.NEW_RANDOM_NUMBER){
            this.randomNumber = action.randomNumber;
            this.heading = action.heading;
        }
        this.emit('change');
        return true;
    }

    notify(){
        this.views.forEach(function(view){
            view.render();
        })
    }
}

module.exports = new RandomNumberStore();