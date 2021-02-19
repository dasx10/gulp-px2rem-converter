'use strict';
const gutil = require('gulp-util');
const through = require('through2');
const pxToRem = require('./dist/pxToRem');
module.exports = (options) => {
  // Какие-то действия с опциями. Например, проверка их существования,
  // задание значения по умолчанию и т.д.
return through.obj(function(blobFile, enc, cb) {
    // Если файл не существует
    if (blobFile.isNull()) {
        cb(null, blobFile);
        return;
    }
    // Если файл представлен потоком
    if (blobFile.isStream()) {
        cb(new gutil.PluginError('gulp-example-plugin', 'Streaming not supported'));
        return;
    }
    // Код плагина
    let file = blobFile.contents.toString();
    file = pxToRem(file,options);
    blobFile.contents = new Buffer(file);
    // Возвращаем обработанный файл для следующего плагина
        this.push(blobFile);
        cb();
    });
};