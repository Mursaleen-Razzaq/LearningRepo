// //Task...

// let user = {}
// user.name = "Mursaleen";
// user.age = 20;
// user.name = "Razzaq";
// delete user.name ;
// console.log(user.age);

// //Task...

// function isEmpety(obj){
//     console.log("Print")
//     for (let key in obj){
//         return false;
        
//     }
//     return true;
// }
// isEmpety();

// //Task...
// let salaries = {
//     Ann: 100,
//     John: 130,
//     pete: 160
// };
// let sum = 0;
// for(let key in salaries){
//     sum += salaries[key];
// }
// console.log(sum);

// //Multiply numeric property values by 2
// // before the call
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);
// console.log(menu);
// // after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };

// function multiplyNumeric(obj){
//     for (let key in obj){
//         if(typeof obj[key] == "number"){
//             obj[key] *= 2;
//         }
//     }
// }


//Examples....
class Persion {
    constructor(fName, lName, contact){
        this.fName = fName;
        this.lName = lName;
        this.contact = contact;
    }
    getContact(){
        console.log(this.contact);
    }
    getName(){
        console.log(this.fName, this.lName);
    }
}

const persion1 = new Persion("Mursaleen", "Razzaq", "99999999999");
const persion2 = new Persion("Faheem", "Razzaq", "99999999999");

// console.log(persion1);
// console.log(persion2);
//For full name...
persion1.getName();
persion1.getContact();
persion2.getName();
persion2.getContact();

//
class RailwayForm {
    submit(){
        alert("Form Submitted.")
    }
    cancel(){
        alert(this.name + ": This form cancelled.")
    }
    fill(givenName){
        this.name = givenName;
    }
}
    let harryForm = new RailwayForm();
    harryForm.fill("Harry");
    let rohanForm = new RailwayForm();
    rohanForm.fill("Rohan");

    harryForm.submit();
    rohanForm.submit();
    rohanForm.cancel();

    console.log()