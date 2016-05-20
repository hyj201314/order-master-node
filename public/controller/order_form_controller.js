function show_order_list() {
    $.ajax({
        url: "get_meal_list",
        type: "GET",
        dataType: "json",
        success: function (data) {
            var nameAndForm = new NameAndForm(data[1],data[0]);
            var orderFormController = new OrderFormController(nameAndForm.get_ordered_name(),nameAndForm.get_not_ordered_name(),nameAndForm.get_list_ordered_with_price_color());
            orderFormController.show();
        }
    })
}

function OrderFormController(orderedName,notOrderedName,orderForm){
    this.orderedName = orderedName;
    this.notOrderedName = notOrderedName;
    this.orderForm = orderForm;
}

OrderFormController.prototype.show_ordered_name_count = function(){
    var orderedName = this.orderedName;
    var tempNamesOrdered = doT.template($('#show_name_ordered_count_tmpl').html());
    var nameText = tempNamesOrdered(orderedName);
    $('#show_name_ordered_count').html(nameText);
};

OrderFormController.prototype.show_ordered_list = function(){
    var orderForm = this.orderForm;
    var tempMealOrdered = doT.template($('#show_list_ordered_tmpl').html());
    var listTexts = tempMealOrdered(orderForm);
    $('#show_list_ordered').html(listTexts);
};

OrderFormController.prototype.show_name_not_ordered = function(){
    var notOrderedName = this.notOrderedName;
    var tempNamesNotOrdered = doT.template($('#show_name_not_ordered_tmpl').html());
    var notOrderedNameText = tempNamesNotOrdered(notOrderedName);
    $('#show_name_not_ordered_and_count').html(notOrderedNameText);
};

OrderFormController.prototype.get_sum = function(){
    var sum = 0;
    var orderForm = this.orderForm;
    orderForm.forEach(function (meal) {
        var price = JSON.parse(meal.MealPrice.substring(1, meal.MealPrice.length));
        sum += price;
    });
    return sum;
}

OrderFormController.prototype.get_total = function(){
    var sum = this.get_sum();
    var orderedName = this.orderedName;
    var notOrderedName = this.notOrderedName;
    var total = {
        orderedNameCount: orderedName.length,
        notOrderedNameCount: notOrderedName.length,
        sum: sum.toFixed(2)
    };
    return total;
};

OrderFormController.prototype.show_total = function(){
    var total = this.get_total();
    var tempTotal = doT.template($('#show_total_tmpl').html());
    var totalText = tempTotal(total);
    $('#show_total').html(totalText);
}

OrderFormController.prototype.show = function(){
    this.show_ordered_name_count();
    this.show_ordered_list();
    this.show_name_not_ordered();
    this.show_total();
};