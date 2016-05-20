function Restaurant(RestaurantName,RestaurantId){
    this.RestaurantName = RestaurantName;
    this.RestaurantId = RestaurantId;
}

Restaurant.prototype.save = function(){
    var RestaurantName = this.RestaurantName;
    var RestaurantId = this.RestaurantId;
    localStorage.setItem('restaurant_input',RestaurantName);
    localStorage.setItem('restaurant_id',RestaurantId);
};