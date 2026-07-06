class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  bark() {
    return `${this.name} says woof`;
  }
}

const toni = new Dog('Buddy');

console.log(toni instanceof Dog);      
console.log(toni instanceof Animal);   
console.log(toni instanceof Object);  
console.log(toni instanceof Array);    
const something = {};
console.log(something instanceof Animal); 
