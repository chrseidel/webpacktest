require("./style.css");
define(['./commonJS_modules/content.js','./amd_modules/randomNumberGenerator.js']
    ,function(text, randomNumberGenerator){
    document.write(text);
    document.write(randomNumberGenerator.generate());
});
