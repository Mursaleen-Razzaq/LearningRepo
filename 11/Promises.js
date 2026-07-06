//Example promises..
const promise1 = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async task is complete.");
        resolve()
    })
})

promise1.then(function() {
    console.log("Promise consumed.");
    
})

//Promise 2.
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2.");
        resolve()
    },1000)
}).then(function(){
    console.log("Promise 2 resolved.");
})

//
const promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Mursaleen", email: "mursaleen@gmail.com"});
    }, 1000)

})
promise3.then(function(user){
    console.log(user);
})

//
const promise5 = new Promise(function(resolve, reject) {
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Javascript", password: "234" })
        }else {
            reject("ERR: js went wrong.")
            }
    }, 1000)
})
async function consumePromise5() {
    try {
        const response = await promise5
      console.log(response);
    }catch (error){
        console.log(error);
    }
}
consumePromise5()

//
async function getAllUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("Error: ", error);
    }
}
getAllUsers()

//
fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
 })
 .catch((error) => console.log(error));