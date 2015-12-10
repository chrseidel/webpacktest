define(function(){

    var template = "<h1></h1><p></p>";

    function createElement(){
        var rootElem = document.createElement("div");
        rootElem.innerHTML = template;

        rootElem._headElem = rootElem.querySelector("h1");
        rootElem._textElem = rootElem.querySelector("p");

        rootElem._heading = "";
        rootElem._text = "";

        rootElem.render = function(){
            rootElem._headElem.textContent = rootElem._heading;
            rootElem._textElem.textContent = rootElem._text;
        };

        rootElem.setText = function(text){
            rootElem._text = text;
        };

        rootElem.setHeading = function(heading){
            rootElem._heading = heading;
        };
        return rootElem;
    }

    return createElement;
});