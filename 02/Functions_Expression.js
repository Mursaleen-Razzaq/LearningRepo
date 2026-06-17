
function ask(question, yes, no){
  if(confirm(question)) yes();
    else no();
}

function showOk(){
    alert("Do you agree.");
}
function showCancel(){
    alert("You Cancel.");
}

ask("Do you agree?", showOk, showCancel);


//Another 
function ask(question, yes, no){
    if (confirm(question)) yes();
    else no();
}

function showOk(){
    alert("You agreed.");
}
function showCancel(){
    alert("You cancel it.");
}

ask("Do You agree?", showOk, showCancel);


//
function sum(){
    console.log(3 + 4);
}
sum();


//
let age = prompt("what is your age?", 18);

if(age < 18){
    function welcome(){
        alert("Welcome");
    }

}else{
    function welcomr(){
        alert("Greetings!")
    }
}
welcome();


//Good one...
let age = prompt("Enter your age?", 18);

let welcome;
if(age < 18){
    welcome = function(){
        alert("Hello!")
    }
}
else{
    welcome = function(){
        alert("Greetings!")
    }
}
welcome();
