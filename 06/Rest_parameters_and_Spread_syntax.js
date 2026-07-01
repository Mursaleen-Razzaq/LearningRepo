// Rest parameters
function sum(...numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}

// console.log(sum(1, 2, 3, 4, 5));

// Spread syntax
const numbers = [2, 3, 4, 5, 6];
const numbers2 = [7, 8, 9, 10, 11, 12];
let combinedNumbers = [...numbers, ...numbers2];
console.log(combinedNumbers);

//Rest parameters ...
function sumAll(...num){
    let sum = 0;
    for(let number of num)
        sum += number;
        return sum;
}
    console.log(sumAll(2));
    console.log(sumAll(2,4));
    console.log(sumAll(2, 5, 6));
    console.log(sumAll(2, 7, 8, 9));
    console.log(sumAll(2, 6, 4, 3, 9));
    console.log(sumAll(2, 2, 4, 7, 9, 8));
   
    //Rest parameters ...
function introduce(name, age, ...hobbies) {
  
//   console.log(name);
//   console.log(age);
//   console.log(hobbies);
}
introduce("Alice", 25, "Reading", "Coding", "Traveling");