
//Examples Promisification...
function getDataPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received");
        }, 1000);
    });
}

getDataPromise()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });
    
    //Example 2
    function loginUserPromise(username) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve("Welcome " + username);

        }, 1000);

    });
}

loginUserPromise("Mursaleen")
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });