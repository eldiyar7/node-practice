// compared to the substack pattern, it exposes a lot more of the module internals
// on the other hand it allows much more power when it comes to extending its functionality.

// Calling Logger() (wihout new), this will refer to the object before .
// in that case this becomes instance of global object (main.js file)
// Calling with new this will refere to newly created object by Logger

// In JavaScript, any function can return a new object.
// When it’s not a constructor function or class, it’s called a factory function.

function Logger(name) {
    console.log('Logger executed!');
    // this = {}
    if (!new.target) {                 // === (this instanceof Logger)
        return new Logger(name);       // Logger will be executed twice
    }
    this.name = name;
    // return this;
}

Logger.prototype.log = function (message) {
    console.log(`[${this.name}] ${message}`);
};
Logger.prototype.info = function (message) {
    this.log(`info: ${message}`);
};
Logger.prototype.verbose = function (message) {
    this.log(`verbose: ${message}`);
};


module.exports = Logger;
