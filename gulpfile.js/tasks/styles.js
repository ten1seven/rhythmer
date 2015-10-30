var gulp = require('gulp');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var nano = require('gulp-cssnano');
var cssvariables = require('postcss-css-variables');
var atImport = require('postcss-import');
var notify = require('gulp-notify');

gulp.task('styles', function () {
  var processors = [
    atImport,
    autoprefixer({browsers: ['last 3 versions', '> 1%', 'ie >= 9']}),
    cssvariables
  ];

  return gulp.src('./src/styles/index.css')
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(postcss(processors))
    //.pipe(nano())
    .pipe(gulp.dest('./assets/styles'))
    .pipe(notify('Styles task complete'));
});
