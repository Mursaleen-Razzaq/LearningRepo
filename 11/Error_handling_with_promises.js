//Error_handling_with_promises...Example..
const promise = new Promise(function(resolve, reject) {
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({name: "Mursaleen Razzaq", password: "304"})
        }else{
            reject("ERR: something went wrong.")
        }
    })
})
const username = promise.then((user) => {
    console.log(user);
    return user.name
}).then((username) => {
    console.log(username);
}).catch(function(error) {
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected."));

//
const promise2 = new Promise(function(resolve, reject) {
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Javascript", password: "234" })
        }else {
            reject("ERR: js went wrong.")
            }
    }, 1000)
})
async function consumePromise2() {
    try {
        const response = await promise2
      console.log(response);
    }catch (error){
        console.log(error);
    }
}
consumePromise2()
