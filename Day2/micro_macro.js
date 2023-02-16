setTimeout(() => {
    console.log('set Timeout 1');

    Promise.resolve('promise in setTimeout 1').then(console.log())
});

setTimeout(() => {
    console.log('set Timeout 2');    
});

const p = new Promise((resolve)=> resolve('from promise'))

p.then(console.log)

console.log('end')