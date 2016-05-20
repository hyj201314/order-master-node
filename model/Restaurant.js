var mysql = require("./db");

function Restaurant(){

}

Restaurant.getAll = function() {
    return new Promise(function (resolve,reject) {
        mysql.query('select*from restaurant', function (err, rows) {
            resolve(rows);
        })
    })
};

module.exports = Restaurant;