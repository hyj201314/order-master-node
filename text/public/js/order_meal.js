window.onload=function(){
    set_in_people();
    set_in_restaurant();
    set_in_meal();
};

function set_in_people() {
    $("#name_id")[0].value = localStorage.getItem("name_input");
}

function set_in_restaurant(){
    $("#restaurant_id")[0].value = localStorage.getItem('restaurant_input');
}

function set_in_meal(){
    $("#meal_id")[0].value = localStorage.getItem('meal_input');
}
function click_pick_meal(){
    if(document.getElementById("restaurant_id").value!=""){
        window.location="pick_meal.html";
    } else {
        $("#pick_meal").attr('disabled',"false");
    }
}
function click_button(){
    if(document.getElementById("name_id").value!=""&&document.getElementById("restaurant_id").value!=""&&
    document.getElementById("meal_id").value!=""){
    save_list();
    }else{
        $("#ensure").attr('disabled',"false");
    }
}

function save_list(){
    $.ajax({
        url:"save_meal_info",
        type:"post",
        data:{
            name:localStorage.getItem("name_input"),
            restaurant:localStorage.getItem("restaurant_input"),
            meal: localStorage.getItem("meal_input"),
            price: localStorage.getItem("price")},
        dataType:"json",
    });
    clear_storage()
}

function clear_storage(){
    location = location
    document.getElementById("name_id").value!="";
    document.getElementById("restaurant_id").value!="";
    document.getElementById("meal_id").value!="";
    localStorage.removeItem("name_input");
    localStorage.removeItem("restaurant_input");
    localStorage.removeItem("meal_input");
    localStorage.removeItem("price");
}