// create five variables and assign them values
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable
let myName = "Name";
let num1 = 1;
let boolean1 = true;
let jonDoe;
let blank = null;
// print the type of each variable in this order:
// string, number, boolean, undefined, null
console.log(myName);
console.log(num1);
console.log(boolean1);
console.log(jonDoe);
console.log(blank);
// create a variable that references a template literal
// inside the template literal, use two of the above variables
`"My ${num1},"plus one ${jonDoe} "`;
// reassign the value of the variable that references "null"
blank = 1;
// print the value and its type
console.log(typeof blank);
// print a variable that causes a ReferenceError
let refError = "";
console.log(johnnyBoi);
// alter the previous line to no longer cause a ReferenceError
console.log(refError);
