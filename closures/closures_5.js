// Two-dimensional Scope chain lookup
// (1) on scope chain links,
// (2) and on every of scope chain link — deep into on prototype chain links.

function foo() {
    console.log(x);
}

foo();

// continue