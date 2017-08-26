// asynchronous continuation passing style
// By calling the continuation asynchronously the function returns before the continuation is called.
// Hence the call stack size doesn't increase:
const fs = require('fs');

function readJSON(filename, callback) {
    fs.readFile(filename, 'utf8', function (err, data) {
        let parsed;
        if (err)
            return callback(err);          //propagate the error and exit the current function
        console.log('this line is executed');
        try {
            parsed = JSON.parse(data);
        } catch (err) {
            return callback(err);          //catch parsing errors
        }
        callback(null, parsed);            //no errors, propagate just the data
    });
}

readJSON('./package.json', (err, data) => {
    if (err)
        throw new Error('No such file dude!');
    console.log(data);
});

console.log('after');

