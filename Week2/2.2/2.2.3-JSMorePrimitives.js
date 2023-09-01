// Create a variable "timeOfDay" and assign it a string
let timeOfDay = "evening";
// Create a variable "greeting" that references a template literal
// Use "timeOfDay" in the template literal to create a message like "Good morning!" or "Good evening!"
let greeting = `Good ${timeOfDay}`;
// Print "greeting"
console.log(greeting);
// Create a new variable, but do not assign it a value
let jonDoe;

// Print the new variable and its type
// What type should we expect?
console.log(jonDoe, typeof jonDoe);

// Assign the variable a value that indicates the variable is purposely blank
// What value should we assign?
jonDoe = "";
// Print the variable and its type again
// What type should we expect?
// UNDEFINED
// Try to print a variable that does not exist
// What should we expect to print in the CLI?
console.log("Hey, here's a value!"); //error message follows
// Print "greeting" again
// Will this line run?
console.log(greeting);
