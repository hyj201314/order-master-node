//OrderForm = require('../mysql-models/OrderForm.JS');
//function OrderFormController(){
//
//}
//OrderFormController





//var OrderForm = require('../model/OrderForm.js');
//var Person = require('../model/Person.js');

function OrderFormController(){

}

OrderFormController.save = function(req,res){
    OrderForm.save(req.body.name,req.body.restaurant,req.body.meal,req.body.price)
};

OrderFormController.get_person_list = function(){
   return new Promise(function(resolve,reject){
        Person.getAll()
            .then(function(name){
                resolve(name);
            })
            .catch(function(error){
                console.log("get_person_list error")
            })
   });
};
OrderFormController.get_order_list = function(){
    return new Promise(function(resolve,reject){
        OrderForm.statics.getAll()
            .then(function(list){
                resolve(list);
            })
            .catch(function(error){
                console.log("get_order_list error")
            })
    });
};

OrderFormController.getAll = function(req,res){
    var get_person_list = OrderFormController.get_person_list();
    var get_order_list = OrderFormController.get_order_list();
    Promise.all([get_person_list,get_order_list])
        .then(function(order_information){
            res.send(order_information)
        });
};

module.exports = OrderFormController;