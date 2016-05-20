Meal = require('../model/Meal.js');
function MealController(){

}

MealController.get = function(req,res){
    Meal.get_list_by_restaurant(req)
        .then(function(list){
            res.send(list)
        })
};

module.exports = MealController;
