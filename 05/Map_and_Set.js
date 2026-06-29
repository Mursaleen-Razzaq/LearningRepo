

// Map: stored keys...
const userRoles = new Map();
userRoles.set('alice', 'admin');
userRoles.set('bob', 'editor');
userRoles.set('carol', 'viewer');

console.log('Map size:', userRoles.size);
console.log('Alice role:', userRoles.get('alice'));
console.log('Has bob?', userRoles.has('bob'));

for (const [user, role] of userRoles) {
  console.log(`${user}: ${role}`);
}

// Set: unique values only
const numbers = new Set([1, 2, 2, 3, 4, 4]);
console.log('Set size:', numbers.size); // duplicates removed

numbers.add(5);
numbers.delete(2);
console.log('Has 3?', numbers.has(3));

for (const value of numbers) {
  console.log(value);
}

// Convert between Map/Set and arrays
const rolesArray = Array.from(userRoles.entries());
const uniqueArray = [...numbers];
console.log('Roles as array:', rolesArray);
console.log('Unique values array:', uniqueArray);


//Example..
let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion',    50]
]);

// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
  alert(vegetable); // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (let amount of recipeMap.values()) {
  alert(amount); // 500, 350, 50
}

// iterate over [key, value] entries
for (let entry of recipeMap) { // the same as of recipeMap.entries()
  alert(entry); // cucumber,500 (and so on)
}