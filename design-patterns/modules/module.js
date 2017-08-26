const Module = (function () {
    // locally scoped Object
    let myObject = {};

    myObject.setName = function (name) {
        this.name = name;
    };

    // this will be assigned to Module
    return myObject;


})(); // creates new scope

Module.setName('Eldiyar');
console.log(Module.name);

