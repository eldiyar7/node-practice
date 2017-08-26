// new, creates this and returns this
// role of constructor to write this.props inside this object and return it
// if we want to use return (our) explicitly, it has to return object, it will ignore primitive types
// and returns actual this

// if we want to create many user objects
function User() {
    this.name = "Number";
    // this = {}
    this.Greet = function () {
        console.log("Hi, I'm " + this.name);
    };
    // return this;
    return {
        id: 123,
        name: this.name
    };
}

var user = new User;
console.log(user);

// for single user, used to create single object based on complicated calculations
// otherwise we could use just {}
// var person = new function () {
//     this.name = name;
// };

function Animal(name) {
    // this = {}
    this.name = name;
    this.Sounds = function (sound) {
        console.log(this.name + ' says ' + sound);
    }
    // return this;
}

var bird = new Animal("Bird");
bird.Sounds("tweet tweet!");