//Prototypal Inheritance...
const persion1 = {
    fName: "Mursaleen",
    lastName: "Razzaq",

    getfullName(){
        return (`${this.fName} ${this.lastName}`);
    }
};
const persion2 = {
    __proto__: persion1,
};
console.log("Persion 1 is ", persion1.fName);
persion2.__proto__.fName = "Nadeem";
console.log("Persion 1 after ", persion1.fName);

//__Proto__
const p1 = {
    xP1: "I am inside p1",
};
const p2 = {
    xP2: "I am inside p2",
    __proto__: p1,
};
const p3 = {
    xP3: "I am inside p3",
    __proto__: p2,
};
console.log(p1.xP1);
console.log(p2.xP2);
console.log(p2.xP1);
console.log(p3.xP3);
console.log(p3.xP1);
console.log(p3.xP2);

//Prototype in js
class Animal {
    eat(){
        console.log("Eating...");
    }
}
class Dog extends Animal {
    bark() {
        console.log("Woof.. woof..");
    }
}
const dog = new Dog();
dog.eat();
dog.bark();

//Examples
let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed,
};
console.log(pockets.pen);
console.log(bed.glasses);
console.log(table.money);