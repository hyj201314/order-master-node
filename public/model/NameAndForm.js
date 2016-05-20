function NameAndForm(allName,orderForm){
    this.allName = allName;
    this.orderForm = orderForm;
}

NameAndForm.prototype.get_ordered_name = function(){
    var orderForm = this.orderForm;
    var orderedName = [];
    orderForm.forEach(function(list){
        if(orderedName.indexOf(list.Name) == -1){
            orderedName.push(list.Name)
        }
    });
    return orderedName
};

NameAndForm.prototype.get_not_ordered_name = function(){
    var allName = this.allName;
    var orderedName = this.get_ordered_name();
    var notOrderedName = [];
    allName.forEach(function(list){
        if(orderedName.indexOf(list.Name) == -1){
            notOrderedName.push(list.Name)
        }
    });
    return notOrderedName
};

NameAndForm.prototype.get_list_ordered_with_price_color = function(){
    var orderForm = this.orderForm;
    orderForm.forEach(function(list){
        var color = (list.MealPrice.substring(1, list.MealPrice.length) > 12) ? 'red' : 'black';
        list.priceColor = color;
    });
    return orderForm
};