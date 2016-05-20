var mysql = require("./db");
function OrderForm(){

}

OrderForm.save = function(name,restaurant,meal,price){
    mysql.query('show tables',function(err,rows){
        var table_list = [];
        rows.forEach(function(list){
            if(list.Tables_in_ordermaster == "MealList"){
                table_list.push(list)
            }
        });
        if(table_list.length == 0){
            mysql.query('create table MealList (         id     int auto_increment,          Name  text,        RestaurantName   text,         RestaurantMeal  text,         MealPrice  text,         primary key (id)    ) character set = utf8;')
            mysql.query('insert into MealList (id, Name, RestaurantName ,RestaurantMeal ,MealPrice) values(null,'+"'"+name+"'"+","+"'"+restaurant+"'"+","+"'"+meal+"'"+","+"'"+price+"'"+")")
        }else{
            mysql.query('insert into MealList (id, Name, RestaurantName ,RestaurantMeal ,MealPrice) values(null,'+"'"+name+"'"+","+"'"+restaurant+"'"+","+"'"+meal+"'"+","+"'"+price+"'"+")")
        }
    });
};

OrderForm.get_meal = function() {
    return new Promise(function (resolve,reject) {
        mysql.query('select*from MealList', function (err, rows) {
            resolve(rows);
        })
    })
};

OrderForm.get_person_list = function(){
    return new Promise(function(resolve,reject){
        mysql.query('select*from person',function(err,rows){
            resolve(rows)
        })
    })
};


module.exports = OrderForm;