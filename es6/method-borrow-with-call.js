// arguments is an object, using call we will borrow array methods
// for ex: join method of an array




// function printArgs() {
//     arguments.join = [].join;             // what if arguments (passed object) has it's won join ?
//     var result = arguments.join('-');
//     console.log(result);
// }
//
// printArgs(3, 5, 11);

// safe
function printArgs() {
    var join = [].join;
    var result = join.call(arguments, ':');
    console.log(result);
}

printArgs(1,2,3);








// custom join on Array
// 1
function arrowJoin() {
    if (!this.length) return '';

    var str = this[0];

    for (var i = 1; i < this.length; i++) {
        str += ' => ' + this[i];
    }

    return str;
}

console.log(arrowJoin.call([2, 3, 5]));          // new Array(2,3,5)

// 2
Array.prototype.arrowJoin = function () {
    if (!this.length) return '';

    var str = this[0];

    for (var i = 1; i < this.length; i++) {
        str += ' => ' + this[i];
    }

    return str;
};

console.log([2, 3, 5].arrowJoin());