//create a weakset
let myweakset =new WeakSet();
//creat some new objects
let object1={name,object1};
let object2={name,object2};
let object3={name,object3};
//add objects to the weakset
myweakset.add("object1");
myweakset.add("object2");
myweakset.add("object3");
// Check if the weak set has an object
console.log(myWeakSet.has(object1)); // true
console.log(myWeakSet.has(obectj3)); // false
// Remove an object from the weak set
myWeakSet.delete(object2);
// Check if the weak set has the removed object
console.log(myWeakSet.has(object2)); // false
// Allow garbage collection by removing all references to an object
object1 = null;
// Check if the weak set still has a reference to the object (it should be automatically removed)
console.log(myWeakSet.has(object1)); // false