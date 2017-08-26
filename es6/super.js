// super is only used inside object methods
// [[HomeObject]] is only inside object methods
let firstname = 'John', lastname = 'Doe';

let details = {
    country: 'USA'
};

let user = {
    firstname,
    lastname,

    __proto__: details,          // super works through prototype

    // how super works: super takes [[HomeObject]] from that object it takes __proto__
    get origin() {
        return super.country     // super used only with object methdods
    },

    foo() {
        return super.country;
    }
};


console.log(user.country);
console.log(user.origin);
console.log(user.foo());

