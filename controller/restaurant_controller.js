Restaurant = require('../model/Restaurant.js');
function RestaurantController(){

}

RestaurantController.getAll = function(req,res){
    Restaurant.getAll()
        .then(function(list){
            res.send(list)
        })
};

module.exports = RestaurantController;