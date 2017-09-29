var express = require('express');

var bookRouter = express.Router();
var router = function (nav) {
	var books = [{
			title: 'war and peace',
			genre: 'Historical Fiction',
			author: 'Lev Nikolayevich Tolstoy',
			read: false
		},
		{
			title: 'war and peace',
			genre: 'Historical Fiction',
			author: 'Lev Nikolayevich Tolstoy',
			read: false
		},
		{
			title: 'war and peace',
			genre: 'Historical Fiction',
			author: 'Lev Nikolayevich Tolstoy',
			read: false
		}
	];

	bookRouter.route('/')
		.get(function (req, res) {
			var data = {
				title: 'Books',
				nav: nav,
				books: books
			};
			res.render('booksListView', data);
		});
	bookRouter.route('/:id')
		.get(function (req, res) {
			var id = req.params.id;
			var data = {
				title: 'Books',
				nav: nav,
				books: books[id]
			};
			res.render('bookView', data);
		});
	return bookRouter;
};
module.exports = router;