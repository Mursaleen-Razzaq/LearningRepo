// //Readable and clear code...

// function pow(x, n)
// {
//   let result = 1;
//   for(let i = 0; i < n ; i++) {
//     result *= x;
// }

// return result;
//   }

// let x = prompt("x?", ''), 
// n = prompt("n?", '')
// if (n <= 0) {
//   alert(`Power ${n} is not supported, 
// please enter an integer number greater than zero`);
// }
// else {
//   alert( pow (x, n))
// }


//Unclear and Ninja Code...
let p=(x,n)=>{let r=1,i=0;for(;i<n;)r*=x,i++;return r}

let x=+prompt("x?",""),n=+prompt("n?","")

n<=0
?alert("Power "+n+" is not supported,\nplease enter an integer number greater than zero")
:alert(p(x,n))

/*----------------------------------------------
1. Function shortened to a single expression: p=(x,n)=>{...}
2. Removed spacing and structure
3. Combined declarations (let x=+prompt...)
4. Used +prompt() to force number conversion (implicit trick)
5. Replaced if/else with ternary operator ? :
6. Compressed loop formatting 
-----------------------------------------------------*/