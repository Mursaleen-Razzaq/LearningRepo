//Examples..
const student = {
  name: "Ali",
  age: 20
};

const json = JSON.stringify(student);
console.log(json);

const obj = JSON.parse(json);
console.log(obj.name);

//Examples..
const person = {
  name: "Sara",
  age: 25
};

console.log(Object.keys(person));
console.log(Object.values(person));