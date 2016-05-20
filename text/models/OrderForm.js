


var mongoose = require("./db");
var Schema = mongoose.Schema;

var OrderFormSchema = new Schema({
    list:String,
    restaurant:String,
    meal:String,
    price:String
});

mongoose.model("OrderForm", OrderFormSchema,"list_info");
var OrderForm = mongoose.model("OrderForm");

OrderFormSchema.save = function(name,restaurant,meal,price){
    var orderform1 = new OrderForm();
    orderform1.list = name;
    orderform1.restaurant = restaurant;
    orderform1.meal = meal;
    orderform1.price = price;
    return orderform1.saveQ()
};

OrderFormSchema.statics.getAll = function(){
    return OrderForm.find().execQ();
};

module.exports = OrderFormSchema;

