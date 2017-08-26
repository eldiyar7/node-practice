function getFullname(...rest) {
    console.log(this.first + ' ' + this.last + ' ' + rest);
}


var user = {
    first: 'John',
    last: 'Doe'
};

var user2 = new user.constructor;
user2.first = 'Nicola';
user2.last = 'Tesla';


var outer = {
    first: 'OuterF',
    last: 'OuterL',
    outerFunc : function() {
        getFullname.call(this);            // this = outer
    },
    inner: {
        first: 'innerF',
        last: 'innerL',
        id: 'inner101',
        innerFunc: function () {
            getFullname.call(this, this.id);
        }
    }
};


outer.outerFunc();                          // this = outer
getFullname(this);                          // this = global
getFullname.call(user);                     // this = user
getFullname.call(user2);                    // this = user2
outer.inner.innerFunc();                    // this = outer.inner

