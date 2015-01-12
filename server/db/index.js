var mysql = require('mysql');

var connection;
exports.connect = function(){
  connection = mysql.createConnection(
      {
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'TellStory',
        port: 3306
      }
  );

  connection.connect();
  // connection.end();
};

exports.query = function(queryString, params, callback) {
  if(arguments.length === 3){
    queryString += ' ('+params.join(',')+')';
  }else if(arguments.length === 2){//without params
    callback = params;
  }
  connection.query(queryString, function(err, results) {
    if (err) throw err;
    callback(results);
  });
};




