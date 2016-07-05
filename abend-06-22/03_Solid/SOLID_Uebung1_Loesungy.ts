class Email {
    public email: string;

    constructor(email: string) {
        if (this.validateEmail(email)) {
            this.email = email;
        }
        else {
            throw new Error("Invalid email!");
        }
    }

    validateEmail(email: string) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
}

class Person {
    public name: string;
    public surname: string;
    public email: Email;

    constructor(name: string, surname: string, email: Email) {
        this.email = email;
        this.name = name;
        this.surname = surname;
    }
    greet() {
        alert("Hi!");
    }
}