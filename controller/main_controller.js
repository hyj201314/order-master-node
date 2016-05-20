function MainController() {

}

MainController.show = function (req, res) {
    res.sendfile('public/pages/main_page.html');
};

module.exports = MainController;
