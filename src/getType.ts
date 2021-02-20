const px:RegExp = /px/i;
const p:RegExp = /%/;

let result:Array <any> = [];

let defaultType:string = 'px';

const getTypeFromParams = ( arg : string ) : string => {
    result = px.exec(arg) || [];
    if(result?.length){
        defaultType = result[0];
    } else {
        result = p.exec(arg) || [];
        if(result?.length){
            defaultType = result[0];
        }
    }
    return defaultType.toLocaleLowerCase();
}

module.exports = getTypeFromParams;
