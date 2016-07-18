(function(ns){
    // class Person
    ns.Person = {
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
    ns.Musician = ns.Person.create({
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

})(global.namespace = global.namespace || {});


// create intances
var john = namespace.Person.create({name: "John Person"});
var bobby = namespace.Person.create({name: "Bobby Person"});
var luke = namespace.Musician.create({name: "Luke Musician", instrument: "Guitar", age: 39});

// call functions
john.sayName();
bobby.shoutName();
luke.sayName();
luke.shoutName();
luke.getInstrument();
luke.getAge();


