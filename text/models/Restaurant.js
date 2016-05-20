var mongoose = require('./db');
var Schema = mongoose.Schema;

var RestaurantSchema = new Schema({
    name:String,
    list:String
});

mongoose.model("Restaurant", RestaurantSchema,"restaurant_list");

var Restaurant = mongoose.model("Restaurant");

RestaurantSchema.statics.getAll = function(){
    return Restaurant.find().execQ();
};

module.exports = RestaurantSchema.statics;
