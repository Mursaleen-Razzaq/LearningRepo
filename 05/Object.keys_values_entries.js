//Object.keys
const myObject = {
    b: "Mursaleen",
    c: 1,
    d: false,
};
Object.keys(myObject).forEach((i) =>{
    console.log(myObject[i]);
});

//Object.values
let value = Object.values(myObject);
console.log(value);

//Object.entries
let entries = Object.entries(myObject);
console.log(entries[1][1]);

//
let user = {
    name: "Mursaleen",
    age: 18,
}
for(let value of Object.values(user)) {
    alert(value);
}