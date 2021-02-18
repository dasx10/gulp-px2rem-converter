# gulp hex color min
Convert all px to rem
## install 

```
npm i -D gulp-px-to-rem
```

## use
```
const gulp = require('gulp');
const pxToRem = require('gulp-px-to-rem')

function css(){
    return gulp.src('./*.css')
    .pipe(pxToRem())
    .pipe(gulp.dest('./dist'))
}

module.exports.css = css;
```
## run
```
gulp css
```

## example
input
```
html{
    font-size: 62.5%;
}
div{
    padding: 160px;
    border:1px solid red;
}
@media (min-width:120px){
    div{
        padding: 120px;
    }
}
```
output
```
html{
    font-size: 62.5%;
}
div{
    padding: 16rem;
    border:0.1rem solid red;
}
@media (min-width:12em){
    div{
        padding: 12rem;
    }
}
```
----
Doesn't work if you are using: root or html
in @media