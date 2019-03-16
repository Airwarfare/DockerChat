'use strict';

const express = require('express');

// Constants
const HOST = '0.0.0.0';

// App
const app = express();
var server = require('http').createServer(app);
//Socket Io
var io = require('socket.io')(server);


//Redis
var redis = require("socket.io-redis")
io.adapter(redis({ host: process.env.REDIS_ENDPOINT, port: 6379 }));

//Serve the public folder to the client
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

//Get port from -e "PORT=0000" or default 8080
var PORT = process.env.PORT || 8080;

//Socket Io Connection
io.on('connection', function(socket) {
  
  //Recieve message from a client
  socket.on('message', function(msg) {
    console.log('Message: ' + msg); //Log message
    io.emit('clientmessage', msg); //Send message back to everyone, including this sockets client
  });
});


//Open server
server.listen(PORT, function() {
  console.log("Listening at port %d", PORT);
});
console.log(`Running on http://${HOST}:${PORT}`);