//Decorators and Forwarding Call Apply
//Decorators are functions that take another function

function sayHello(name) {
    // console.log(`Hello ${name}`)
}
function loggingDecorator(func) {
    return function (name) {
        // console.log("Function is about to run");
        func (name);
        // console.log("Function finished");
    }
}
const decorated = loggingDecorator(sayHello)
decorated("Mursaleen.");

//Forwarding call and apply
function add(a, b, c, d) {
    // console.log(a + b + c + d);
}
function wrapper(...args){
    // console.log("Calling add...");
    add(...args);
}
wrapper(10, 20, 30, 40, 50);

//Call and Apply
function introduce(){
    console.log(`My name is ${this.name} and I am ${this.age} years old.`);
}
const persion = {
    name: "Mursaleen",
    age: 18,
};
introduce.call(persion);
introduce.apply(persion);

//Call and Apply
function greet(city, num){
    console.log(`My self ${this.name} and live in ${city} and my number is ${num}`);
}
const persion2 = {
    name: "Mursaleen Razzaq",
}
greet.call(persion2, "Multan", 96);
greet.apply(persion2, ["Multan", 96]);

//Call
function SetUsername(username){
    this.username = username;
    console.log("Called ");
}
function createUser(username, email, password){
    SetUsername.call(this, username);
    this.email = email;
    this.password = password;
 }
 const user = new createUser("Mursaleen", "mursaleen@example.com", "password123");
 console.log(user);
