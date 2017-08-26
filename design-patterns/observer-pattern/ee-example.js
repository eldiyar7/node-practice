//


const EventEmitter = require('events').EventEmitter;

const instance = new EventEmitter();


instance.on('discount', function (amount) {  // callback providers
    console.log(amount, this);
});

instance.on('discount', function (amount) {  // callback providers
    console.log(this);
});

instance.emit('discount', '15%');           //  executer, who executes callback provided by caller


// When the EventEmitter object emits an event, all of the functions attached to that specific event
// are called synchronously. Any values returned by the called listeners are ignored and
// will be discarded.

