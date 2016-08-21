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
    private age: number;

    constructor(name: string, instrument: string, age: number) {
        super(name);
        this.instrument = instrument;
        this.age = age;
    }

    public getInstrument(){
        console.log("Musician.getInstrument()", this.instrument);
    }

    public shoutName(){
        console.log("Musician.shoutName()", this.name);
    }


    public getAge(){
        console.log("Musician.getAge()", this.age);
    }
}


// create intances
let john = new Person("John Person");
let bobby = new Person("Bobby Person");
let luke = new Musician("Luke Musician", "Guitar", 39);



// call functions
john.sayName();
bobby.shoutName();
luke.sayName();
luke.shoutName();
luke.getInstrument();
luke.getAge();


luke.instrument = "violin";
luke.shoutName();

