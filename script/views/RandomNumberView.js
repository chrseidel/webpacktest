"use-strict";
var randomNumberStore = require('../stores/RandomNumberStore');

class Component extends HTMLElement{

    setHeading(heading){
        this.heading = heading;
    }

    setText(text){
        this.text = text;
    }

    setBackgroundColor(color){
        this.style.backgroundColor = color;
    }

    createdCallback(){
        randomNumberStore.on('change', function(){
            this.setText(randomNumberStore.randomNumber);
            this.setHeading(randomNumberStore.heading);
            this.render();
        }.bind(this));
        this.innerHTML = '<h1></h1><p></p>';
        this.heading = "";
        this.text = "";
        this._headingEl = this.querySelector('h1');
        this._textEl = this.querySelector('p');
    }

    render(){
        this._headingEl.textContent = this.heading;
        this._textEl.textContent = this.text;
    }

    notify(){
        this.render();
    }
}

if(typeof(document.registerElement) === 'function') {
    document.registerElement('dom-component', Component);
} else {
    console.log('cannot register dom-component element');
}

module.exports = 'dom-component';