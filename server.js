var express = require('express');
var server = express();

server.get('/', function (req, res) {
  res.send('Hello All!');	
});

server.listen(process.env.PORT || 8000);

module.exports = server;
