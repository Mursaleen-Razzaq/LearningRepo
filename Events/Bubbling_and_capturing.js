

// Bubbling (default)
document.getElementById("parent").addEventListener("click", function(){
    alert("Parent Clicked");
}, false);

document.getElementById("child").addEventListener("click", function(e){
    alert("Child Clicked");
    e.stopPropagation();
}, false);


// To see Capturing, change false to true.

document.getElementById("parent").addEventListener("click", function(){
    alert("Parent");
}, true);

document.getElementById("child").addEventListener("click", function(){
    alert("Child");
}, true);


    // Event bubbling..
var div = document.querySelector('div')
div.addEventListener('click', () => {
    console.log("MURSALEEN RAZZAQ");
})

var button = document.querySelector('button')
button.addEventListener('click', () => {
    console.log("Rashid");
})

// Event Capturing..
var div = document.querySelector('div')
div.addEventListener('click', () => {
    console.log("MURSALEEN RAZZAQ");
}, true)


var button = document.querySelector('button')
button.addEventListener('click', () => {
    console.log("Rashid");
}, true)


//Stop Propagation..
var div = document.querySelector('div')
div.addEventListener('click', () => {
    console.log("MURSALEEN RAZZAQ");
})

var button = document.querySelector('button')
button.addEventListener('click', (event) => {
    event.stopPropagation()
    console.log("MURSALEEN");
})