
## use

Bulld
```
const gulp = require('gulp');
const pxToRem = require('gulp-px2rem-converter')

function css(){
    return gulp.src('./*.css')
    .pipe(pxToRem())
    .pipe(gulp.dest('./dist'))
}

module.exports.css = css;
```

Auto replacer

```
const gulp = require('gulp');
const pxToRem = require('gulp-px2rem-converter')

function css(){
    return gulp.src('./*.css')
    .pipe(pxToRem())
    .pipe(gulp.dest('./'))
}

function watch(){
    gulp.watch(['./*.css'], css);
}

module.exports.watch = watch;
```
