/*
alert(pythagoras(3, 4));

function pythagoras(x, y) {
    return add(square(x), square(y));
}

function square(x) {
    return multiply(x, x);
}

function multiply(x, y) {
    return x * y;
}

function add(x, y) {
    return x + y;
}
*/

pythagoras(3, 4, function (n) {                // caller provided this callback with only one argument
    console.log(n);
});

function pythagoras(x, y, callback) {          // callback provided by caller, not executed yet.
    square(x, function (x_sqr) {               // square is caller
        square(y, function (y_sqr) {
            add(x_sqr, y_sqr, callback);
        });
    });
}

function square(x, callback) {                 // square's callback passed to multiply
    multiply(x, x, callback)
}

function multiply(x, y, callback) {            // square's calback executed here
    callback(x * y);
}

function add(x, y, callback) {                 // main callback executed here
    callback(x + y);
}

// There are however two problems with continuation passing style:
// Passing around continuations increases the size of the call stack.
// Unless you're using a language like Scheme which eliminates tail calls you'll risk running out of stack space.
// It's a pain to write nested functions.

// Solution:
// To use continuation asynchronously.
// By calling the continuation asynchronously the function returns before the continuation is called. Hence the call stack size doesn't increase.


