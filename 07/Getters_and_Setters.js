// Getters and Setters 
const persion = {
  firstName: "Mursaleen",
  lastName: "Razzaq",

get fullName() {
   return `${this.firstName} ${this.lastName}`;
  },

  set fullName(value) {
   [this.firstName, this.lastName] = value.split(' ');
  } 
};
persion.fullName = "Nadeem Razzaq";
console.log(persion.fullName);
console.log(persion.firstName);
console.log(persion.lastName);

//Accessor descriptors
const persion2 = {
  firstName: "Mursaleen",
  lastName: "Razzaq",
};
  Object.defineProperty(persion2, 'fullName',{
    get() {
      return `${this.firstName} ${this.lastName}`;
    },
     set(value) {
      [this.firstName, this.lastName] = value.split(' ');
    },
  });
  console.log(persion2.fullName);
  for (let key in persion2) {
    console.log(key);
  }

  //Smarter getters/setters
const persion3 = {
  get name() {
    return this._name;
  },
  set name(value) {
    if (value.length < 4) {
      console.log("Name is too short.");
      return;
    }
    this._name = value;
  }
};
persion3.name = "saleen";
console.log(persion3.name);
