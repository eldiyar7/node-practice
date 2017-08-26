var util = require('util');

function Animal(name) {
    this.name = name;
}

Animal.prototype.walk = function() {
    console.log(this.name + ' walks');
};

function Rabbit(name) {
    this.name = name;
}

var rabbit = new Rabbit('John');

util.inherits(Rabbit, Animal);

rabbit.walk();