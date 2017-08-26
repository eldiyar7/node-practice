// One of the most popular module definition patterns consists of reassigning the whole
// module.exports variable to a function. Its main strength is the fact that it exposes only a
// single functionality, which provides a clear entry point for the module, making it simpler to
// understand and use; it also honors the principle of small surface area very well.

module.exports = function say(message) {
    console.log(message );
};

// module = { exports : {} }  exports becomes function
