var gulp = require('gulp');
var plumber = require('gulp-plumber');
var imagemin = require('gulp-imagemin');
var notify = require('gulp-notify');

gulp.task('images', function() {
  return gulp.src('./src/images/**/*')
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(imagemin({
      progressive: true
    }))
    .pipe(gulp.dest('./assets/images'))
    .pipe(notify('Images task complete'));
});
