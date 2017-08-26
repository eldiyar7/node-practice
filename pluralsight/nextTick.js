const fs = require('fs');

function fileSize(fileName, cb) {
    if (typeof fileName !== 'string') {
        return process.nextTick(                         // process.nextTick() will process callback after operation finishes
            cb,
            new TypeError('argument should be a string')
        );
    }

    fs.stat(fileName, (err, stats) => {
        "use strict";
        if (err) {
            return cb(err);
        }

        cb(null, stats.size);
    });
}

fileSize(1, (err, size) => {
    "use strict";
    if (err) throw err;
    console.log(`Size in KB: ${size / 1024}`)
});

console.log('after');

