// When a procedure is ready to "return" to its caller,
// it invokes the "current continuation" callback (provided by its caller) on the return value.

// ========================================================= example_1

function fact(n, callback) {
    if (n === 0)
        callback(1);
    else
        fact(n - 1, function (t0) {
            callback(n * t0)
        });
}

fact(5, (n) => console.log(n));


// ========================================================= example_2

const array = [1, 2, 3];

forEach(array, function (element, array, index) {    // caller is providing function(callback)
    array[index] = 2 * element;
});

function forEach(array, callback) {
    let length = array.length;
    for (let i = 0; i < length; i++)
        callback(array[i], array, i);                // procedure is invoking callback provided by its caller
}

console.log(array);