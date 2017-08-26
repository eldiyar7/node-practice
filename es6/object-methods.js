let firstname = 'John', lastname = 'Doe';
let dynamicName = 'getInitials';

let user = {
    firstname,
    lastname,

    greet() {
        console.log('Hi, I am ' + this.firstname);
    },

    get fullName() {
        return `${firstname} ${lastname}`
    },

    [dynamicName]() {
        return 'J.D.'
    }


};

user.greet();
console.log(user.fullName);
console.log(user.getInitials());
