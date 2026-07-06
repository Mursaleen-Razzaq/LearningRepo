
//Syncronous Programming
let a = prompt("What is your name?");
let b = prompt("What is your age?");
let c = prompt("What is your favourite color?");

console.log(a + " is " + b + " years old and has " + c + " favourite color. ");

// Asyncronous Programming
console.log("Start");
setTimeout(function() {
    console.log("Hey i am good.");
}, 3000);
console.log("End");

//Callback
function loadScript(src, callback) {
    var script = document.createElement("script");
    script.src = src;

    script.onload = function () {
        console.log("Loaded script with SRC: " + src);
        callback(null, src);
    };
    
    script.onerror = function() {
        console.log("Error handling script with SRC:" + src);
        callback(new Error("Src got some error."));
    }
    document.body.appendChild(script);
}
function hello(error, src) {
    if(error){
        console.log(error);
        return
    }
    console.log("Hello World!" + src);
}

function morning(error, src) {
    if(error){
        console.log(error);
        return
    }
    console.log("Good Morning" + src);
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js",morning);
