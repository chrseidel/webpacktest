(function(root, factory){
    if(typeof define === "function" && define.amd){
        //AMD
        define(function(){
            return factory()
        });
    } else if(typeof exports === 'object') {
        //commonJs
        module.exports = factory();
    } else {
        // global object
        root.returnExports = factory();
    }
}(this, function(){
    return "Zufällige Zahl";
}));
