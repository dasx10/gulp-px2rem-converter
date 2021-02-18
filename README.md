# gulp hex color min
Convert all px to rem
## install 

```
npm i -D gulp-px2rem-converter
```

## use
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

If you are not using: root or html or they do not have a font-size then you can ignore it. The default value 16px will be taken or you can specify this value manually
```
pxToRem(16) 
```
or
```
pxToRem('16px') 
```
or
```
pxToRem('100%') 
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
The plugin works with units such as % or px. If you are using other devices, do not use this plugin. Unable to compute units that are dynamic by the browser.

The plugin is not case sensitive.
You can enter both px and PX or Px

Doesn't work if you are using :root or html
in @media