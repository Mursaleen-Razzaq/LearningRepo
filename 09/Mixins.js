//Example 1
let sayHiMixins = {
    sayHi() {
        console.log(`Hi ${this.name}`);  
    },
    sayBy() {
        console.log(`By ${this.name}`);
    },
};

class User {
    constructor(name){
        this.name = name;
    }
}
Object.assign(User.prototype, sayHiMixins);

new User("Mursaleen").sayHi();
new User("Mursaleen").sayBy();

//Example 2
let sayMixin = {
    say(pharase){
        console.log(pharase);   
    }
};
let sayHiMixin = {
    __proto__: sayMixin,

sayHi() {
    super.say(`Hello ${this.name}`);
   },
   sayBy() {
    super.say(`Bye ${this.name}`);
   }
};

class User2 {
    constructor(name){
        this.name = name;
    }
}

Object.assign(User2.prototype, sayHiMixin);

new User2("Mursaleen Razzaq").sayHi();
new User2("Mursaleen Razzaq").sayBy();

