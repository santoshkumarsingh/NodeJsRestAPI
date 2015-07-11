var express = require("express");
var routes = function (Book) {
	var bookRouter = express.Router();
	bookRouter.route('/Books')
		.post(function (req, res) {
			var book = new Book(req.body);
			book.save();
			res.status(201).send(book);
		})
		.get(function (req, res) {
			Book.find(function (err, books) {
				if (err)
					res.status(500).send(err);
				res.json(books);
			});
		});
	bookRouter.route('/Books/:bookId').get(function (req, res) {
		console.log(req.params.bookId);
		Book.findById(req.params.bookId, function (err, books) {
			if (err)
				res.status(500).send(err);
			res.json(books);

		});

	});
	
	return bookRouter;

};
module.exports = routes;