
// Simple curry implementation
//Example add...
function add(a){
    return function(b){
        return function(c){
            return a + b + c;
        };
    };
}
console.log(add(2)(3)(5));

//Example mul....
function mul(i){
    return function(j){
        return function(k){
            return i * j * k;
        };
    };
}

//With errow function...
// const mul = (i) => (j) => (k) => i * j * k;

console.log(mul(3)(2)(5));


// Example send Auto Email...
function sendAutoEmail(to){
    return function(subject){
        return function(body){
            console.log(`Sending Email to ${to} with subject ${subject}: ${body}`);

        };
    };
}

// //With errow function...
// const sendAutoEmail = (to) => (subject) => (body) =>
//     `Sending Email to ${to} with subject ${subject}: ${body}`

let step1 = sendAutoEmail("mursaleen@gmail.com");
let step2 = step1("New order conformation");
step2("Hey mursaleen, here is some update for you")

//For errow function uncomment it
// console.log(step2("Hey mursaleen, here is some update for you"));

