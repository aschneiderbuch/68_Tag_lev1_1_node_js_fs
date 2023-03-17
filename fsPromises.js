
import fs from 'fs';

export const promiseWriteFile = (path, nameStr) =>{
    return new Promise((resolve, reject) => {

        fs.writeFile(path ,nameStr , (err) =>{
            if (err) {
                console.log("Error fs.writeFile -->")
                reject( err);}
            else {
                console.log("Path fs.writeFile -->")
                resolve( path);}
        })
    })
}


export const promiseMkdir = (path) => {
 return new Promise((resolve, reject) => {
    fs.mkdir((path), (err) =>{
        if(err) { 
            console.log("Error fs.mkdir -->")
            reject( err)}
        else { 
            console.log("path fs.mkdir -->")
            resolve(path)}
    })
 })

}


export const promiseAccess = (path) => {
return new Promise((resolve, reject) =>{
    fs.access((path), fs.constants.F_OK, (err) => {
        if(err) {
            console.log("Error fs.access -->")
            console.log("Ordner ist schon vorhanden, wird jetzt gelöscht")
            

            reject( err)
        }
        else{
            console.log("resolve fs.access -->")
            resolve(path)
        }
    
    })

})

}

export const promiseRmdir = (path) => {
    return new Promise((resolve, reject) => {

        fs.rmdir(path, (err) => {
            if(err) { reject (err)}
            else resolve(path)
        })
    })
}


export const promiseRm = (path) => {
    return new Promise((resolve, reject) =>{

        fs.rm(path, (err)=>{
            if(err) reject (err)
            else resolve(path)
        })
    })
}

/* // !!!   fs.unlink()   löscht auch Datein so wie fs.rm    */


export const promiseRename = (oldPath, newPath) => {
    return new Promise ((resolve, reject) => {

        fs.rename(oldPath, newPath, (err) => {
            if(err) reject (err)
            else resolve(oldPath , newPath)
        })
    })
}

