//Examples

let animal = {
    eat: true,
}
let rabit = Object.create(animal);
console.log(rabit.eat);

console.log(Object.getPrototypeOf(rabit) === animal);
Object.setPrototypeOf(rabit, {})


//Example
let animal2 = {
  eats: true
};

let rabbit = Object.create(animal2, {
  jumps: {
    value: true
  }
});
console.log(rabbit.jumps); // true

//Example
let map = new Map();

let key = prompt("What's the key?", "__Proto__");
map.set(key, "Some value");
console.log(map.get(key));

