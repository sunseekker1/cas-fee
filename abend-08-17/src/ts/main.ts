import { Greeter } from "./greet";

function showHello(name: string) {
    var greeter = new Greeter(name);
    greeter.sayHello();
}

showHello("Sepp TS");

