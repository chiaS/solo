var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
var db = require('./server/db');
var router = require('./server/routes');
var fs = require('fs');
var request = require('request');

var app = express();

var port = process.env.PORT || 3000;
app.listen(port);

app.use(bodyParser.json());

app.use("/stories", router);
app.use(express.static(path.join(__dirname, 'client')));

app.get('/stories', function (req, res) {
  res.sendfile(path.join(__dirname, 'client/index.html'));
});

db.connect();
