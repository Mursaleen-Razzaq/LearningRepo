//Examples....
//Arithematic Expression...
let expression = prompt("Type an arithematic expression?", '2*3+4');
console.log(eval(expression));


//String to 
const code = 
`let name = " Mursaleen";
console.log("Hello," + name);
`;
eval(code);

//Function
function greet(name){
    return `Hello, ${name}`;
}
const cod = `console.log(greet("Mursaleen Razzaq"));`;
eval(cod)

//code string contains a loop:
const str = `
for (let i = 1; i <= 5; i++) {
    console.log("Count:", i);
}
`;

eval(str);

