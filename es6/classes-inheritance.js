'use strict';

class Bird {
    constructor(name) {
        this.name = name;
    }

    fly(can) {
        console.log(`${this.name} ${arguments[0]} fly`);
    }
}

class Penguin extends Bird {            // Penguin.prototype.__proto__ = Bird.prototype
    constructor(name) {
        super('Rico');                  // Bird.call(this, 'Rico)
    }
    fly() {
        super.fly('cannot');
    }
}

new Penguin('Kowalski').fly();     // Rico not Kowalski, because, it uses parent constructor (inherited automatically)