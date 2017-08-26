// The essential concept to remember is that everything inside a module is private unless it's
// assigned to the module.exports variable. The content of this variable is then cached and
// returned when the module is loaded using require() .

// function loadModule(filename, module, require) {
//     const wrappedSrc = `(function(module, exports, require) {
//         ${fs.readFileSync(filename, 'utf8')}
//         })(module, module.exports, require);`;
//     eval(wrappedSrc);
// }


// require function is synchronous, so module.exports must be synchronous as well

const require = (moduleName) => {
    console.log(`Require invoked for module: ${moduleName}`);
    const id = require.resolve(moduleName);
//[1]
    if (require.cache[id]) {
//[2]
        return require.cache[id].exports;
    }
//module metadata
    const module = {
        exports: {},
        id: id
    };
//Update the cache
    require.cache[id] = module;
//[3]
//[4]
//load the module
    loadModule(id, module, require);
//[5]
//return exported variables
    return module.exports;
//[6]
};
require.cache = {};
require.resolve = (moduleName) => {
    /* resolve a full module id from the moduleName */
};