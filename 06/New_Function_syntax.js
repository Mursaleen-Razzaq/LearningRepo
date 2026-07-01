// Example of new function syntax in JavaScript
const add = (a, b) => a + b;
const square = n => n * n;
const greet = name => {
  return `Hello, ${name}!`;
};

const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2);

console.log(add(2, 3));
console.log(square(5));
console.log(greet('Alice'));
console.log(doubled);

// Example of the Function constructor syntax in JavaScript
let squareroot = new Function('n', 'return n * n;');
console.log(squareroot(5)); // Output: 25