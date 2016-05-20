function PickRestaurantController(){

}

PickRestaurantController.show = function(req,res){
    res.sendfile('public/pages/pick_restaurant.html');
};

module.exports = PickRestaurantController;
