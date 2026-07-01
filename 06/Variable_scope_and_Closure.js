// Variable scope...

// var c = 300;
let a = 300;
if(true){
   let a = 10;
   const b = 20;
//    console.log("Inner: ", a);
//    var c = 30;
}
// console.log("Outer: ", a)
// console.log(b)
// console.log(c)

//
function makeCounter(){
    let count = 0;

    return function(){
        return count++;
    };
}
let counter = makeCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

//Clouser...
function outer(){
    let name = "Mursaleen Razzaq"
    let age = 18
    function inner(){
        console.log(name);
        console.log(age);
    }
    function mostinner(){
        console.log(name);
        console.log(age);
    }
    inner();
    mostinner();
}
//Show error because out side of function..
outer();
console.log(name);
console.log(age);

