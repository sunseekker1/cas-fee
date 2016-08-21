// class Person
class Person {

    constructor(name) {
        this.name = name;
    }

    sayName(){
        console.log("Person.sayName(): ", this.name);
    }

    shoutName(){
        console.log("Person.shoutName(): ", this.name);
    }

}


class Musician extends Person {

    constructor(name, instrument, age) {
        super(name);
        this.instrument = instrument;
        this._age = age;
    }

    getInstrument(){
        console.log("Musician.getInstrument()", this.instrument);
    }

    shoutName(){
        console.log("Musician.shoutName()", this.name);
    }

    getAge(){
        this._getAge();
    }

    _getAge(){
        console.log("Musician.privateGetAge()", this._age);
    }
}


// create intances
var john = new Person("John Person");
var bobby = new Person("Bobby Person");
var luke = new Musician("Luke Musician", "Guitar", 39);

// call functions
john.sayName();
bobby.shoutName();
luke.sayName();
luke.shoutName();
luke.getInstrument();
luke.getAge();

