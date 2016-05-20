function ListInfoController(){

}

ListInfoController.show = function(req,res){
    res.sendfile('public/pages/show_list.html');
};

module.exports = ListInfoController;