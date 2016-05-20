
function pick_restaurant(){
    $.ajax({
        url:"get_restaurant",
        type:"GET",
        dataType:"json",
        success:function(data){
            data.forEach(function(name){
                var list_one = "<a href='../pages/order-meal.html'><li type='button' class='list-style-3' onclick='set_restaurant_name(" + '"' + name+ '"' + ")'>" + name + "</li></a>";
                $("ul").append(list_one);
            })
        }})
}

function set_restaurant_name(name) {
    localStorage.setItem('restaurant_input', name);
}

