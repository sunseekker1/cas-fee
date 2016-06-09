// class Person
var Person = {
    create: function (values){
        var instance = Object.create(this);
        Object.keys(values).forEach(function(key){
            instance[key] = values[key];
        });
        return instance;
    },

    name: "",
    
    sayName: function (){
        console.log("Person.sayName(): ", this.name);
    },
    shoutName: function (){
        console.log("Person.shoutName(): ", this.name);
    }
};

// class Musician
var Musician = Person.create({
    instrument: "",
    age: null,

    getInstrument: function (){
        console.log("Musician.getInstrument()", this.instrument);
    },
    shoutName: function (){
        console.log("Musician.shoutName()", this.name);
    },
    getAge: function (){
        this.getPrivateAge();
    },
    getPrivateAge: function (){ // no private functions / variables possible with this pattern
        console.log("Musician.getPrivateAge()", this.age);
    }
});

// create intances
var john = Person.create({name: "John Person"});
var bobby = Person.create({name: "Bobby Person"});
var luke = Musician.create({name: "Luke Musician", instrument: "Guitar", age: 39});

// call functions
john.sayName();
bobby.shoutName();
luke.sayName();
luke.shoutName();
luke.getInstrument();
luke.getAge();


