var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
})();
function greeter(person) {
    return "Hello again 14, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M.", "User Sepp");
document.body.innerHTML = greeter(user);
//# sourceMappingURL=greeter.js.map