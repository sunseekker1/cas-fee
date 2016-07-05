import Injector from "./injector";
import inject from "./inject";

class Engine {
    constructor(public power: string){

    }
}

class Tire {
    constructor(public amount: number){
    }
}

class Car {
    // This example shows property injection instead of constructor injection
    @inject('Engine')
    public engine: Engine;
    @inject('Tire')
    public tire: Tire;

    constructor(){

    }
}

let container = new Injector();
container.mapValue('Engine', new Engine('400 PS'));
container.mapValue('Tire', new Tire(4));

let car = container.instantiate(Car);
console.log(`My car has ${car.engine.power} and ${car.tire.amount} tires`);

