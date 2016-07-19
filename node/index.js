var WebSocketServer = require('ws').Server

var server = new WebSocketServer({ port: process.env.PORT || 8080 });

server.on('connection', function(socket) {
  console.log('socket:connection');

  socket.on('message', function() {
    console.log('socket:message');
  });

  socket.on('close', function() {
    console.log('socket:close');
  });
});
