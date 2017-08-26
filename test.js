const fs = require('fs');

fs.readFile('./data.txt', 'utf-8', function (err, data) {
    if(err) throw new Error;
    console.log(data);
});

console.log('after');