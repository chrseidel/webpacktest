(function(root, factory){
    if(typeof define === "function" && define.amd){
        //AMD
        define(function(){
            factory()
        });
    } else if(typeof exports === 'object') {
        //commonJs
        module.exports = factory();
    }
}(this, function(){
    return "Zufällige Zahl";
}));
