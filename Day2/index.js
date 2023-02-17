// const $btn = document.querySelector('button')

// const clickHandler1 = () => {
//     Promise.resolve().then(() => console.log('Microtask 1'))
//     console.log('log 1');
// }

// $btn.addEventListener('click', clickHandler1)

// const clickHandler2 = () => {
//     Promise.resolve().then(() => console.log('Microtask 2'))
//     console.log('log 2');
// }


// $btn.addEventListener('click', clickHandler2)


const p = new Promise((resolve) => { resolve() })

p.then(undefined)

console.log(2);

const result = console.log();

console.log({ result });