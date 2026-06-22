// Non Primitive data types..Objects
const student = {
    name: "Mursaleen",
    marks: 100,
}
console.log(student.name);

//7 primitive data types..
//Numbers, Null, String, Symbol, Boolean, Bigint, Undefined
let a = 786;
let b = null;
let c = "Mursaleen";
let d = Symbol("I am a Mursaleen");
let e = true;
let f = BigInt("783") + BigInt("3");
let g = undefined;

console.log(a, b, c, d, e, f, g);
console.log(typeof f);

//Upper case...
let h = "Mursaleen";
alert( h.toUpperCase() );

//Example...
let string = "Mursaleen";
string.test = 5;

alert(string.test);
