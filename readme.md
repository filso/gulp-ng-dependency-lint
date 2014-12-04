# [gulp](http://gulpjs.com)-ngmin [![Build Status](https://travis-ci.org/sindresorhus/gulp-ngmin.svg?branch=master)](https://travis-ci.org/sindresorhus/gulp-ngmin)

> AngularJS Dependency Injection linter

*Issues with the output should be reported on the ngmin [issue tracker](https://github.com/btford/ngmin/issues).*


## Install

```bash
$ npm install --save-dev gulp-ng-di-lint
```


## Usage

```js
var gulp = require('gulp');
var diLint = require('gulp-ng-di-lint');

// to automatically remove 
gulp.task('ng-di-lint', function () {
	return gulp.src('src/**/*.js')
		.pipe(diLint({remove: true}))
		.pipe(gulp.dest('dist'));
});

// this will only print unused dependency list
gulp.task('ng-di-lint', function () {
  return gulp.src('src/**/*.js')
    .pipe(diLint());
});
```


## API

### diLint(options)

#### options.remove

Type: `boolean`  
Default: `false`

Removes unused dependency injection from list of component arguments.


## License

[MIT](http://opensource.org/licenses/MIT) © [Filip Sobczak](http://filipsobczak.com)
