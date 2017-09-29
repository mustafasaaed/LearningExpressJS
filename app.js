var experss = require('express');
var app = experss();

var port = process.env.port || 5000;

app.use(experss.static('public'));
app.set('views','./src/views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
	var data = {title: 'hello', list: ['a', 'b']};
	res.render('index.ejs', data);
});

app.get('/books', function (req, res) {
	res.send('hello books');
});

app.listen(port, function (err) {
	console.log('running server on port ' + port);
});