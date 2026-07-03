class Coffee {
    waterAmount = 0;
    constructor(pow){
        this.pow = pow;
        console.log(`Created a coffee-Machine, power ${pow}`);
    }
}
let coffee = new Coffee(100);
coffee.waterAmount = 200;

//
class CoffeeMachine {
   _waterAmount = 0;
   set waterAmount(value){
     if(value < 0){
        value = 0;
     }
     this._waterAmount = value;
   }
   get waterAmount(){
    return this._waterAmount;
   }
   constructor(power){
    this.power = power;
   }
}

let coffeeMachine = new CoffeeMachine(100);
coffeeMachine.waterAmount = -10;
console.log(coffeeMachine.waterAmount); 

coffeeMachine.waterAmount = 50;
console.log(coffeeMachine.waterAmount); 


//
class Person {
  #name = "Ali"; // Private property

  #showName() { // Private method
    console.log("Name:", this.#name);
  }

  display() {
    this.#showName(); // Accessing private method inside the class
  }
}

const person = new Person();
person.display(); // Output: Name: Ali

// person.#name;      // Error
// person.#showName(); // Error