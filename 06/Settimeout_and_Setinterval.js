//Set time out and set interval 
const sum = (a, b, c) => {
    console.log("Yes I am sum: ", a + b - c);
}
setTimeout(sum, 2000, 3, 7, 8); 


//Another example of setTimeout function
let a = setTimeout(function (){
console.log("I am a setTimeout function: I will run after 5 seconds");
 }, 
 5000);

let b = prompt("Do you want to clear the timeout function?"); 
if("y" == b){
    clearTimeout(a);  //clear the timeout function
}

 //Set interval function
 //setInterval function will run every given seconds
let interval = setInterval(function(){
    alert("I am a setInterval function");
}, 2000) 

//
function printNumbers(from, to){
    let current = from;

    let timerId = setInterval(function(){
        alert(current);
        if(current == to){
            clearInterval(timerId);
        }
        current++;
    }, 1000);
}
printNumbers(2, 10);