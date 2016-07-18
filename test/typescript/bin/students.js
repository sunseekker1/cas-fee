// class Person
var Person = function (name) {
    // Public
    this.name = name;
    // Public
    this.sayName = function () {
        console.log("Person.sayName(): ", this.name);
    };
    // Public
    this.shoutName = function () {
        console.log("Person.shoutName(): ", this.name);
    };
};
// class Musician
var Musician = function (name, instrument, age) {
    Person.call(this, name);
    // Public
    this.instrument = instrument;
    // Private
    var _age = age;
    //Public
    this.getInstrument = function () {
        console.log("Musician.getInstrument()", this.instrument);
    };
    //Public
    this.shoutName = function () {
        console.log("Musician.shoutName()", this.name);
    };
    //Public
    this.getAge = function () {
        _getAge();
    };
    // Private
    var _getAge = function () {
        console.log("Musician.privateGetAge()", _age);
    };
};
Musician.prototype = new Person(); // extend class Person
Musician.prototype.constructor = Musician;
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
//# sourceMappingURL=students.js.map