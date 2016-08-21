"use strict";
var greet_1 = require("./greet");
function showHello(name) {
    var greeter = new greet_1.Greeter(name);
    greeter.sayHello();
}
showHello("Sepp TS");
