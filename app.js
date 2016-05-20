var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var settings = require('./settings');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {  if (req.method === 'OPTIONS') {    var headers = {};    headers["Access-Control-Allow-Origin"] = "*";    headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";    headers["Access-Control-Allow-Credentials"] = true;    headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept";    res.writeHead(200, headers);    res.end();  } else {    res.setHeader("Access-Control-Allow-Origin", "*");    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');    res.setHeader('Access-Control-Allow-Credentials', true);    next();  }});

routes(app);

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
