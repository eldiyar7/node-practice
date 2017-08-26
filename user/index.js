var db = require('../db');
db.connect();

var log = require('logger')(module);


function User(name) {
    this.name = name;
}

User.prototype.greet = function (guest) {
    log("Hi " + guest.name + ", I am " + this.name + ". " + db.getPhrase('word_1'));
};

console.log('index.js is called');

module.exports = User;

