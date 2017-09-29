var experss = require('express');
var app = experss();

var port = process.env.port || 5000;

var nav = [{
	Link: '/books',
	Text: 'Books'
}, {
	Link: '/authors',
	Text: 'Authors'
}];

var bookRouter = require('./src/routes/bookRoutes')(nav);

app.use(experss.static('public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');


app.use('/books', bookRouter);
app.get('/', function (req, res) {
	var data = {
		title: 'hello',
		nav: [{
			Link: '/books',
			Text: 'Books'
		}, {
			Link: '/authors',
			Text: 'Authors'
		}]
	};
	res.render('index.ejs', data);
});

app.get('/books', function (req, res) {
	res.send('hello books');
});

app.listen(port, function (err) {
	console.log('running server on port ' + port);
});