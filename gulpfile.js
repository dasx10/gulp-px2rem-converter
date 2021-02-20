const gulp = require('gulp');
const pxToRem = require('./index')

function css(){
    return gulp.src('./test/src/*.spec.*')
    .pipe(pxToRem())
    .pipe(gulp.dest('./test/dist'))
}

module.exports.css = css;
