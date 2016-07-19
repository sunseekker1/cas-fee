// class Person
class Person {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    public sayName(){
        console.log("Person.sayName(): ", this.name);
    }

    public shoutName(){
        console.log("Person.shoutName(): ", this.name);
    }

}


class Musician extends Person {
    public instrument: string;
    private _age: number;

    constructor(name: string, instrument: string, age: number) {
        super(name);
        this.instrument = instrument;
        this._age = age;
    }

    public getInstrument(){
        console.log("Musician.getInstrument()", this.instrument);
    }

    public shoutName(){
        console.log("Musician.shoutName()", this.name);
    }

    public getAge(){
        this._getAge();
    }

    private _getAge(){
        console.log("Musician.privateGetAge()", this._age);
    }
}


// create intances
let john2 = new Person("John Person");
let bobby = new Person("Bobby Person");
let luke = new Musician("Luke Musician", "Guitar", 39);

// call functions
john2.sayName();
bobby.shoutName();
luke.sayName();
luke.shoutName();
luke.getInstrument();
luke.getAge();

