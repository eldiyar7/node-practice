// In node.js an event can be described simply as a string with a corresponding callback.
// An event can be "emitted" (or in other words, the corresponding callback be called)
// multiple times or you can choose to only listen for the first time it is emitted.

// *** event.emit gives you just events name
// event.on has to use that name and create functionality

var EventEmitter = require('events').EventEmitter;
var concert = new EventEmitter;

concert.on('start', function (singer) {
   console.log(`OMG ${singer}!`);
});

concert.on('finish', function () {
   console.log(`It was the best concert in my life...`);
});

var singer = 'Coldplay';
concert.emit('start', singer);
concert.emit('finish');


console.log(process.memoryUsage().heapUsed);

