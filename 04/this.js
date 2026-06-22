
// const user = {
//     userName: "Mursaleen",
//     age: 20,

//     welcomeMessage: function(){
//         console.log(`${this.userName}, Welcome to website`)
//         console.log(this.userName);
//         console.log(this);
//     }
// }
// user.welcomeMessage();
// user.userName = "Mursaleen Razzaq"
// user.welcomeMessage();
// console.log(this);

//
function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("MURSALEEN");

console.log(user.name);     // MURSALEEN
console.log(user.isAdmin);  // false