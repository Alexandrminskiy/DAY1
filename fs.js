const fs = require('fs')

fs.readFile('./index.js', 'utf-8', (errRead, contentOfFile) => {
    if (errRead) {
        console.log(errRead)
        return
    }
    const newContent = contentOfFile + contentOfFile

    fs.writeFile('./index_copy.js', newContent, (errWrite) => {
        if (errWrite) {
            console.log(errWrite);
            return
        }
        console.log('Новый файл создан')
    })
})