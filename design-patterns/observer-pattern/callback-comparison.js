// CALLBACK PATTERN
// executer
const fs = require('fs');

function Execute(callback) {
    // fs.readFile('../.txt', 'utf8', function (err, data) {
    //     if(err) {
    //         callback(err);
    //     }
    //     callback(null, data);
    // });

    try {
        var data = fs.readFileSync('../.txt', 'utf8');
    } catch (err) {
        callback(err, null);
    }
    callback(null, data);
}

//provider
Execute(function (err, data) {
    if (err) {
        throw new Error('Oh no!');
    }
    console.log(data);
});

Execute(function (err, number) {
    console.log(number);
});

console.log('this must be logged');