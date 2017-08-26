var x = 10;

function foo() {

    var y = 20;

    function barFD() {
        console.log(x);
        console.log(y);
    }

    var barFE = function () {
        console.log(x);
        console.log(y);
    };

    var barFn = new Function('var x = 5; console.log(x);');   // barFn has reference to windows scope in browsers
    // in Node.js it doesn't have scope, only scope is arguments inside ('args')

    barFD(); // 10, 20
    barFE(); // 10, 20
    barFn(); // 5
}

foo();