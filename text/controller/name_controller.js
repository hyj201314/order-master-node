Person = require('../mysql-models/Person.js');

function OrderFormController(){

}

//OrderFormController.get_order_list = function(){
//    return new Promise(function(resolve,reject){
//        Person.query('select*from  person',function(err,rows){
//                resolve(rows)
//            })
//    });
//};
//
//OrderFormController.getAll = function(req,res){
//    //var get_person_list = OrderFormController.get_person_list();
//    var get_order_list = OrderFormController.get_order_list();
//    Promise.all([get_order_list])
//        console.log(get_order_list)
//        .then(function(order_information){
//            res.send(order_information)
//        });
//};

Person.getAll.then(function(name){
    console.log(name)
})

module.exports = Person;

//function Persons(){
//
//}
//
//Persons.getAll = function(){
//    return new Promise(function(resolve,reject){
//        Person.query('select*from  person',function(err,rows){
//            resolve(rows)
//        })
//    });
//};
//
//NameController.getAll = function(req,res) {
//    var get_person_list = Persons.getAll();
//    Promise([get_person_list])
//        .then(function (list) {
//            res.send(list)
//        });
//}
//     new Promise(function(resolve,reject){
//         //console.log((Person.getAll()))
//        Person.getAll()
//            .then(function(name){
//console.log(("22"))
//                resolve(console.log(name))
//            })
//    })
    //var p = Person.getAll()
    //    .then(function(err,row){
    //        resolve(row)
    //    });
    //res.send(p)

    //Person.getAll()
    //    .then(res.send(rows))


//Person.getAll()
//    .then(res.send(rows));
//    //return new Promise(function(resolve,reject){
//    //    Person.getAll()
//    //        .then(function(name){
//    //            console.log(name)
//    //            resolve(name)
//    //        })
//    //});
//    //var person = Person.getAll();
//    //res.send(person)
//    //console.log(person)
//};

//module.exports = NameController;


//Person = require('../model/Person.js');
//
//function NameController(){
//
//}
//
//NameController.getAll = function(req,res){
//    Person.getAll()
//        .then(function(name){
//            res.send(name)
//        })
//};
//
//module.exports = NameController;