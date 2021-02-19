const rootMode:RegExp = /:root+[^}]+}/; // find :root{@any}
const htmlMode:RegExp = /html+[^}]+}/; // find html{@any}
const fzMode:RegExp = /font-size+[^;]+;/ // find font-size:@any;

let resultRoot:Array<any> = [];
let params:string = '16px';
let fzResult:Array<any> = [];

const getParams = (file:string):string => {
    resultRoot = rootMode.exec(file) || [];

    if (resultRoot.length) {
        fzResult = fzMode.exec(resultRoot[0]) || [];
        if(fzResult.length){
            params = fzResult[0].replace(';','').split(':')[1];
        }

    } else {
        resultRoot = htmlMode.exec(file) || [];
        if(resultRoot){
            fzResult = fzMode.exec(resultRoot[0]) || [];
            if(fzResult.length){
                params = fzResult[0].replace(';','').split(':')[1];
            }
        }
    }
    return params;
}

const getRoot = ():string => resultRoot[0];

module.exports = {
    getParams,
    getRoot
}