let result = null;
const getParams = (file) => {
    const rootMode = /:root+[^}]+}/; // find :root{@any}
    const htmlMode = /html+[^}]+}/; // find html{@any}

    const fzMode = /font-size+[^;]+;/ // find font-size:@any;

    let params = '16px';

    let fzResult = null;

    result = rootMode.exec(file);
    if (result) {
        fzResult = fzMode.exec(result[0])

        if(fzResult){
            params = fzResult[0].replace(';','').split(':')[1];
        }

    } else {
        result = htmlMode.exec(file);
        if(result){

            fzResult = fzMode.exec(result[0])

            if(fzResult){
                params = fzResult[0].replace(';','').split(':')[1];
            }
            
        }
    }

    return params;
}

const getRoot = () => result;

module.exports = {
    getParams,
    getRoot
}