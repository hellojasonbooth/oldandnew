

var gulp = require('gulp');
var sass = require('gulp-sass');
 
var runSass = function (){
    return gulp.src("css/app.scss")
    .pipe(sass())
    .pipe(gulp.dest("."));

}


function watch(){
  gulp.watch("css/app.scss", runSass)
}



var defaultTask = function () {
  return gulp.parallel(runSass)
}

exports.watch = watch
exports.sass = runSass
exports.default = defaultTask