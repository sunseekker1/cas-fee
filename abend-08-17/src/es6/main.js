import { Greeter } from "./greet";

function showHello(name) {
    var greeter = new Greeter(name);
    greeter.sayHello();
}

showHello("Sepp Watch ES6");