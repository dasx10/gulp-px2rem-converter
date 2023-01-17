"use strict";
const rootPattern = /:root+[^}]+}/; // find :root{@any}
const htmlPattern = /html+[^}]+}/; // find html{@any}
const fontSizePattern = /font-size+[^;]+;/; // find font-size:@any;
let resultRoot = [];
let params = '16px';
let fzResult = [];
const getParams = (file, skipeRoot = false) => {
    if (!skipeRoot) {
        resultRoot = rootPattern.exec(file) || [];
        if (resultRoot.length) {
            fzResult = fontSizePattern.exec(resultRoot[0]) || [];
            if (fzResult.length) {
                return params = fzResult[0].replace(';', '').split(':')[1];
            }
            else {
                resultRoot = [];
                return getParams(file, true);
            }
        }
    }
    resultRoot = htmlPattern.exec(file) || [];
    if (resultRoot) {
        fzResult = fontSizePattern.exec(resultRoot[0]) || [];
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
