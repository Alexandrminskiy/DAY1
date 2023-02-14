console.log(1);
const p = new Promise((resolve, reject) => {
    console.log(2);
    setTimeout(() => {
        let rndNum = Math.random()

        if (rndNum > 0.5) {
            resolve(rndNum)
        } else {
            reject(rndNum)
        }}, 100)
})
console.log(p);
console.log(3);

p.then((goodValue) => {
        console.log({goodValue});
        // Асинхроная операция
        throw new Error('Ошибка');
    })
.then((data)=>{
    console.log(data)
})
.catch(
    (badValue)=>{
        console.log({badValue});
    }
)