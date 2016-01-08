var Dispatcher = require('../AppDispatcher');
var Constants = require('../AppConstants');
var randomNumberGenerator = require('../services/RandomNumberGenerator');

class RandomNumberAction {
    counter(){
        this._counter = this._counter + 1 || 0;
        return this._counter;
    }

    create(){
        Dispatcher.handleViewAction({
            actionType: Constants.NEW_RANDOM_NUMBER,
            randomNumber: randomNumberGenerator.generate(),
            heading: `Nummer ${this.counter()}`
        });
    }
}

module.exports = new RandomNumberAction();