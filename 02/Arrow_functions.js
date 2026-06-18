
const sayHello = (name, greeting) => console.log(greeting + " " + name)
sayHello("Mursaleen Razzaq", "Good Evening")

const x = {
    name: "Mursaleen Razzaq",
    role: "Js developer",
    edu: "Half Graduated",
    show: function(){
        
        setTimeout(() => {
           console.log(`The name is ${this.name}\n The role is ${this.role}`)
        }, 2000)
    }
}
// console.log(x.name, x.edu, " and " , x.role);
x.show()


//Task...
function ask(question, Yes, No) {
    console.log("Arrow Functions")
    if (confirm(question)) Yes();
    else No();
}

ask (
    "Do you agree?",
    () => alert = "You agreed.",
    () => alert = "You cancelled the execution."
);
