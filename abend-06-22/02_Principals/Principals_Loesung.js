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
        this.buttons = [new Button(), new Button(), new Button()];
        for (var _i = 0, _a = this.buttons; _i < _a.length; _i++) {
            var btn = _a[_i];
            var index = this.buttons.indexOf(btn) + 1;
            btn.src = "button" + index + ".png";
            btn.name = "coin" + index;
            btn.onload = function (e) { return _this.onLoad(e); };
        }
    }
    PrincipalsExample.prototype.onLoad = function (e) {
        for (var _i = 0, _a = this.buttons; _i < _a.length; _i++) {
            var btn = _a[_i];
            if (btn.name == e.target.name) {
                btn.src = name + "Hover.png";
            }
        }
    };
    return PrincipalsExample;
}());
var example = new PrincipalsExample();
for (var _i = 0, _a = example.buttons; _i < _a.length; _i++) {
    var btn = _a[_i];
    console.log(btn.src + ', ' + btn.name + ', ' + btn.onload);
}
