'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var diLint = require('../ng-dependency-lint/main.js');

var PLUGIN_NAME = 'gulp-ng-dependency-lint';

module.exports = function (options) {
	return through.obj(function (file, enc, cb) {
		options = options || {};

		if (file.isNull()) {
			this.push(file);
			return cb();
		}


		if (file.isStream()) {
			this.emit('error', new gutil.PluginError(PLUGIN_NAME, 'Streaming not supported'));
			return cb();
		}

		// try {
		var output = diLint.lint(file.contents.toString(), options);
		file.contents = new Buffer(output);
		// } catch (err) {
		// 	console.log("ERROR!", err);
		// 	this.emit('error', new gutil.PluginError(PLUGIN_NAME, err));
		// }

		this.push(file);
		cb();
	});
};
