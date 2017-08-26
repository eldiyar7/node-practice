
const slowAdd = (a, b) => {
    "use strict";
    setTimeout(() => {
        console.log(a + b)
    }, 0);
};

// setTimeout calls Node's timer api, which takes callback function and puts it inside the queue
// however, queue waits until stack is empty
slowAdd(3, 3);
slowAdd(4, 4);
console.log('after');

//  after 6,8