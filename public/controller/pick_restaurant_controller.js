function PickRestaurantController(){
    $.ajax({
        url:"get_restaurant",
        type:"GET",
        dataType:"json",
        success:function(data){
            var tempName = doT.template($('#restaurant_tmpl').html());
            var nameText = tempName(data);
            $('#restaurant_list').html(nameText);
        }})
}

function SetRestaurantInfo(RestaurantName,RestaurantId) {
    var restaurant = new Restaurant(RestaurantName,RestaurantId);
    restaurant.save();
    localStorage.removeItem('meal_input');
}