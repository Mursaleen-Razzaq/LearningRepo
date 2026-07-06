
//Promises chaining examples...
new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000);

})
.then(function(result) {
    console.log(result);
    return result * 2;
})
.then(function(result) {
   console.log(result);
    return result * 2;
})
.then(function(result) {
    console.log(result);
    return result * 2;
})
.then(function(result) {
    console.log(result);
    return result * 2;
});

//
let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000);

})
promise.then(function(result) {
    console.log(result);
    return result * 2;
})
promise.then(function(result) {
   console.log(result);
    return result * 2;
})
promise.then(function(result) {
    console.log(result);
    return result * 2;
})
promise.then(function(result) {
    console.log(result);
    return result * 2;
});

//Returning promises
 new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000)
})
.then(function(result) {
    console.log(result);
    return new Promise(function(resolve, reject) {
        setTimeout(() => resolve(result * 2) , 1000);
    })

})
.then(function(result) {
    console.log(result);
    return new Promise(function(resolve, reject) {
        setTimeout(() => resolve(result * 2) , 1000);
    })
})
.then(function(result) {
    console.log(result);
    return new Promise(function(resolve, reject) {  
    setTimeout(() => resolve(result * 2) , 1000);
    })
})
.then(function(result) {
    console.log(result);
});


// Promises Chaining Example
const promise4 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = false;
        if (!error) {
            resolve({
                name: "Mursaleen Razzaq",
                password: "304"
            });
        } else {
            reject("ERR: Something went wrong.");
        }
    }, 1000);
});

// Promise Chaining
promise4
.then((user) => {
    console.log(user);
    return user.name;
})
.then((username) => {
    console.log(username);
})
.catch((error) => {
    console.log(error);

})
.finally(() => {
    console.log("The promise is either resolved or rejected.");
});