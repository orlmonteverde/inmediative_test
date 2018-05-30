'use strict';
var gulp = require('gulp'),
  sass = require('gulp-sass'),
  rename = require('gulp-rename'),
  cssmin = require('gulp-cssnano'),
  sourcemaps = require('gulp-sourcemaps'),
  babel = require('gulp-babel'),
  autoprefixer = require('gulp-autoprefixer');

var sassOptions = {
  outputStyle: 'expanded'
};

var prefixerOptions = {
  browsers: ['last 2 versions']
};

gulp.task('sass', function() {
  gulp.src('dev/scss/styles.scss')
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer(prefixerOptions))
    .pipe(rename('main.css'))
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('public/css/'));
});

gulp.task('scripts', function() {
    gulp.src('dev/js/index.js')
        .pipe(babel({
          "presets": [
            ["env", {
              "targets": {
                "browsers": ["last 2 versions", "safari >= 7"]
              }
            }]
          ]
        }))
        .pipe(gulp.dest('public/js'))
    });

gulp.task('watch', function () {
  gulp.watch('dev/scss/**/*.scss', ['sass']);
  gulp.watch('dev/js/**/*.js', ['scripts']);
});

gulp.task('default', function () {
  gulp.watch('dev/scss/**/*.scss', ['sass']);
  gulp.watch('dev/js/**/*.js', ['scripts']);
});