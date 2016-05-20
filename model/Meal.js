var mysql = require("./db");

function Meal(){

}

Meal.get_list_by_restaurant = function(req) {
    console.log(req.body)
    return new Promise(function (resolve,reject) {
        mysql.query('select*from restaurantmeal where RestaurantId = '+'"'+req.body.restaurant_id+'"', function (err, rows) {
            resolve(rows);
        })
    })
};

module.exports = Meal;