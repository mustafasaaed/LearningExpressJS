var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var books = [
	{
		title: 'some Book',
		genre: 'History',
		author: 'mark',
		read: false
	},
	{
		title: 'some Book',
		genre: 'History',
		author: 'mark',
		read: false
	},	{
		title: 'some Book',
		genre: 'History',
		author: 'mark',
		read: false
	}
];

var router = function (nav) {
	adminRouter.route('/addbooks')
		.get(function (req, res) {
			var url = 'mongodb://localhost:27017/libraryApp';
			mongodb.connect(url, function (err, db) {
				var collection = db.collection('books');
				collection.insertMany(books, function (err, results) {
					res.send(results);
					db.close();
				});
			});
		});
	return adminRouter;
};
module.exports = router;