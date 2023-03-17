import {
    promiseWriteFile,
    promiseMkdir,
    promiseAccess,
    promiseRmdir,
    promiseRm,
    promiseRename,

} from "./fsPromises.js"



promiseWriteFile("./blog1.txt", "text Start")
    .then(path => {
        console.log("Pfad und Datei blog1.txt erstellt", path)
    })
    .then(() => promiseWriteFile("./blog1.txt", "Hallo2"))
    .then(() => promiseWriteFile("./blog2.txt", "testttt"))


    .then(() => promiseMkdir("./assets"))
 
    .then(() => promiseAccess("./assets"))
    .then(() => promiseRmdir("./assets"))

    .then(() => promiseWriteFile("./delete.txt", "löschen?"))

    .then ( () => promiseRm("./delete.txt"))

    .then ( () => promiseWriteFile("./Hello.txt", "Input von Hallo"))

    .then (( ) => promiseRename("./Hello.txt", "HelloWorld.txt"))

    .catch((err) => console.log(err))

    .finally(() => console.log("Finally Ende"))