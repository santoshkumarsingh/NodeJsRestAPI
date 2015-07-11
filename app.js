/// <reference path="typings/node/node.d.ts"/>
var express = require('express')
var config = require('./config');
var mongoose = require("mongoose");
var bodyParser = require('body-parser');
var db = mongoose.connect("mongodb://localhost/bookApI");
var Book = require('./models/bookModel');


var app = express();
//Plug middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//Load router module
var bookRouter = require("./Routes/bookRoutes")(Book);

//Plug router
app.use('/api', bookRouter);

//Start the server
app.listen(8000, function () {
	console.log("Server is running at port 8000");
});
