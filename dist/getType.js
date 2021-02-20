"use strict";
const px = /px/i;
const p = /%/;
let result = [];
let defaultType = 'px';
const getTypeFromParams = (arg) => {
    result = px.exec(arg) || [];
    if (result === null || result === void 0 ? void 0 : result.length) {
        defaultType = result[0];
    }
    else {
        result = p.exec(arg) || [];
        if (result === null || result === void 0 ? void 0 : result.length) {
            defaultType = result[0];
        }
    }
    return defaultType.toLocaleLowerCase();
};
module.exports = getTypeFromParams;
