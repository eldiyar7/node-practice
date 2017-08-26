var foo = {};

(function initialize() {
    var x = 10;
    foo.bar = function () {
        console.log(x)
    };
})();

foo.bar();
