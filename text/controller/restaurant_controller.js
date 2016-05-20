Restaurant = require('../mysql-models/Restaurant.js');

function NameController(){

}

NameController.getAll = function(req,res) {

    Restaurant.query('select*from  restaurant', function (err, rows) {
        var restaurant_list = [];
        rows.forEach(function(list) {
            if (restaurant_list.indexOf(list.RestaurantName)){
                restaurant_list.push(list.RestaurantName)
            }
        });
        res.send(restaurant_list)
    })
};

module.exports = NameController;

//Restaurant = require('../model/Restaurant.js');
//
//function RestaurantController(){
//
//}
//
//RestaurantController.getAll = function(req,res){
//    Restaurant.getAll()
//        .then(function(restaurant_list){
//            res.send(restaurant_list)
//        })
//};
//
//module.exports = RestaurantController;