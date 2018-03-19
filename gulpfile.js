var gulp = require("gulp");

var sass = require("gulp-sass");
/* var browserSync = require("browser-sync").create();
var useref = require("gulp-useref");
var uglify = require("gulp-uglify");
var gulpIf = require("gulp-if");
var csso = require("gulp-csso");
var del = require("del"); */
var runSequence = require("run-sequence");

gulp.task("sass", function() {
  return gulp
    .src("scss/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("css"));
  //.pipe(browserSync.stream());
});

gulp.task("watch", function() {
  gulp.watch("scss/**/*.scss", ["sass"]);
});

gulp.task("build", function(callback) {
  runSequence("sass", callback);
});

gulp.task("default", function(callback) {
  runSequence("sass", callback);
});
