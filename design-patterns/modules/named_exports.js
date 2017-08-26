// var module = { exports: {} };
// var exports = module.exports;
//
// // your code
//
// return module.exports;


exports.info = (message) => {
    "use strict";
    console.log('info: ' + message);
};

exports.verbose = (message) => {
    "use strict";
    console.log('verbose: ' + message);
};
