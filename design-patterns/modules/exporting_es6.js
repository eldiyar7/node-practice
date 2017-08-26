// compared to the substack pattern, it exposes a lot more of the module internals

class Logger {
    constructor(name) {
        this.name = name;
    }

    log(message) {
        console.log(`[${this.name}] ${message}`);
    }
}

module.exports = Logger;