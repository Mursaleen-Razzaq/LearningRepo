const p1 = {
    fName: "Mursaleen",
    lName: "Razzaq",
    age: 18,
};

const p1Proxy = new Proxy(p1, {
    get(target, prop) {
        if(prop in target) return target[prop];
        return false;
        // console.log(target);
        // return "Testing"
    },
    set(target, prop, value){
        if(!(prop in target)) throw new Error(`${prop} does not exists`)
            switch(prop) {
        case 'fName':
            case 'lName':
                if(typeof value !== 'string') throw new Error(`${prop} must be a string`)
                    break
            case 'age':
                 if(typeof value !== 'number') throw new Error(`${prop} must be a number`)
                if(value <= 0) throw new Error(`${prop} must be > zero`)
                    break
        }
        Reflect.set(target, prop, value);
    // target[prop] = value;//Default behaviour
    }
})
p1Proxy.age = 30;
console.log(p1Proxy);
// console.log(p1.fName);

