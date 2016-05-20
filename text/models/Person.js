var mongoose = require("./db")
var Schema = mongoose.Schema;

var PersonSchema = new Schema({
    name:String,
    list:String
});

mongoose.model("Person", PersonSchema,"people_list");

var Person = mongoose.model("Person");

PersonSchema.statics.getAll = function(){
    return Person.find().execQ();
};

module.exports = PersonSchema.statics;

