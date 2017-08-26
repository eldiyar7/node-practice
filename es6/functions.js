function User(name = getUser(), id = 101, age = 25) {
    console.log(name + ' ' + id + ' ' + age);
}

function getUser() {
    return 'John';
}

User(undefined, null);           // make second argument null, undefined doesn't change






