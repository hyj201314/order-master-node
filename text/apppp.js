var mongoose = require('mongoose')
    , Schema = mongoose.Schema;
//var db = mongoose.createConnection('localhost','test');

mongoose.connect('mongodb://localhost/data');

//1.定义schema，也就是传统意义的表结构
var BlogSchema = new Schema({
    id :String,
    user_id        : {type : Number, index : true}
    ,username       : {type : String}
});
//2.定义model
mongoose.model("Blog", BlogSchema,"list_info");
//mongoose.model("Blog", BlogSchema,"BLOG");  model名，绑定的schema，db collection名

//3.日常操作

var Blog = mongoose.model("Blog"); //获得model实例

//var blog1 = new Blog();
//blog1.id = 4;
//blog1.title="ully";
//blog1.name="pppp";
//blog1.username = "rrrrr"
//
//blog1.save(function(err) {  //存储
//    if (err) {
//        console.log('save failed');
//    }
//    console.log('save success');
//});

Blog.find({name:"meal_list"},function(err,docs){
    console.log(docs);
});

//Blog.remove({id:4},function(err,docs){
//    console.log(docs);
//});
//
//Blog.update({id:4,title:"ulii"},function(err,docs){
//    console.log(docs);
//});