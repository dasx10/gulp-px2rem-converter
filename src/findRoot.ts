const rootMode:RegExp = /:root+[^}]+}/; // find :root{@any}
const htmlMode:RegExp = /html+[^}]+}/; // find html{@any}
const fzMode:RegExp = /font-size+[^;]+;/ // find font-size:@any;

let resultRoot:Array<string> = [];
let params:string = '16px';
let fzResult:Array<string> = [];

const getParams = (file:string, skipeRoot:boolean = false):string => {
    if(!skipeRoot){
        resultRoot = rootMode.exec(file) || [];
        if (resultRoot.length) {
            fzResult = fzMode.exec(resultRoot[0]) || [];
            if(fzResult.length){
                return params = fzResult[0].replace(';','').split(':')[1];
            } else {
				resultRoot = [];
                return getParams(file, true);
            }
        }
    }

    resultRoot = htmlMode.exec(file) || [];
    if(resultRoot){
        fzResult = fzMode.exec(resultRoot[0]) || [];
        if(fzResult.length){
            return params = fzResult[0].replace(';','').split(':')[1];
        } else {
            resultRoot = [];
            return '16px';
        }
    }

    return params;
}

const getRoot = ():string => resultRoot[0] || '';

module.exports = {
    getParams,
    getRoot
}
