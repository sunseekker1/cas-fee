class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person : Person) {
    return "Hello again 3, " + person.firstName + " " + person.lastName;
}

var user = new Student("Jane", "M.", "User Sepp");

document.body.innerHTML = greeter(user);