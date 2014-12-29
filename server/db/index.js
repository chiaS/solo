var mysql = require('mysql');

var connection;
exports.connect = function(){
  connection = mysql.createConnection(
      {
        host     : 'us-cdbr-azure-west-a.cloudapp.net:3306',
        user     : 'b270f62449ab87',
        password : 'c5388c0a',
        database : 'cdb_64841254b5', //TellStory
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




