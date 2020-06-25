const fs = require('fs');

const writeJSON = (path, obj) => {
    const errorMessage = 'Invalid Data'
    return new Promise((resolve, reject) =>{
        if(obj instanceof Object) {
            fs.writeFileSync(path, obj);
            resolve()
        }
        reject(new Error (errorMessage))
    })
};

const createDirectoryIfNotExists = (path) => {
    return new Promise((resolve, reject)=>{
        if (!fs.existsSync(path)){
            resolve(fs.mkdirSync(path));
        }
        resolve(path)
    })
}


module.exports = {
    // Do not modify the names of the exports
    writeJSON: writeJSON,
    createDirectoryIfNotExists: createDirectoryIfNotExists
};
