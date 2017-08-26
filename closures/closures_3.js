var x = 10;

function foo() {

    var y = 20;

    function barFD() {
        console.log(x);             // *** has reference to outer x, if outer x changes it will affect the result
        console.log(y);
    }

    var barFE = function () {
        console.log(x);
        console.log(y);
    };

    barFD();                          // 10, 20

    return {
        inner: barFE
    }
}

var outer = foo();                     // 10, 20

x = 1;                                 // changing outer x

foo();                                 // 1, 20  foo.context x has reference to outer x

outer.inner();                         // 1, 20  context lives even the function is destroyed
