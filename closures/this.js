// this inside function refers to current object         (or to object before . )
// this value is determined on entering the context and is immutable while the code is running
// in the context

// *** In the top-level code in a Node module,
//     this is equivalent to module.exports. That's the empty object you see.

var obj = {
    go: function() {
        console.log(this);
    }
};

obj.go();                       // obj


function foo() {
    console.log(this);         // global
}

foo();



