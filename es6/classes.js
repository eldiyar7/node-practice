'use strict';

let origin = {
    country: 'USA'
};


class User {
    constructor(name, country) {
        this.id = 101;
        this.name = name;
    }

    greet() {                                  // method so can access 'super'
        console.log(`Hi, I'm ${this.name}. ${super.country}`);
    }

    get country() {
        return super.country;
    }

    static test() {
        return new User('testName');
    }
}

User.prototype.__proto__ = origin;

User.prototype.getId = function () {
    return this.id;
};

let john = new User('John', 'USA');             // new is must
john.greet();
console.log(john.getId());
console.log(john.country);

console.log(User.test());
