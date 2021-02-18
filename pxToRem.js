const {getParams, getRoot} = require('./findRoot');
const getType = require('./getType');

const pxToRem = (file) => {
    let arg = getParams(file);
    let type = getType(arg).toLocaleLowerCase();
    let param = arg.replace(type,'').trim();
    let rootParam = getRoot()[0];
    file = file.replace(rootParam,'<template root>');
    switch(type){
        case 'px':
            file = require('./generic')(file, param);
            file = file.replace('<template root>', rootParam);
        break;
        case '%':
            param = 16 * param / 100;
            file = require('./generic')(file, param);
            file = file.replace('<template root>', rootParam);
        break;
    }

    file = file.replace(/rem+[ \)|\)|\)\n]+{/g,'em){')

    return file;
}

module.exports = pxToRem;