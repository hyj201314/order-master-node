var crypto = require('crypto'),
    MainControllre = require('../controller/main_controller.js'),
    OrderFormController = require('../controller/order_form_controller.js'),
    OrderMealController = require('../controller/order_meal_controller.js'),
    PickPeopleController = require('../controller/pick_people_controller.js'),
    NameController = require('../controller/name_controller.js'),
    RestaurantController = require('../controller/restaurant_controller.js'),
    MealController = require('../controller/meal_controller.js'),
    PickRestaurantController = require('../controller/pick_restaurant_controller.js'),
    PickMealController = require('../controller/pick_meal_controller.js'),
    ListInfoController = require('../controller/list_info_controller.js');


module.exports = function (app) {

    app.get('/pages/get_names', NameController.getAll);

    app.get('/pages/get_meal_list', OrderFormController.getAll);

    app.get('/pages/main_page', MainControllre.show);

    app.post('/pages/save_meal_info', OrderFormController.save);

    app.get('/pages/order-meal', OrderMealController.show);

    app.get('/pages/pick_people', PickPeopleController);

    app.get('/pages/get_restaurant', RestaurantController.getAll);

    app.post('/pages/pick_meal_name', MealController.get);

    app.get('/pages/pick_restaurant', PickRestaurantController.show);

    app.get('/pages/pick_meal', PickMealController.show);

    app.get('/pages/show_list', ListInfoController.show);
};