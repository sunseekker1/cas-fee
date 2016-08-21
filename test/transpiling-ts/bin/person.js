var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// class Person
var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.sayName = function () {
        console.log("Person.sayName(): ", this.name);
    };
    Person.prototype.shoutName = function () {
        console.log("Person.shoutName(): ", this.name);
    };
    return Person;
}());
var Musician = (function (_super) {
    __extends(Musician, _super);
    function Musician(name, instrument, age) {
        _super.call(this, name);
        this.instrument = instrument;
        this.age = age;
    }
    Musician.prototype.getInstrument = function () {
        console.log("Musician.getInstrument()", this.instrument);
    };
    Musician.prototype.shoutName = function () {
        console.log("Musician.shoutName()", this.name);
    };
    Musician.prototype.getAge = function () {
        console.log("Musician.getAge()", this.age);
    };
    return Musician;
}(Person));
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
luke.instrument = "violin";
luke.shoutName();
//# sourceMappingURL=person.js.map