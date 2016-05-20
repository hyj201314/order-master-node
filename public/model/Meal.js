function Meal(MealName,MealPrice){
    this.MealName = MealName;
    this.MealPrice = MealPrice;
}

Meal.prototype.save = function(){
    var MealName = this.MealName;
    var MealPrice = this.MealPrice;
    localStorage.setItem("meal_input",MealName) ;
    localStorage.setItem("price",MealPrice);
};