//Primitive data types..
let user = {
  name: "John",
  money: 1000,

  // for hint="string"
  toString() {
    return `{name: "${this.name}"}`;
  },

  // for hint="number" or "default"
  valueOf() {


    return this.money;
  }
};

alert(user); // toString -> {name: "John"}
alert(+user); // valueOf -> 1000
alert(user + 500); // valueOf -> 1500

//Example...
let obj = {
    valueOf (){
        return 784;
    },
  toString() {
    return "Mursaleen";
  }
};

alert(obj); // toString -> John
alert(obj + 2); // toString -> John500

