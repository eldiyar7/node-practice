

// User class
function User(name) {
    this.name = name;
}



// Id class
function Id(id) {
    this.id = id;
}

Id.prototype.getId = function () {
    console.log('123');
};

// Inherit Id class
// User.prototype.__proto__ = Id.prototype;      // means: inside User proto create another proto
// User.prototype = Id.prototype;             * replaces User.prototype (where it has methods)
                                               // greet() won't be available
User.prototype = Object.create(Id.prototype);

User.prototype.greet = function () {
    console.log('Hi, I am ' + this.name);
};

var john = new User('John');
john.greet();
john.getId();
