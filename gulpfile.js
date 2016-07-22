var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var watch = require('gulp-watch');
var serve = require('gulp-serve');

var compileSass = function() {
  return sass('sass/main.sass')
    .on('error', sass.logError)
    .pipe(gulp.dest('css'));
};

gulp.task('sass', function () {
  return compileSass();
});

gulp.task('watch', ['serve'], function() {
  return watch('sass/**', function() {
    return compileSass();
  });
});

gulp.task('serve', serve('./'));