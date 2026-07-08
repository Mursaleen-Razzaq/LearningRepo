// Reference Types in JavaScript

//OBJECTS...
const person1 = { 
    name: 'Mursaleen', 
    age: 30,
};
const person2 = person1; 

person2.name = 'Mursaleen Razzaq';
console.log(person1.name); 

//ARRAYS...
const arr1 = [1, 2, 3];
const arr2 = arr1; 

arr2[0] = 99;
console.log(arr1[0]); 

//FUNCTIONS...
const func1 = function() { 
    return 'Hello'; 
};
const func2 = func1; 

console.log(func1 === func2); 

//
const person = {
  name: "Mursaleen",
  age: 18,
};

const anotherPerson = person;

anotherPerson.age = 30;

console.log(person.age); 
console.log(anotherPerson.age);