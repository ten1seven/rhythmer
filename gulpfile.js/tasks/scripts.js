var gulp = require('gulp');
var plumber = require('gulp-plumber');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var notify = require('gulp-notify');

gulp.task('scripts', function() {
  return gulp.src(['./src/scripts/**/*.js'])
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(gulp.dest('./assets/scripts'))
    .pipe(notify('Scripts task complete'));
});
