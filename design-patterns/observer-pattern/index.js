// no functionality

const EventEmitter = require('events').EventEmitter;
const fs = require('fs');

function findPattern(file) {
    const emitter = new EventEmitter();
    fs.readFile(file, 'utf8', function (err, data) {
        if (err) {
            return emitter.emit('error', err);
        }
        return emitter.emit('dataread', data);
    });
    return emitter;                                     // returns only emitter object
}

findPattern('../data.txt')
    .on('error', err => console.log(err.message))
    .on('dataread', data => console.log(data));

console.log('finished');