# [gulp](http://gulpjs.com)-ng-dependency-lint

> AngularJS Dependency Injection linter

*Issues with the output should be reported on the ng-dependency-lint [issue tracker](https://github.com/filso/ng-dependency-lint/issues).*


## Install

```bash
$ npm install --save-dev gulp-ng-dependency-lint
```


## Usage

```js
var gulp = require('gulp');
var diLint = require('gulp-ng-dependency-lint');

// to automatically remove 
gulp.task('ng-dependency-lint', function () {
	return gulp.src('src/**/*.js')
		.pipe(diLint({remove: true}))
		.pipe(gulp.dest('dist'));
});

// this will only print unused dependency list
gulp.task('ng-dependency-lint', function () {
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
