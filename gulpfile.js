var gulp = require('gulp');
var gutil = require('gulp-util');
var prefix = require('gulp-autoprefixer');
var concat = require('gulp-concat');

// Default Task
gulp.task('default', function(){
  gulp.run('concat', 'prefix');
});

// Watch Task
gulp.task('watch', function() {
  gulp.watch(['app/public/scripts/**/*.js', 'app/public/styles/*.css'], function(event) {
    gulp.run('concat', 'prefix');
  });
});

// Prefix Task
gulp.task('prefix', function() {
  gulp.src('app/public/styles/*.css')
  .pipe(prefix("last 1 version", "> 1%", "ie 8", "ie 7"))
  .pipe(gulp.dest('./app/public/dist/'));
});

// Concat Task
gulp.task('concat', function() {
  gulp.src(['app/public/vendor/**/*.js', 'app/public/scripts/**/*.js'])
    .pipe(concat("app.js"))
    .pipe(gulp.dest('./app/public/dist/'));
});