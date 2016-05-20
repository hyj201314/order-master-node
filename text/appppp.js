var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    database : 'ordermaster',
    port     : 3306
});
connection.connect();
//window.onlode = function(){
//    get_nsmes
//
//}




get_names.getAll =function() {
     return new Promise(function (resolve, reject) {
        connection.query('select * from  person', function (err, rows) {//account 用户账户表
            if (err) throw err;
            resolve(rows)
        })

    });
}

get_names.getAll = function() {

    Promise.then(function (name) {
        console.log(name)
    });
}


//connection.connect();
//connection.query('select * from  person', function (err, rows) {//account 用户账户表
//    if (err) throw err;
//    console.log(rows[2].name);
//});
//connection.query('select * from restaurant ', function (err, rows) {
//    console.log(rows)
//})

//OrderFormController.get_order_list = function(){
//    return new Promise(function(resolve,reject){
//        Person.query('select*from  person',function(err,rows){
//            resolve(rows)
//        })
//    });
//};
//
//OrderFormController.getAll = function(req,res){
//    //var get_person_list = OrderFormController.get_person_list();
//    var get_order_list = OrderFormController.get_order_list();
//    Promise.all([get_order_list])
//    console.log(get_order_list)
//        .then(function(order_information){
//            res.send(order_information)
//        });
//};

//
//function get_names(){
//    console.log("11111")
//}
