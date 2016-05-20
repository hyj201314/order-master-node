var mongoose = require('mongoose-q')(require('mongoose'));
mongoose.connect('mongodb://localhost/data');
module.exports = mongoose;
