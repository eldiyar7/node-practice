let user = {
    id: 101,
    name: 'John'
};

function getUser({id, name}) {
    console.log(id + ' ' + name);
}

getUser(user);
