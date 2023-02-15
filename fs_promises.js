
const fs = require('fs')

const readFilePromise = (pathToFile, encoding = 'utf-8') => {
    console.log()
    return new Promise((resolve, reject) => {
        fs.readFile(pathToFile, encoding, (errRead, contentOfFile) => {
            if (errRead) {
                reject(errRead)
            }
            resolve(contentOfFile)
        })
    })
}

const writeFilePromise = (pathToFile, content) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(pathToFile, content, (errWrite) => {
            if (errWrite) {
                reject(errWrite)
            }
            resolve(`Файл был создан по пути ${pathToFile}`)
        })
    })
}
const origFilePath = './index.js'
const newFilePath = './index_copy.js'

// readFilePromise(orignFilePath)
//     .then((data) => {
//         const newContent = data + data
//         return writeFilePromise(newFilePath, newContent)
//     })
//     .then((dataFromPrevThen) => console.log({ dataFromPrevThen }))
//     // .catch((e)=>{
//     //     console.log(e)
//     // })
//     .catch(console.log())




console.log(1);
const main = async () => {
    console.log(2)
    try {
        const contentOfFile = await readFilePromise(origFilePath)
        const newContent = contentOfFile + contentOfFile
        const result = await writeFilePromise(newFilePath, newContent)
        console.log({ result })
        return 1000
    } catch (error) {
        console.log({ error });
    }

}
main().then(console.log)
console.log(3)