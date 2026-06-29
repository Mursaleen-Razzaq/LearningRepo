//Example..
let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
console.log(typeof myDate);

//Example..
let myCreatedDate = new Date(2026, 0, 29);
console.log(myCreatedDate.toLocaleDateString());

//Example..
let CreatedDate = new Date(2026, 0, 29, 3, 2, 5);
console.log(myCreatedDate);

//Example..
let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

//Example..
let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getTime());
console.log(newDate.getDay());
console.log(newDate.getHours());

//Important...
newDate.toLocaleString('default', {
    weekday: "long",
});