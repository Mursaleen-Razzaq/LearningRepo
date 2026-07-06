// Promise_API exmples

let promise1 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve("Value 1.")
    }, 1000)
})

let promise2 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve("Value 2.")
    }, 2000)
})

let promise3 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve("Value 3.")
    }, 3000)
});

// promise1.then((value) => {
//     console.log(promise1);
// })

// promise2.then((value) => {
//     console.log(promise2);
// })

// promise3.then((value) => {
//     console.log(promise3);
// })

//Promise all...
// let promise_all = Promise.all([promise1, promise2, promise3]);
// let promise_all = Promise.allSettled([promise1, promise2]);
// let promise_all = Promise.race([promise1, promise2, promise3]);
// let promise_all = Promise.any([promise1, promise2, promise3]);
let promise_all = Promise.resolve(6);
promise_all.then((value) => {
    console.log(value);
})
