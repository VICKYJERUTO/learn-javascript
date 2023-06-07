//Declare variables using the 'var' keyword
var name = "John";
var age = 30;

// Define a function using the 'function' keyword
function greet() {
  console.log("Hello, " + name + "!");
}
// Use the 'if' keyword to conditionally execute code
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
// Start a 'for' loop using the keyword 'for'
for (var i = 0; i < 5; i++) {
  console.log(i);
}
// Use the 'switch' keyword to perform different actions based on a value
var day = "Monday";
switch (day) {
  case "Monday":
    console.log("It's the start of the week.");
    break;
  case "Friday":
    console.log("It's almost the weekend.");
    break;
  default:
    console.log("It's an ordinary day.");
}
 // Use the 'return' keyword to return a value from a function
function add(a, b) {
    return a + b;
  }
  var sum = add(5, 3);
  console.log("The sum is: " + sum);