function show_order_list() {
    $.when($.ajax({
        url:"get_meal_list",
        type:"GET",
        dataType:"json",
        success:function(data){
            var meal_list = [];
            var name_list = [];
            data[1].forEach(function(list) {
                meal_list.push(list);
                var meal = {name: list.list, restaurant: list.restaurant, meal: list.meal, price: list.price};
                localStorage.setItem('meal_list', JSON.stringify(meal_list));
            });
            data[0].forEach(function (name) {
                if (name_list.indexOf(name.list) == -1) {
                    name_list.push(name.list);
                    localStorage.removeItem('all_people_list');
                    localStorage.setItem('all_people_list', JSON.stringify(name_list));
                }
            })
        }
    })).then(function(){show_lists()});
}

function show_lists() {
    show_ordered_count();
    show_ordered_meal();
    show_not_ordered_count();
    show_name_not_ordered();
    show_total_list()
}

function get_ordered_count(){
    var order_name_list = [];
    var meal_lists = JSON.parse(localStorage.getItem('meal_list')) || [];
    meal_lists.forEach(function(list){
        if(order_name_list.indexOf(list.list)){
            order_name_list.push(list.list)
        }
    });
    return order_name_list
}

function show_ordered_count(){
    var ordered_count = get_ordered_count();
    var show_name_ordered = "<div class='order_meal_count'>" + ordered_count.length + "人已定" + "</div>";
    $("body").append(show_name_ordered);
}

function show_ordered_meal(){
    var meal_list = JSON.parse(localStorage.getItem('meal_list'));
    meal_list.forEach(function (list) {
        var color = (list.price.substring(1, list.price.length) > 12) ? 'red' : 'black';
        var show_meal_msg = "<div><ul><li class='order_meal_list'><p class='name'>" + list.list + "</p><p class='set_meal'>"
            + list.restaurant + " " + list.meal + "</p><span class='price_show' style='color: " + color + "'>" + list.price + "</span>" + "</li></ul></div>"
        $("body").append(show_meal_msg);
    })
}

function get_not_ordered_list(){
    var order_list = JSON.parse(localStorage.getItem('meal_list'));
    var order_name_list = [];
    order_list.forEach(function(list){
        if(order_name_list.indexOf(list.list) == -1){
            order_name_list.push(list.list)
        }
    });
    var name_lists = JSON.parse(localStorage.getItem('all_people_list'));
    var not_order_name_list = [];
    name_lists.forEach(function(list){
        if(order_name_list.indexOf(list) == -1){
            not_order_name_list.push(list)
        }
    });
    return not_order_name_list;
}

function show_not_ordered_count() {
    var not_order_name_list = get_not_ordered_list();
    var show_name_not_ordered = "<div class='no_order_meal_count'>" + not_order_name_list.length + "人未订" + "</div>";
    $("body").append(show_name_not_ordered);
}

function show_name_not_ordered() {
    var not_order_name_list = get_not_ordered_list();
    not_order_name_list.forEach(function (name) {
        var show_name_not_ordered = "<div><ul><li class='no_order_name'>" + name + "</li></ul></div>";
        $("body").append(show_name_not_ordered);
    })
}

function show_total_list() {
    var order_name_list = get_ordered_count();
    var not_order_name_list = get_not_ordered_list();
    var sum = 0;
    var meal_list = JSON.parse(localStorage.getItem('meal_list'))|| [];
    meal_list.forEach(function (meal) {
        var price = JSON.parse(meal.price.substring(1, meal.price.length));
        sum += price;
    });
    var get_total_list = "<div><p class='all_subtotal'>" + order_name_list.length + "人已订," + not_order_name_list.length + "人未定,总计" + sum.toFixed(2) + "元" + "</p></div>";
    $("body").append(get_total_list);
}