var models = require('../models');
var bluebird = require('bluebird');

var db = require('../db');

module.exports = {
  library: {
    get: function (req, res) {
      models.library.get(function(results){
        res.status(200).send({results:results});
      });
    },
    post: function (req, res) {
      //need to use body parser for req.body
      var params = ['"'+req.body.title+'"', '"'+req.body.author+'"', 
      '"'+req.body.summary+'"','"'+req.body.content+'"','"'+req.body.url+'"'];
      models.library.post(params, function(err){
        res.status(201).send();
      });
    } 
  }
};

