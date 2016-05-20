function pick_people() {
    $.ajax({
        url: "get_names",
        type: "GET",
        dataType:"json",
        success: function (data) {
            data.forEach(function (name) {
                var list_one = "<a href='../pages/order-meal.html'><li type='button' class='list-style-3' onclick='set_people_name(" + '"' + name.name + '"' + ")'>" + name.name + "</li></a>";
                $("ul").append(list_one);
            })
        },
        error:function(err){
            console.log("error")
        }

    });
}

function set_people_name(name) {
    localStorage.setItem('name_input', name);
    console.log(localStorage.getItem('name_input'))
}