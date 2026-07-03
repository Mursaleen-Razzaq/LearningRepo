// Arrow Functions in JavaScript
//Example
const add = (a, b) => {
  return a + b;
};
console.log(add(5, 3));

//Example
let sayHello = (greeting, name) => console.log(greeting, "", name);
sayHello("Hello,", "Mursaleen Razzaq");

//Example
let sayHello2 = name => console.log("Hello, ", name);
sayHello2("Mursaleen Razzaq");

//Example
const x = {
  name: "Mursaleen Razzaq",
  role: "Developer",
  exp: 3,
  show: function () {
  
    setTimeout(() =>{
       console.log(`The name is ${this.name} \nThe role is ${this.role}`);
    }, 2000);
  }
};
console.log(x.name, x.role,)
x.show()

//Example
var result = [2, 4, 6, 8].every((value) => {
  return value % 2 === 0;
});
console.log(result);