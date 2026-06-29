
const course = {
    courseName: "Java Script",
    coursePrice: "999",
    courseInstructor: "Hitesh",
}
// course.courseInstructor;
// console.log(course.courseInstructor);
// const {courseInstructor: instructor} = course;
// console.log(instructor);

//Convert an object to JSON.
// const persion = {
//     name: "Mursaleen",
//     age: 18,
// }
// let json = JSON.stringify(persion);
// console.log(json);

// // Convert back to object.
// const json = '{"name":"Mursaleen","age":18}';
// const persion = JSON.parse(json);
// console.log(persion.name);
// console.log(persion.age);

//Convert an object to JSON.
let jsonObj = {
    name: "Mursaleen",
    age: 18,
    friend: "My Brother",
}
console.log(jsonObj);
let myJsonObj = JSON.stringify(jsonObj);
console.log(myJsonObj); 
myJsonObj = myJsonObj.replace("Mursaleen", "Faheem");
console.log(myJsonObj);

// Convert back to object.
newJsonStr = JSON.parse(myJsonObj);
console.log(newJsonStr);