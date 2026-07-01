
// Function object and Named Function Expression (NFE) example
//Rest operator
function func(val, val2, ...num1){
    return num1;
}
console.log(func(200, 300, 400, 500, 600));

//
const user = {
    username: "Mursaleen",
    price: 299,
}
function handleObject(anyObject){
console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user);
handleObject({
    username: "sleen",
    price: 199
});

//
const myNewArray = [100, 200, 300, 400, 500];

function returnSecondValue(getArray){
    return getArray[0];
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 200, 300, 400, 500]));

//Named Function Expression (NFE)
let sum = function add(a, b) {
    if (a === 0) return b;

    return add(a - 1, b + 1);
};

const another = sum;
sum = null;

console.log(another(3, 5));

console.log(typeof add);