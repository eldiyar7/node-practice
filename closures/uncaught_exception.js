// if exception is thrown inside async callback, which is not handled

const fs = require('fs');

function readJSONThrows(filename, callback) {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            return callback(err);
        }
        // error is thrown inside the callback
        JSON.parse(data);
    });
};

readJSONThrows('./data.txt', err => console.error(err));