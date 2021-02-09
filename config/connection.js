const mysql = require('mysql');
var connection;

if(process.env.JAWSDB_URL) {
connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
    connection = mysql.createConnection({
    host: 'localhostproject2',
    port: 3306,
    user: 'root',
    password: 'rootingABC1',
    database: 'beer_db'
});
};

connection.connect(function(err){
    if (err) {
        console.log("error connecting:" + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});
module.exports = connection;
