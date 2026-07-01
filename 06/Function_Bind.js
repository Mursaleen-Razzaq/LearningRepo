
// let user = {
//   firstName: "Mursaleen",
//   lastName: "Razzaq",
//   age:18,
//   city: "Multan",
// };

// function func() {
//   console.log(this.firstName);
//   console.log(this.lastName);
//   console.log(this.age);
//   console.log(this.city);
// }

// let funcUser = func.bind(user);
// funcUser(); // John

//
let user2 = {
    firstName2: "Ali",
    sayHi(){
        console.log(`Hi ${this.firstName2}`);
    }
};
let sayHi = user2.sayHi.bind(user2);
sayHi(); 

setTimeout(sayHi, 1000);

user = {
    sayHi() {console.log("Another user in setTimeout")}
};