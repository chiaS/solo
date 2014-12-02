var db = require('../db');

module.exports = {
  library: {
    get: function (callback) {
      var queryStr = "select * from library";
      db.query(queryStr, callback);
    }, 
    post: function(params, callback) {
     
      var queryStr = "insert into library (title, author, summary, content, imgUrl) values";
      db.query(queryStr, params, callback);

    }
  }
};

