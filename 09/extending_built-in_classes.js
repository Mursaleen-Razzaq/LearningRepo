class PowerArray extends Array{
    isEmpety() {
        return this.length === 0;
    }
}

let arr = new PowerArray(2, 3, 4, 20, 50);
console.log(arr.isEmpety());
let filteredArray = arr.filter(item => item >= 20);
console.log(filteredArray);
console.log(filteredArray.isEmpety());


class name extends Array{
    isEmpety(){
        return this.length === 0;
    }
}
let nam = new name("Mursaleen", "Rashid", "Abdul Rehman");
console.log(nam.isEmpety());
let filteredName = nam.filter(item => item.startsWith("M", "A"));
console.log(filteredName);
console.log(filteredName.isEmpety());


