var Button = (function () {
    function Button() {
    }
    Object.defineProperty(Button.prototype, "src", {
        get: function () { return this._src; },
        set: function (value) { this._src = value; },
        enumerable: true,
        configurable: true
    });
    return Button;
}());
var PrincipalsExample = (function () {
    function PrincipalsExample() {
        var _this = this;
        this.btn1 = new Button();
        this.btn2 = new Button();
        this.btn3 = new Button();
        this.btn1.src = 'button1.png';
        this.btn1.name = 'coin1';
        this.btn1.onload = function (e) { return _this.onLoad(e); };
        this.btn2.src = 'button2.png';
        this.btn2.name = 'coin2';
        this.btn2.onload = function (e) { return _this.onLoad(e); };
        this.btn3.src = 'button3.png';
        this.btn3.name = 'coin3';
        this.btn3.onload = function (e) { return _this.onLoad(e); };
    }
    PrincipalsExample.prototype.onLoad = function (e) {
        if (e.target.name === 'coin1')
            this.btn1.src = 'button1Hover.png';
        if (e.target.name === 'coin2')
            this.btn2.src = 'button2Hover.png';
        if (e.target.name === 'coin3')
            this.btn3.src = 'button3Hover.png';
    };
    return PrincipalsExample;
}());
var example = new PrincipalsExample();
console.log(example.btn1.src + ', ' + example.btn1.name + ', ' + example.btn1.onload);
console.log(example.btn2.src + ', ' + example.btn2.name + ', ' + example.btn2.onload);
console.log(example.btn3.src + ', ' + example.btn3.name + ', ' + example.btn3.onload);
