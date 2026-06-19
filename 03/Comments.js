
/* Multi line comments.......
-----------------------------
   Power function: x^n
   Multiplies x by itself n times
------------------------------ */
function pow(x, n){
    let result = 1; //store final answer
    //loop run n times..
    for(let i = 0; i < n; i++){
        result *= x; //multiply result by x each time..
    }
    return result; //return the final answer
}

/* -----------------------------
   Taking input from user
------------------------------ */

// get base number
let x = prompt("x?", '')
let n = prompt("n?", '')

/* -----------------------------
   Input validation
------------------------------ */

if(n <= 0){
    //show error if power is 0 or negative.. 
    alert(`Power ${n} is not supported, 
please enter an integer number greater than zero`);
}
else {
    //Call function and show result
    alert( pow (x, n));
}