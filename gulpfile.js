var gulp = require("gulp");
var nodemon = require("gulp-nodemon");
gulp.task("default", function () {
	nodemon({
		script: "app_refcatored.js",
		ext: "js",
		ignore: ['./node-modules/**']
	}).on('restart', function () {
		console.log("gulp restarted the server");

	});


})