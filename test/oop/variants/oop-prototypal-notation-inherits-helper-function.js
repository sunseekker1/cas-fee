
function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
            value: ctor,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
}

// class Person
var Person = function (name){
    this.name = name;
};
Person.prototype.sayName = function (){
    console.log("Person.sayName(): ", this.name);
};
Person.prototype.shoutName = function (){
    console.log("Person.shoutName(): ", this.name);
};

// class Musician
var Musician = function (name, instrument){
    Musician.super_.call(this, name);

    this.instrument = instrument;

};
inherits(Musician, Person); // extend class Person

Musician.prototype.shoutName = function (){
    //Person.prototype.sayName.call(this);
    console.log("Musician.shoutName(): ", this.name);
};
Musician.prototype.getInstrument = function (){
    console.log("Musician.getInstrument()", this.instrument);
};

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
