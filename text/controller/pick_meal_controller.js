function PickMealController(){

}

PickMealController.show = function(req,res){
    res.sendfile('public/pages/pick_meal.html');
};

module.exports = PickMealController;
