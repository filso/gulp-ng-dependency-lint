'use strict';
var assert = require('assert');
var gutil = require('gulp-util');
var lint = require('./lint');

it('should run a file through lint', function(cb) {
  var stream = lint();

  stream.on('data', function(data) {
    assert.equal(
      data.contents.toString(),
      'angular.module(\'whatever\').controller(\'MyCtrl\', function ($http) { $http });'
    );
    cb();
  });

  stream.write(new gutil.File({
    contents: new Buffer('angular.module(\'whatever\').controller(\'MyCtrl\', function ($scope, $http) { $http });')
  }));
});