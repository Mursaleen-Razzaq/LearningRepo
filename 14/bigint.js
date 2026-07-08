// bigint...

//Examples...
console.log("Start");
const bigNumber = 9007199254740991n
let x = 1;
let y = 2;

console.log(bigNumber + BigInt(y));
console.log(bigNumber + BigInt(x));

console.log("End");

//Example...

const a = 123456789012345678901234567890n;
const b = BigInt("987654321098765432109876543210");

const sum = a + b;
const diff = b - a;
const prod = a * b;
const div = b / a;
const mod = b % a;


//Example...
const num = 100;
const sumMixed = a + BigInt(num);


//Example...
const isGreater = b > a;
const isEqual = a === BigInt("123456789012345678901234567890");

console.log("a:", a);
console.log("b:", b);
console.log("sum:", sum);
console.log("sumMixed:", sumMixed);
console.log("isGreater:", isGreater);
console.log("isEqual:", isEqual);
console.log("typeof a:", typeof a);
