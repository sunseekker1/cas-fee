"use strict";
var Greeter = (function () {
    function Greeter(theName) {
        this.name = theName;
    }
    Greeter.prototype.sayHello = function () {
        console.log('Executing TS Script');
        console.log("Hello from " + this.name);
    };
    return Greeter;
}());
exports.Greeter = Greeter;
