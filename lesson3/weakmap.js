// Create a WeakMap
let myWeakMap = new WeakMap();
// Create some key objects
let obj1 = {};
let obj2 = {};
let obj3 = {};
// Associate values with the objects in the WeakMap
myWeakMap.set(obj1, "Value for obj1");
myWeakMap.set(obj2, "Value for obj2");
// Get values associated with the objects
console.log(myWeakMap.get(obj1)); // "Value for obj1"
console.log(myWeakMap.get(obj3)); // undefined
// Check if the WeakMap has a key
console.log(myWeakMap.has(obj2)); // true
console.log(myWeakMap.has(obj3)); // false
// Remove a key-value pair from the WeakMap
myWeakMap.delete(obj1);
// Check if the WeakMap still has the removed key
console.log(myWeakMap.has(obj1)); // fals