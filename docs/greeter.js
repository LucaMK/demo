function greeter(person) {
    return "hello, " + person.firstName + person.lastName + "**/" + person.fullName;
}
var user = { firstName: 'jane', lastName: 'userLast' };
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
var usert = new Student("jane", '-M-.', 'user-last');
document.body.innerHTML = greeter(usert);
