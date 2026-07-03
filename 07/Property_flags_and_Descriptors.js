

//Property_flags_and_Descriptors
const user = {
    firstName: 'Alice',
    lastName: 'Smith',
};
Object.defineProperty(user, 'role', {
    value: 'admin',
    writable: false,
    enumerable: true,
    configurable: false,
});
console.log('role:', user.role);
console.log('role descriptor:', Object.getOwnPropertyDescriptor(user, 'role'));


//Object Descriptors in javascript
const persion = {
};
Object.defineProperty(persion, 'name',{
    value: 'Mursaleen',
    writable: true,
    enumerable: true,
    configurable: false
});
persion.name = 'Mursaleen Razzaq';

delete persion['name'];

console.log('name:', persion.name);

for (let key in persion) {
    console.log(key);
}
 