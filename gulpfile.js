var babel = require('gulp-babel')
var concat = require('gulp-concat')
var gulp = require('gulp')
var plumber = require('gulp-plumber')

var paths = {
  jsx: 'src/**/*.jsx',
  js: 'src/**/*.js'
}

gulp.task('transpile', function () {
  return gulp.src([paths.jsx, paths.js])
    .pipe(plumber())
    .pipe(babel())
    .pipe(gulp.dest('dist'))
})

gulp.task('watch', function() {
  gulp.watch([paths.jsx, paths.js], ['transpile'])
})
