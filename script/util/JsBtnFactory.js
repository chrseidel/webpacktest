'use-strict';
module.exports = function(label, callback){
        var btn = document.createElement('button');
        btn.textContent = label;
        btn.addEventListener('click', callback);
        return btn;
};