// synchronous continuation passing style
const fs = require('fs');

function readJSON(filename, callback) {
    let data;
    try {
        data = fs.readFileSync(filename, 'utf8');
    } catch (err) {
        callback(err, null)
    }
    callback(null, data);
}

readJSON('./package.json', (err, data) => {
    "use strict";
    if (err)
        throw new Error(err.message);
    console.log(data);
});

console.log('after'); // doesn't log if err is thrown, only way is to use async operationd