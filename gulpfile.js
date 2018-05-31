'use strict';
const gulp = require('gulp'),
  sass = require('gulp-sass'),
  rename = require('gulp-rename'),
  cssmin = require('gulp-cssnano'),
  sourcemaps = require('gulp-sourcemaps'),
  babel = require('gulp-babel'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  autoprefixer = require('gulp-autoprefixer')

const sassOptions = {
  outputStyle: 'expanded'
}

const prefixerOptions = {
  browsers: ['last 2 versions']
}

const babelOptions = {
  "presets": [
    ["env", {
      "targets": {
        "browsers": ["last 2 versions", "safari >= 7"]
      }
    }]
  ]
}

gulp.task('sass',()  =>{
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

gulp.task('scripts',()  => {
    gulp.src('dev/js/**/*.js')
      .pipe(sourcemaps.init())
      .pipe(babel(babelOptions))
      .pipe(concat('app.js'))
      .pipe(uglify())
      .pipe(rename('app.js'))
      .pipe(rename({ suffix: '.min' }))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('public/js'))
    })

gulp.task('build', ['sass', 'scripts']);

gulp.task('watch', () => {
  gulp.watch('dev/scss/**/*.scss', ['sass']);
  gulp.watch('dev/js/**/*.js', ['scripts']);
})

gulp.task('default', () => {
  gulp.watch('dev/scss/**/*.scss', ['sass']);
  gulp.watch('dev/js/**/*.js', ['scripts']);
})