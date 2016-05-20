function OrderMeal(){

}

OrderMeal.show = function(req,res){
    res.sendfile('public/pages/order-meal.html');
};

module.exports = OrderMeal;