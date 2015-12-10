define(['./umd_modules/content.js',
    './amd_modules/randomNumberGenerator.js',
    './amd_modules/heartbeat.js',
    './amd_modules/domComponent.js']
    ,function(text, randomNumberGenerator, heartbeat, SimpleComponent){

        var component = SimpleComponent();

        component.setHeading(text);
        heartbeat.register(function(){
            component.setText(randomNumberGenerator.generate());
        });

        document.body.appendChild(component);

        heartbeat.register(component.render);
        heartbeat.start();
    });