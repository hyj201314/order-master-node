var mongoose = require("./db");
var Schema = mongoose.Schema;
var MealSchema = new Schema({
    name:String,
    list:String,
    price:String
});

mongoose.model("Meal", MealSchema,"meal_list");

var Meal = mongoose.model("Meal");

MealSchema.statics.get_meals_by_restaurant_name = function(name){
    return Meal.find({name:name}).execQ();
};

module.exports = MealSchema.statics;


