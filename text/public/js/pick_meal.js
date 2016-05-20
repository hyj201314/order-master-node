function pick_meal(){
    var restaurant_name = localStorage.getItem('restaurant_input');
    $.ajax({
        url:"pick_meal_name",
        type:"post",
        data:{
            name:restaurant_name
        },
        dataType:"json",
        success:function(data){
            data.forEach(function(name) {
                var set_meal_name = "<a href='../pages/order-meal.html'><li type='button' class='list-style-4' onclick='set_meal_name(" + '"' + name.RestaurantMeal + '"' + "," + '"' + name.MealPrice + '"' + ")'>" + name.RestaurantMeal + "<p class='price'>" + name.MealPrice + "</p></li></a>";
                $("ul").append(set_meal_name)
            })
        }
    })
}

function set_meal_name(meal_name,cost){
    localStorage.setItem("meal_input",meal_name) ;
    localStorage.setItem("price",cost);
}


//
//function pick_meal(){
//    var restaurant_name = localStorage.getItem('restaurant_input');
//    $.ajax({
//        url:"pick_meal_name",
//        type:"post",
//        data:{
//            name:restaurant_name
//        },
//        dataType:"json",
//        success:function(data){
//            data.forEach(function(name) {
//                var set_meal_name = "<a href='../pages/order-meal.html'><li type='button' class='list-style-4' onclick='set_meal_name(" + '"' + name.list + '"' + "," + '"' + name.price + '"' + ")'>" + name.list + "<p class='price'>" + name.price + "</p></li></a>";
//                $("ul").append(set_meal_name)
//            })
//        }
//    })
//}
//
//function set_meal_name(meal_name,cost){
//    localStorage.setItem("meal_input",meal_name) ;
//    localStorage.setItem("price",cost);
//}