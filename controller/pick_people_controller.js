function PickPeopleController(){

}

PickPeopleController.show = function(req,res){
    res.sendfile('public/pages/pick_people.html');
};

module.exports = PickPeopleController;