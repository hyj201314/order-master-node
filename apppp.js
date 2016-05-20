var mysql = require('mysql');
var crypto = require('crypto');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'Electr',
    port: 3306
});
conn.connect();

 conn.query('select*from user where phonenumber = 156338667121;', function (err, res) {
     if (err) console.log(err);
     console.log("DELETE Return ==> ");
     console.log(res.length);
 })

//var md5 = crypto.createHash('md5'),
//    password = md5.update('15633866712').digest('hex');
//console.log(password);