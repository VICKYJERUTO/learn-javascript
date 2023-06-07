var age = 25;
// If statement
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
// If-else if-else statement
if (age < 13) {
  console.log("You are a child.");
} else if (age >= 13 && age < 18) {
  console.log("You are a teenager.");
} else {
  console.log("You are an adult.");
}
// Ternary operator
var isAdult = age >= 18 ? true : false;
console.log("Is adult? " + isAdult);
// Switch statement
var day = "Monday";
switch (day) {
  case "Monday":
    console.log("It's the start of the week.");
    break;
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
    console.log("It's a weekday.");
    break;
  case "Friday":
    console.log("It's almost the weekend.");
    break;
  default:
    console.log("It's the weekend.");
}