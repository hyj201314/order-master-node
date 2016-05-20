OrderForm = require('../model/OrderForm.js');
function OrderFormController(){

}

OrderFormController.getAll = function(req,res){
    Promise.all([OrderForm.get_meal(),OrderForm.get_person_list()])
        .then(function(list){
            res.send(list)
        });
};

OrderFormController.save = function(req,res){
    OrderForm.save(req.body.name,req.body.restaurant,req.body.meal,req.body.price)
};

module.exports = OrderFormController;