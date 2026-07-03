//F.prototype
let animal = {
    eat: true,
    bark: false,
};
function Rabbit(name) {
    this.name = name;
}
Rabbit.prototype = animal;

let rabbit = new Rabbit("White Rabbit");
console.log(rabbit.eat);
console.log(rabbit.bark);

//
function Dog(name){
    this.name = name;
    console.log(name);
}
let dog = new Dog("White Dog");
let dog2 = new dog.constructor("Black dog");

//Prototype
function createuser (username, score){
    this.username = username
    this.score = score
}
createuser.prototype.increment = function(){
    this.score++;
}
createuser.prototype.printMe = function(){
    console.log(`Price is ${this.score}`);
}
const chai = new createuser ("Chai", 25)
const tea = createuser ("tea", 250)
chai.printMe();