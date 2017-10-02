var experss = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var session = require('express-session');

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
var adminRouter = require('./src/routes/adminRoutes')(nav);
var authRouter = require('./src/routes/authRoutes')(nav);

app.use(experss.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(session({secret: 'library'}));
require('./src/config/passport')(app);
require('./src/config/strategies/local-strategy')();

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/books', bookRouter);
app.use('/admin', adminRouter);
app.use('/auth', authRouter);

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