var experss = require('express');
var app = experss();

var port = process.env.port || 5000;

app.use(experss.static('public'));
app.use(experss.static('src/views'));

app.get('/', function (req, res) {
    res.send('hello world');
});

app.get('/books', function (req, res) {
    res.send('hello books');
});

app.listen(port, function (err) {
    console.log('running server on port ' + port);
});