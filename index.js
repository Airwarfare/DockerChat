'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

//Redis
var redis = require("redis"),
    client = redis.createClient()


//On Error, log it (For Redis only)
client.on("error", function(err) {
  console.log("Error " + err);
});




app.get('/', (req, res) => {
  res.send('Test build .bat'); //Send the html file later
});


client.on('connect', function() {
  console.log('Redis client connected'); //Just for sanity sake
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);