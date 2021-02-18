const {getParams, getRoot} = require('./findRoot');
const getType = require('./getType');
let param;
let type;

const pxToRem = (file, rootSize) => {
    if(rootSize){
        type = getType(rootSize).toLocaleLowerCase() || 'px';
        param = rootSize.replace(type,'').trim();
    } else {
        let arg = getParams(file);
        type = getType(arg).toLocaleLowerCase();
        param = arg.replace(type,'').trim();
        let rootParam = getRoot();
        if(rootParam){
            rootParam = rootParam[0]
            file = file.replace(rootParam,'<template root>');
        }
    }
    switch(type){
        case 'px':
            file = require('./generic')(file, param);
            if(rootParam){
                file = file.replace('<template root>', rootParam);
            }
        break;
        case '%':
            param = 16 * param / 100;
            file = require('./generic')(file, param);
            if(rootParam){
                file = file.replace('<template root>', rootParam);
            }
        break;
    }

    file = file.replace(/rem+[ \)|\)|\)\n]+{/ig,'em){')

    return file;
}

module.exports = pxToRem;