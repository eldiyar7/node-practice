
function Country() {
    this.country = 'USA';
}

function User(name) {
    this.name = name;
}

User.prototype.__proto__ = new Country();

var john = new User('John');
console.log(john.country);