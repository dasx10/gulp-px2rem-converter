const findRoot = require('./findRoot');
const getType = require('./getType');

let param:number;
let type:string;
let rootParam:string;
const template:string = '<template root>'

const pxToRem = (file:string, rootSize:string ) :string => {
    if(rootSize){
        type = getType(rootSize).toLocaleLowerCase() || 'px';
        param = parseInt(rootSize.replace(type,'').trim());
    } else {
        const arg:string = findRoot.getParams(file);
        type = getType(arg).toLocaleLowerCase();
        param = parseInt(arg.replace(type,'').trim());
        rootParam = findRoot.getRoot();
        if(rootParam){
            file = file.replace(rootParam,template);
        }
    }

    switch(type){
        case 'px':
            file = require('./generic')(file, param);
            if(rootParam){
                file = file.replace(template, rootParam);
            }
        break;
        case '%':
            param = 16 * param / 100;
            file = require('./generic')(file, param);
            if(rootParam){
                file = file.replace(template, rootParam);
            }
        break;
    }

    file = file.replace(/rem+[ \)|\)|\)\n]+{/ig,'em){')

    return file;
}

module.exports = pxToRem;