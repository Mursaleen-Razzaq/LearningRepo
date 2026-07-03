
//Class inheritance
//Examples

class sleen {
	constructor(username){
		this.username = username;
	}
	logMe(){
		console.log(`USERNAME is ${this.username}`);
	}
}
class Teacher extends sleen{
	constructor(username, email, password){
		super(username);
		this.password = password;
		this.email = email;
	}
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}
const code = new Teacher("CODER", "code@google.com", "code@304");
code.addCourse();
const maslaChai = new sleen("maslaChai")
maslaChai.logMe()

//Examples
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }

  stop() {
    this.speed = 0;
    console.log(`${this.name} stands still.`);
  }

}
class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} hides!`);
  }
  stop() {
    super.stop(); 
    this.hide(); 
  }
}
let rabbit = new Rabbit("White Rabbit");

rabbit.run(5); 
rabbit.stop(); 