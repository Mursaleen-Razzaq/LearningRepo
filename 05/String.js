
// //Tasks....
// function ucFirst (str){
//     if(!str)
//         return str;
//     return str[0].toUpperCase() + str.slice(1);
// }
// alert(ucFirst ("mursaleen"));

// //2.
// function checkSpam(str){
//     let lowerStr = str.toLowerCase();
    
//     return lowerStr.includes('viagra') || lowerStr.includes('yyy');

// }
// alert(checkSpam('buy ViAgRA now'));
// alert(checkSpam('free yyyyy'));
// alert(checkSpam('innocent rabbit'));

//Examples...

const name = "Mursaleen Razzaq";
const repoCount = 30;

console.log(name + " and my repo is " + repoCount);
console.log(`Hello my name is ${name} and my repo is ${repoCount}`); 

//String properties...and Methods...
const gameName = new String(`Mursaleen`);

console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.__proto__);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(0));
console.log(gameName.indexOf('R'));

//Substring...
const newString = gameName.substring(0, 9);
console.log(newString);
//Slice...
const anotherString = gameName.slice(-9, 5);
console.log(anotherString);
//Trim..
const newStringTrim = '    Mursaleen    ';
console.log(newStringTrim);
console.log(newStringTrim.trim());
//URL... Replace..
const url = "https://mursaleen.com/mursaleen%20/razzaq";
console.log(url.replace('%20', '-'));

console.log(url.includes('mursaleen'));
//split..
console.log(gameName.split('-'));
