// EventEmitter is prototype of events core module
// on that prototype we create new isntance

const EventEmitter = require('events').EventEmitter;
const fs = require('fs');

const eeInstance = new EventEmitter();

function findPattern(data, regex) {
    var data = fs.readFileSync(data, 'utf8');
    return data.match(regex);
}

console.log(findPattern('../data.txt', /\b[A-Z]+\b/g));         // in async this method is called before file read finishes
console.log('finished');

