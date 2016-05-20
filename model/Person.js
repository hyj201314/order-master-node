var mysql = require("./db");
var crypto = require('crypto');

function Person(){

}

Person.manage = function (req) {
  return new Promise(function (resolve,reject) {
    var phonenumber = req.body.data.phonenumber;
    var password = req.body.data.password;
    var identity = req.body.data.identity;
    var status = req.body.data.status;
    var searchSQL = 'select*from user where phonenumber = '+"'"+phonenumber+"'";
    var md5 = crypto.createHash('md5'),
      password = md5.update(password).digest('hex');
    var insertSQL = 'insert into user (id, phonenumber, password,identity) values(null,'+"'"+phonenumber+"'"+","+"'"+password+"'"+","+"'"+identity+"'"+")";
    mysql.query(searchSQL,function (err,row) {
    if(row.length != 0 && status == 'register'){
      resolve('RepeatPhoneNumber')
      console.log(1)
    }
     else if(row.length == 0 && status == 'register') {
      mysql.query(insertSQL, function (err, row) {
        resolve('registersuccess')
        console.log(2)
      })
    }
      else if(row.length != 0 && password == req.body.password){
        resolve('singinsuccess')
      console.log(3)
    } else{
      resolve('passwordwrong')
      console.log(4)
    }
    })
  })
};

// Person.getAll = function() {
//   return new Promise(function (resolve,reject) {
//     mysql.query('select*from person', function (err, rows) {
//       resolve(rows);
//     })
//   })
// };

module.exports = Person;