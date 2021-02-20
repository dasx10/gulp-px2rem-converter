"use strict";
const rootMode = /:root+[^}]+}/; // find :root{@any}
const htmlMode = /html+[^}]+}/; // find html{@any}
const fzMode = /font-size+[^;]+;/; // find font-size:@any;
let resultRoot = [];
let params = '16px';
let fzResult = [];
const getParams = (file, skipeRoot = false) => {
    if (!skipeRoot) {
        resultRoot = rootMode.exec(file) || [];
        if (resultRoot.length) {
            fzResult = fzMode.exec(resultRoot[0]) || [];
            if (fzResult.length) {
                return params = fzResult[0].replace(';', '').split(':')[1];
            }
            else {
                resultRoot = [];
                return getParams(file, true);
            }
        }
    }
    resultRoot = htmlMode.exec(file) || [];
    if (resultRoot) {
        fzResult = fzMode.exec(resultRoot[0]) || [];
        if (fzResult.length) {
            return params = fzResult[0].replace(';', '').split(':')[1];
        }
        else {
            resultRoot = [];
            return '16px';
        }
    }
    return params;
};
const getRoot = () => resultRoot[0] || '';
module.exports = {
    getParams,
    getRoot
};
