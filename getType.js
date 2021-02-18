let px = /px/i;
let p = /%/;

let result = null;
let type = '';

const getType = (arg) => {
    result = px.exec(arg);
    if(result){
        type = result[0];
    } else {
        result = p.exec(arg);
        if(result){
            type = result[0];
        }
    }
    return type.toLocaleLowerCase();
}

module.exports = getType;