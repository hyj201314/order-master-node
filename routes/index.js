module.exports = function (app) {

var crypto = require('crypto'),
    MainControllre = require('../controller/main_controller.js'),//主页
    OrderFormController = require('../controller/order_form_controller.js'),//订单存取
    OrderMealController = require('../controller/order_meal_controller.js'),//帮订餐页面
    PickPeopleController = require('../controller/pick_people_controller.js'),//选人
    NameController = require('../controller/name_controller.js'),//加载人
    RestaurantController = require('../controller/restaurant_controller.js'),//加载餐厅
    MealController = require('../controller/meal_controller.js'),//加载餐厅套餐
    PickRestaurantController = require('../controller/pick_restaurant_controller.js'),//选餐厅
    PickMealController = require('../controller/pick_meal_controller.js'),//选套餐
    ListInfoController = require('../controller/list_info_controller.js');//看订单

    app.post('/pages/register_and_signin', NameController.manage);

    app.get('/pages/get_meal_list', OrderFormController.getAll);

    app.get('/pages/main_page', MainControllre.show);

    app.post('/pages/save_meal_info', OrderFormController.save);

    app.get('/pages/order-meal', OrderMealController.show);

    app.get('/pages/pick_people', PickPeopleController);

    app.get('/pages/get_restaurant', RestaurantController.getAll);

    app.post('/pages/pick_meal_name', MealController.get);

    app.get('/pages/pick_meal', PickMealController.show);

    app.get('/pages/pick_restaurant', PickRestaurantController.show);

    app.get('/pages/show_list', ListInfoController.show);
};