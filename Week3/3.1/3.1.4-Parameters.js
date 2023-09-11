// Named Parameters
// write a function that takes two named parameters:
// // print each named parameter,
// // then return the parameters added together
function myFunction(John, Wick) {
  console.log(John);
  console.log(Wick);
  return John + Wick;
}
// // invoke the function and pass in two numbers
myFunction(1, 2);
// // invoke the function and pass in more than two numbers
myFunction(1, 2, 3);
// // invoke the function and pass in only one number
myFunction(1);
// change the function to set default values for the parameters
// function myFunction(param1 = 4, param2 = 5) {
//   console.log(param1);
//   console.log(param2);
//   return param1 + param2;
// }
// again, invoke the function and pass in only one number
myFunction(1);

// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator
function functionWithRestParam(param1 = 4, param2 = 5, ...myRestParam) {
  console.log(param1);
  console.log(param2);
  console.log(myRestParam);
  return param1 + param2;
}
// again, invoke the function and pass in more than two numbers
console.log("Below is a function with rest param");
console.log(functionWithRestParam(1, 2, 50, 59));
