//Recursion... Function calling itself..
function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

console.log( pow(2, 3) );
console.log( pow(3, 4));
console.log( pow(4, 6));
console.log( pow(6, 7));
console.log( pow(8, 9));

//Stack...Follow LIFO Principle..
let stack = [];
//Push data..
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);

console.log(stack);
//Now pop data..
stack.pop();
stack.pop();
console.log(stack);