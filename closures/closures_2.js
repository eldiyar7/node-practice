// function at creation gets the [[Scope]] property and via this property
// it accesses variables of all parent contexts.




const log = require('./logger');

function foo() {                  // lexical scope defined at function creation

    var x = 10;
    var y = 20;

    return function () {     // anonymouse function created at this context
        log([x, y]);         // *** scope of anonymous function will exist even after return
    };

}


var bar = foo(); // anonymous function is returned

var x = 1;       // *** won't affect the result, foo.context x doesn't reference outer x

bar(); // [10, 20] uses foo context, because function was created there