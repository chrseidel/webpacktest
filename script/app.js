'use-strict';
var Heartbeat = require('./services/Heartbeat');
var randomNumberView = require('./views/RandomNumberView');
var RandomNumberAction = require("./actions/RandomNumberAction");
var JsBtnFactory = require('./util/JsBtnFactory');


class App {

    static main(){
        var component = document.createElement(randomNumberView);
        let heartbeat = new Heartbeat();

        heartbeat.register({
            notify: RandomNumberAction.create.bind(RandomNumberAction)
        });


        document.body.appendChild(component);
        document.body.appendChild(JsBtnFactory('stop', function(e){heartbeat.stop()}));
        document.body.appendChild(JsBtnFactory('start', function(e){heartbeat.start()}));
        document.body.appendChild(JsBtnFactory('new random number', function(e){RandomNumberAction.create()}));

        heartbeat.register(component);
        heartbeat.start();
    }
}

App.main();