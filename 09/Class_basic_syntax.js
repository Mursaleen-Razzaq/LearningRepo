// Class basic syntax examples
//
class User {
    constructor(name, password){
        this.name = name;
        this.password = password;
    }
    sayHi() {
        console.log(this.name);  
    }
    sayHello() {
        console.log(this.password);
    }
}
let user = new User("Mursaleen", 30476);
user.sayHi();
user.sayHello();


// 1. Simple class with constructor and method
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	greet() {
		return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
	}
	// getter
	get info() {
		return `${this.name} (${this.age})`;
	}
	// setter
	set birthday(years = 1) {
		this.age += years;
	}
	// static method
	static species() {
		return 'Homo sapiens';
	}
}
// Usage
const alice = new Person('Alice', 30);
console.log(alice.greet()); 
console.log(Person.species()); 
alice.birthday = 1;
console.log(alice.info); 

//
class basic {
	constructor(name) { this.name = name; }
	hello() { console.log(this.name);}
}
console.log(typeof basic);
console.log(basic === basic.prototype.constructor);
console.log(basic.prototype.hello);

//
class Tech {
	constructor(username, email, password){
		this.username = username;
		this.email = email;
		this.password = password;
}
	encrypetPassword(){
		return `${this.password}abc`
	}
	changeUsername(){
		return `${this.username.toUpperCase()}`
	}
}
const chai = new Tech("Tech Nebula", "tech@google.com", "304");
console.log(chai.encrypetPassword());
console.log(chai.changeUsername());
