// SCOPE : is used to lookup variables. You lookup when you inside context so it must be activated,
//         it's activated only when you call it, activated means having own scope + outer scope.

// 1. at function creation scope doesn't include own scope, only outer scope
// 2. at function call AO is created and includes its own scope + outer scope

// *** Actually, a closure is exactly a combination of a function code and its [[Scope]] property.
//     Thus, [[Scope]] contains that lexical environment (the parent variable object) in which
//     function is created.


var x = 10;

function foo() {         // variable lookup defined at the moment of creation not call
    console.log(x);
}

(function () {
    var x = 20;
    foo(); // 10, but not 20
})();

