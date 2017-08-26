var http = require('http');

const server = http.createServer(function (req, res) {
   res.end('Hello World!');
});

var emit = server.emit;

// what events are fired when request comes
server.emit = function (event) {
    console.log(event);
    emit.apply(server, arguments);
};

server.listen(3000, function () {
   console.log('Server is running');
});
