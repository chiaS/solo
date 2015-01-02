var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
var db = require('./server/db');
var router = require('./server/routes');
var fs = require('fs');
var request = require('request');


var app = express();
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use("/stories", router);
app.use(express.static(path.join(__dirname, 'client')));

app.get('/stories', function (req, res) {
  res.sendfile(path.join(__dirname, 'client/index.html'));
});


app.listen(3000);

// db.connect();
