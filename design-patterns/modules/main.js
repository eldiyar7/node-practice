//             requires module.exports
const logger = require('./named_exports');
const log = require('./exporting_function');
const CtorLogger = require('./exporting_constructor');
const es6 = require('./exporting_es6');
const obj = require('./exporting-instance');

// named exports
logger.info('This is an information message.');
logger.verbose('This is a verbose message.');

// function
log('Hello World!');

// constructor
const instance = CtorLogger('Factory');

// closures class
const ins = new es6('Eldiyar'); // you have to use new
ins.log('hello!');

// exporting an instance
obj.log('hi instance');

// patching
require('./monkey-patching');                       // patch applied
const messanger = require('./exporting_function');  // requiring after patch application
messanger.customMessage();                          // working