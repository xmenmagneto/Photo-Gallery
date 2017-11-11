var express = require('express');
var app = express();
var ejs = require('ejs');
var engine = require('ejs-mate');


app.use(express.static(__dirname + '/public'));

app.engine('ejs', engine);
app.set('view engine', 'ejs');

app.get('/', function (req, res, next) {
    res.render('index');
});


app.listen(process.env.PORT, function (err) {
    if(err) throw err;
    console.log('Server has started');
});