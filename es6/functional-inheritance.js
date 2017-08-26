function Confidential(SSN) {
    this._SSN = SSN;                    // 2. it applied own props to this(from User)
    this.country = 'USA';
}

function User(name, ssn) {
    Confidential.call(this, ssn);               // 1. we passed this to PersonalDetails
    this.name = name;
}

const john = new User('John', 'XXX-XX-XXXX');
console.dir(john.name + ' ' + john._SSN);
