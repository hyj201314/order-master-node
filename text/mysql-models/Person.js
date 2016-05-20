var mysql = require("./db");
function Person(){

}


Person.getAll = new Promise(function(resolve,reject){
    connection.query('select * from  person', function (err, rows) {//account 用户账户表
        if (err) throw err;
        resolve(rows)
    })

});


//Person.getAll = function(){
//    return new Promise(function(resolve,reject){
//        mysql.query('select*from  person',function(err,rows){
//            resolve(rows)
//        })
//    });
//};

module.exports = Person;
