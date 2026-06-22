// Optional Chaining (?.)
// Safely access nested object properties without checking each level

// Example 1: Basic optional chaining with objects
const user = {
  name: "John",
  address: {
    street: "123 Main St",
    city: "New York"
  }
};

console.log(user?.address?.city); // "New York"
console.log(user?.phone?.number); // undefined (instead of error)

// Example 2: Optional chaining with function calls
const obj = {
  method: () => console.log("Method called")
};

obj?.method?.(); // "Method called"
obj?.unknownMethod?.(); // undefined (no error)

// Example 3: Optional chaining with arrays
const items = [1, 2, 3];
console.log(items?.[0]); // 1
console.log(items?.[10]); // undefined

// Example 4: Combining with nullish coalescing (??)
const user2 = null;
const name = user2?.name ?? "Guest"; // "Guest"

// Example 4: Short-circuit evaluation
const config = {
  settings: null
};

console.log(config?.settings?.theme); // undefined (stops at null)
