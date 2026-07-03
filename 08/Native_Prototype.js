
let arr = [1, 2, 3];
console.log( arr.__proto__ === Array.prototype ); // true
console.log( arr.__proto__.__proto__ === Object.prototype ); // true

console.log( arr.__proto__.__proto__.__proto__ ); // null

//
let obj = {
    0: "Hello",
    1: "World",
    length: 2,
};
obj.join = Array.prototype.join;
console.log(obj.join(','));
//
Function.prototype.differ = function (ms){
    setTimeout(this, ms);
};
function f(){
    console.log("Hello");
}
f.differ(2000);

//
let myLanguage = ["Js", "java"];

let langPow = {
}
Object.prototype.mursaleen = function() {
    console.log(`Mursaleen is present in all objects`);
}
Array.prototype.heymursaleen = function() {
    console.log("Mursaleen says hello.");
}
langPow.mursaleen()
myLanguage.mursaleen()
// langPow.heymursaleen()
myLanguage.heymursaleen()