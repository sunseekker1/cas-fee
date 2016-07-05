class Person {
    public name: string;
    public surname: string;
    public email: string;

    constructor(name: string, surname: string, email: string) {
        this.surname = surname;
        this.name = name;
        if (this.validateEmail(email)) {
            this.email = email;
        }
        else {
            throw new Error("Invalid email!");
        }
    }

    private validateEmail(email: string) {
        var re = /\S+@\S+\.\S+/;
        return re.test(this.email);
    }

    greet() {
        alert("Hi! I'm " + this.name + ". You can reach me at " + this.email);
    }
}