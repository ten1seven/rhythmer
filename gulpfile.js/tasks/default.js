var gulp = require('gulp');
var server = require('gulp-server-livereload');

gulp.task('default', ['images', 'styles', 'scripts'], function() {
  gulp.src('./')
    .pipe(server({
      defaultFile: 'index.html',
      livereload: true,
      open: true
  }));

  gulp.watch(['./src/scripts/**/*.js'], ['scripts']);
  gulp.watch(['./src/images/**/*.{png,jpg,jpeg,gif}'], ['images']);
  gulp.watch(['./src/styles/**/*.css'], ['styles']);
});
