
const fs = require('fs')

const readFilePromise = (pathToFile, encoding = 'utf-8') => {
    return new Promise((resolve, reject)=>{
        fs.readFile(pathToFile, encoding, (errRead, contentOfFile) => {
            if (errRead) {
            reject(errRead)
            }
            resolve(contentOfFile)
        })
    })
}

const writeFilePromise = (pathToFile, content) => {
return new Promise((resolve, reject)=>{
    fs.writeFile('pathToFile, content, (errWrite) => {
        if (errWrite) {
            reject(errWrite)
        }
        resolve('Файл был создан по пути ${pathToFile}')
    })
})
}
const orignFilePath = './index.js'
const newFilePath = './index_copy.js'

readFilePromise(orignFilePath)
.then((data)=>{
console.log({data})
})
.catch( console.log )