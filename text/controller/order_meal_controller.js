function OrderMealController(){

}

OrderMealController.show = function(req,res){
    res.sendfile('public/pages/order-meal.html');
};

module.exports = OrderMealController;