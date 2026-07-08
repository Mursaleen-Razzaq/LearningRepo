//Example Microtasks in javascript...
console.log("start");

setTimeout(() => {
    console.log("Timeout"); 
}, 0);
Promise.resolve().then(() => {
    console.log("Promise");
    
});
console.log("End");

//Example...
console.log("Start");
Promise.resolve().then(() => {
    console.log("Promise 1");
    
});
Promise.resolve().then(() => {
    console.log("Promise 2");

})

console.log("End.");

//Example with async/await...
async function demo() {
    console.log("Hello");
    
    await Promise.resolve();
    console.log("Mursaleen.");
    
}
demo()
console.log("Javascript");
