var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123',
    database : 'Electr',
    port     : 3306
});
connection.connect();
module.exports = connection;

