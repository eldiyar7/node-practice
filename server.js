var User = require('./user');

function run() {
    var user1 = new User('John');
    var user2 = new User('Kevin');

    user1.greet(user2);
    user2.greet(user1);
}

if (module.parent) {
    exports.run = run;
} else {
    run();
}

console.log('server.js is connected');

