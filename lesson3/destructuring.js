//rest parameters
const { name, age, ...rest } = { name: 'vicky', age: 23, city: 'nairobi', country: 'USA' };
console.log(name);    // Output: 'vicky'
console.log(age);     // Output: 23
console.log(rest);    // Output: { city: 'nairobi', country: 'KENYA' }





// Spread Operator
const obj1 = { name: 'vicky', age: 23 };
const obj2 = { ...obj1, city: 'Nairobi', country: 'KENYA' };
console.log(obj2); // Output: { name: 'vicky', age: 23, city: 'rk', country: 'KENYA' }