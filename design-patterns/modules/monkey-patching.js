// It generally refers to the practice of modifying the existing objects at runtime to
// change or extend their behavior or to apply temporary fixes.

// patching file
require('./exporting_function').customMessage = () =>
    console.log('This is a new functionality of exporting-function.js module');