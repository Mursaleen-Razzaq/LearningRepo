// Number data type examples in JavaScript
const num = 320;

console.log(num);
console.log(num.toString());
console.log(typeof num);

//
const balance = new Number(100);

console.log(balance);
console.log(balance.toString());
console.log(typeof balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));

//Precision values..

const otherNumber = 123.896;
console.log(otherNumber.toPrecision(1));

//
const hundred = 1000000;
console.log(hundred.toLocaleString());

//Examples...
let a = 100;          // Integer
let b = 12.5;         // Decimal
let c = Infinity;     // Infinity
let d = NaN;          // Not a Number
let e = 999999999999999999999n; // BigInt

console.log(a);
console.log(typeof a); // number
console.log(b);
console.log(typeof b); // number
console.log(c);
console.log(typeof c); // number
console.log(d);
console.log(typeof d); // number
console.log(e);
console.log(typeof e); // bigint

//=======Maths=====
console.log(Math);
console.log(Math.abs(-9));
console.log(Math.round(3.5));
console.log(Math.min(2, 3, -9, 8));
console.log(Math.max(2, 7, -9, 6));
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * 10 )+ min);

