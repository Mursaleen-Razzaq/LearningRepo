class User {
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
    static createID(){
        return 304;
    }
}
const mursaleen = new User("Mursaleen")
// console.log("Mursaleen ID is", mursaleen.createID());

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email;
    }
}
const iPhone = new Teacher("iPhone", "i@phone.com")
iPhone.logMe()
// console.log(iPhone.createID());
