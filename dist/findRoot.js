"use strict";
const rootMode = /:root+[^}]+}/; // find :root{@any}
const htmlMode = /html+[^}]+}/; // find html{@any}
const fzMode = /font-size+[^;]+;/; // find font-size:@any;
let resultRoot = [];
let params = '16px';
let fzResult = [];
const getParams = (file) => {
    resultRoot = rootMode.exec(file) || [];
    if (resultRoot.length) {
        fzResult = fzMode.exec(resultRoot[0]) || [];
        if (fzResult.length) {
            params = fzResult[0].replace(';', '').split(':')[1];
        }
    }
    else {
        resultRoot = htmlMode.exec(file) || [];
        if (resultRoot) {
            fzResult = fzMode.exec(resultRoot[0]) || [];
            if (fzResult.length) {
                params = fzResult[0].replace(';', '').split(':')[1];
            }
        }
    }
    return params;
};
const getRoot = () => resultRoot[0];
module.exports = {
    getParams,
    getRoot
};
