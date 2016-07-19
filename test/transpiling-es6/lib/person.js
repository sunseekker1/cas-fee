"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// class Person

var Person = function () {
    function Person(name) {
        _classCallCheck(this, Person);

        this.name = name;
    }

    _createClass(Person, [{
        key: "sayName",
        value: function sayName() {
            console.log("Person.sayName(): ", this.name);
        }
    }, {
        key: "shoutName",
        value: function shoutName() {
            console.log("Person.shoutName(): ", this.name);
        }
    }]);

    return Person;
}();

var Musician = function (_Person) {
    _inherits(Musician, _Person);

    function Musician(name, instrument, age) {
        _classCallCheck(this, Musician);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Musician).call(this, name));

        _this.instrument = instrument;
        _this._age = age;
        return _this;
    }

    _createClass(Musician, [{
        key: "getInstrument",
        value: function getInstrument() {
            console.log("Musician.getInstrument()", this.instrument);
        }
    }, {
        key: "shoutName",
        value: function shoutName() {
            console.log("Musician.shoutName()", this.name);
        }
    }, {
        key: "getAge",
        value: function getAge() {
            this._getAge();
        }
    }, {
        key: "_getAge",
        value: function _getAge() {
            console.log("Musician.privateGetAge()", this._age);
        }
    }]);

    return Musician;
}(Person);

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