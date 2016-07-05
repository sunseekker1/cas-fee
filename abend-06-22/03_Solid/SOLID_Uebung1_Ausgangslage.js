var Person = (function () {
    function Person(name, surname, email) {
        this.surname = surname;
        this.name = name;
        if (this.validateEmail(email)) {
            this.email = email;
        }
        else {
            throw new Error("Invalid email!");
        }
    }
    Person.prototype.validateEmail = function (email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(this.email);
    };
    Person.prototype.greet = function () {
        alert("Hi! I'm " + this.name + ". You can reach me at " + this.email);
    };
    return Person;
}());
