const fs = require('fs');

fs.readFile(__filename, () => {
    "use strict";
    setTimeout(() => {
        console.log('timeout');
    }, 0);
    setImmediate(() => {
        console.log('immediate');
    });
});
