// class Person
var Person = {
    name: "",
    sayName: function (){
        console.log("Person.sayName(): ", this.name);
    },
    shoutName: function (){
        console.log("Person.shoutName(): ", this.name);
    }
};

// class Musician
var Musician = Object.create(Person); // extend class Person
Musician.instrument = "";
Musician.getInstrument = function (){
    console.log("Musician.getInstrument()", this.instrument);
};
Musician.shoutName = function (){
    //Person.prototype.sayName.call(this);
    console.log("Musician.shoutName()", this.name);
};

// create intances
var john = Object.create(Person);
john.name = "John Person";
var bobby = Object.create(Person);
bobby.name = "Bobby Person";
var luke = Object.create(Musician);
luke.name = "Luke Musician";
luke.instrument = "Guitar";

// call functions
john.sayName();
bobby.shoutName();
luke.sayName();
luke.shoutName();
luke.getInstrument();

