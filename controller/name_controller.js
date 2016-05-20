Person = require('../model/Person.js');
function NameController(){

}

NameController.manage = function(req,res){
    Person.manage(req)
        .then(function(message){
            res.send(message)
        })
};

module.exports = NameController;