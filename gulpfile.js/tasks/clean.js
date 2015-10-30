var gulp = require('gulp');
var del = require('del');

gulp.task('clean', function () {
  return del([
    './assets',
    './.DS_Store',
    './src/.DS_Store',
    './src/**/.DS_Store',
    './gulpfile.js/.DS_Store',
    './gulpfile.js/**/.DS_Store'
  ]);
});
