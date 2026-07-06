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