var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    imagemin = require('gulp-imagemin'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    livereload = require('gulp-livereload'),
    lr = require('tiny-lr'),
    server = lr();

  gulp.task('styles', function() {
    return gulp.src('style/style.css')
      .pipe(livereload(server))
      .pipe(notify({ message: "Styles task complete"}));
  });

  gulp.task('scripts', function() {
    return gulp.src('scripts/*.js')
      .pipe(concat('main.js'))
      .pipe(gulp.dest('scripts/'))
      .pipe(livereload(server))
      .pipe(notify({message: "Scripts task complete"}));
  });

  gulp.task('watch', function() {
    gulp.watch('scripts/*.js', ['scripts']);
  });