# gulp converter pixel to rem
[![Build Status](https://travis-ci.com/dasx10/gulp-px2rem-converter.svg?branch=master)](https://travis-ci.com/dasx10/gulp-px2rem-converter)
----
Convert all `px` to `rem`
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

If you are not using `:root` or `html` or they do not have a `font-size` then you can ignore it. The default value `16px` will be taken or you can specify this value manually
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
## example use :root
input
```

:root{
    font-size: 20px;
}
html{
    font-size: 20px;
}
div{
    padding: 40px;
}
@media(min-width:1200px){
    div{
        padding: 60px;
    }
}
```
output
```
:root{
    font-size: 20px;
}
html{
    font-size: 1rem;
}
div{
    padding: 2rem;
}
@media(min-width:60em){
    div{
        padding: 3rem;
    }
}
```

----
## info

The plugin works with units such as `%` or `px`. If you are using other devices, do not use this plugin. Unable to compute units that are dynamic by the browser.

Also converts all `@media` to `em` where `px` was used. Using `em` will resize all dimensions to those specified by the user. `rem` is not used due to bugs in Safari browsers

The plugin is not case sensitive.
You can enter both `px` and `PX` or `Px`

Doesn't work if you use `font-size` in `:root` or `html`
in `@ media`.
By default will take only the first `font-size` in `:root` or `html` if there is no` font-size` value in `:root`

## compatibility

css less(http://lesscss.org/) scss
