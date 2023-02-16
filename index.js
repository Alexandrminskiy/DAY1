const promise = new Promise((resolve, reject) => {
    resolve('success 1')
}).then((value) => {
    return new Promise((resolve, reject) => {
        resolve('success')
    })
}).then((value) => {
    console.log(11, value)
})
