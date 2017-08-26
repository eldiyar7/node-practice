let user = { name: 'John'};
let admin = { isAdmin: true};
let dev = { isAdmin: false};

Object.assign(user, admin, dev);
console.dir(user);

let clone = Object.assign({}, user);   // clone
console.log(clone);

// Object.is(value1, value2)           // compare   (===)
console.log(Object.is(user, clone));
console.log(Object.is(+'0', 0));        // true
console.log(+'0' === 0);                // true
