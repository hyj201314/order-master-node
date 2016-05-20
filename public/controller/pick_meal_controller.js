function PickMealController(){
    var restaurant_id = localStorage.getItem('restaurant_id');
    $.ajax({
        url:"pick_meal_name",
        type:"post",
        data:{
            restaurant_id:restaurant_id
        },
        dataType:"json",
        success:function(data){
            var tempName = doT.template($('#meal_tmpl').html());
            var mealText = tempName(data);
            $('#meal_list').html(mealText);
        }
    })
}

function SetMealName(MealName,MealPrice){
    var meal = new Meal(MealName,MealPrice);
    meal.save()
}