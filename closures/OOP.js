var x = 10;

function foo() {
    var y = 20;
    console.log(x + y);
}

foo(); // 30


// fooContext.AO = {
//     y: undefined    // undefined – on entering the context, 20 – at activation
// };

// [[Scope]] is saved at function creation and exists until the function object is destroyed.