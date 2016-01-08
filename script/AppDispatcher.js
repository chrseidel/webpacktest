var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

var AppDispatcher = assign(new Dispatcher(), {
    handleViewAction: function(action){
         this.dispatch({
             source: 'VIEW-ACTION',
             action:action
         });
        }
});

module.exports = AppDispatcher;