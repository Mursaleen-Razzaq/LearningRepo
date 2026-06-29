// Destructuring Assignment

// Array Destructuring
const colors = ['red', 'green', 'blue'];
const [firstColor, secondColor, thirdColor] = colors;
console.log(firstColor, secondColor, thirdColor); // red green blue

//
let array = [3, 5, 4, 6, 8, 9]
let [a, , , d, ...rest] = array
console.log(a, d, rest);
// let [a, b, c, d, ...rest] = array
// console.log(a, b, c, d, rest);

//
let {i, j} = {i: 3, j: 5}
console.log(i, j);
