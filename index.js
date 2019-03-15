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



var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

/*
app.get('/', (req, res) => {
  res.send('Test build .bat' + process.env.PORT); //Send the html file later
});*/

var PORT = process.env.PORT || 8080;

server.listen(PORT, function() {
  console.log("Listening at port %d", PORT);
});
console.log(`Running on http://${HOST}:${PORT}`);