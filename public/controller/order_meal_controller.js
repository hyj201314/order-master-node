window.onload=function(){
    OrderMealController.show_people_picked();
    OrderMealController.show_restaurant_picked();
    OrderMealController.show_meal_picked();

};

function OrderMealController(){

}

OrderMealController.show_people_picked = function(){
    $("#name_id")[0].value = localStorage.getItem("name_input");
};

OrderMealController.show_restaurant_picked = function(){
    $("#restaurant_id")[0].value = localStorage.getItem('restaurant_input');

};

OrderMealController.show_meal_picked = function(){
    $("#meal_id")[0].value = localStorage.getItem('meal_input');
};

OrderMealController.click_pick_meal = function(){
    if(document.getElementById("restaurant_id").value!=""){
        window.location="pick_meal.html";
    } else {
        $("#pick_meal").attr('disabled',"false");
    }
};
OrderMealController.click_button = function(){
    if(document.getElementById("name_id").value!=""&&document.getElementById("restaurant_id").value!=""&&
    document.getElementById("meal_id").value!=""){
    OrderMealController.save_list();
    }else{
        $("#ensure").attr('disabled',"false");
    }
};

OrderMealController.save_list = function(){
    $.ajax({
        url:"save_meal_info",
        type:"post",
        data:{
            name:localStorage.getItem("name_input"),
            restaurant:localStorage.getItem("restaurant_input"),
            meal: localStorage.getItem("meal_input"),
            price: localStorage.getItem("price")},
        dataType:"json"
    });
    OrderMealController.clear_storage()
};

OrderMealController.clear_storage = function(){
    location = location
    document.getElementById("name_id").value!="";
    document.getElementById("restaurant_id").value!="";
    document.getElementById("meal_id").value!="";
    localStorage.clear();
};