// we use public methods which calls private one
const Module = (function () {

    const _privateMethod = function (message) {
        // private
        console.log(message);
    };

    const publicMethod = function (text) {
        // public
        _privateMethod(text)
    };

    return {
        publicMethod: publicMethod
    };

})();

Module.publicMethod('Hello!');

// extending Module (adding extra method to Module)
const ModuleTwo = (function (Module) {
    Module.extension = function (text) {
        console.log(`This printed inside extension : ${text}` )
    };

    return Module;
})(Module || {});

console.log(Module);
Module.extension('Hi ModuleTwo!');