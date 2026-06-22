// Symbol Type - Unique and Immutable Identifiers

// 1. Creating Symbols
const sym1 = Symbol();
const sym2 = Symbol('description');
const sym3 = Symbol('description');

console.log(typeof sym1); // "symbol"
console.log(sym2 === sym3); // false - each Symbol is unique
console.log(sym2.description); // "description"

// 2. Using Symbols as Object Keys
const myObject = {
  name: 'John',
  [sym1]: 'hidden value',
  [sym2]: 'another value'
};

console.log(myObject.name); // "John"
console.log(myObject[sym1]); // "hidden value"
console.log(Object.keys(myObject)); // ["name"] - Symbols are not enumerable

// 3. Global Symbols
const globalSym = Symbol.for('app.id');
const sameSym = Symbol.for('app.id');

console.log(globalSym === sameSym); // true - same global symbol
