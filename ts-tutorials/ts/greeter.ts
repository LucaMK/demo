function greeter(person: Student) {
    return "hello, " + person.firstName + person.lastName + "**/" + person.fullName;
}

let user = {firstName:'jane', lastName: 'userLast'};

// document.body.innerHTML = greeter(user);

interface Person {
    firstName: string;
    lastName: string;
}

class Student {
    fullName: string;
    constructor (public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

let usert = new Student("jane", '-M-.', 'user-last');

document.body.innerHTML = greeter(usert);