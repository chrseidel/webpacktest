require("./style.css");
define(['./commonJS_modules/content.js','./amd_modules/randomNumberGenerator.js', './amd_modules/heartbeat.js', './amd_modules/domComponent.js']
    ,function(text, randomNumberGenerator, heartbeat, componentFactory){

        var component = componentFactory();

        component.setHeading("Zufaellige Zahl");
        heartbeat.register(function(){
            component.setText(randomNumberGenerator.generate());
        });

        document.body.appendChild(component);

        heartbeat.register(component.render);
        heartbeat.start();
});