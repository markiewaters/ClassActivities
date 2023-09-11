// bracket and dot notation
const key = "1";
const obj = {
  key: "the key is 'key'",
  1: "the key is 1"
};

// what will the following lines print?
console.log(obj[key]); // the key is 1
console.log(obj.key); // the key is 'key'
console.log(obj["key"]); // the key is 'key'

// Create an object with at least four properties, each with a different data type.
// Name one of the four properties "collection" and set its value to an Array or Object.
const myObject = {
  name: "jon",
  age: 37,
  hasDogs: false,
  collection: [1, 2, 3]
};

// Access a value in the "collection" property
const firstCollectionValue = myObject.collection[0];

// Practice with nested Arrays and Objects
const keys = ["key", "1", "method", "favorites", "list"];

// Add a method to an Object
obj.method = function() {
  return "the key is 'method' and it calls refers to a function";
};

// Fill in your favorite movie, number and color below
obj["favorites"] = {
  movie: "Starship Troopers",
  number: 0,
  color: "green"
};

// Add a list (a.k.a array) to an Object
obj.list = ["a", "b", 3, "d", ["e", 4, 5], { f: 6 }];

// Using the 'for...in' loop to iterate over 'obj' object ...
// how many lines will the following statement print? <--- 5 lines
// what do you expect to see on each line? <---
for (let key of keys) {
  console.log(`Key is: ${key} and value is: ${obj[key]}`);
}

// Use a template literal to print a sentence about your favorite things
console.log(
  `These are a few of my favorite things! Movie: ${obj.favorites.movie}, Color: ${obj.favorites.color}`
);

// // Access the values "b", 4, and 6 from obj.list
console.log(obj.list[1]);
console.log(obj.list[4][1]);
console.log(obj.list[5].f);

/* NOTE! You can also find the 4 and 6 by storing the nested array / object
    in a variable, and then get the desired data from there
 */
const nestedArray = obj.list[4]; // this is ["e", 4, 5]
console.log(nestedArray[1]);

const nestedObject = obj.list[5]; // this is { f: 6 }
console.log(nestedObject.f);
// My stuff
// // bracket and dot notation
// const key = "1";
// const obj = {
//   key: "the key is 'key'",
//   1: "the key is 1"
// };

// // // what will the following lines print?
// // obj[key];
// // // undefined
// // obj.key;
// // // string 1
// // obj["key"];
// // string 1

// // Create an object with at least four properties, each with a different data type.
// // Name one of the four properties "collection" and set its value to an Array or Object.
// const collection = {
//   stringData: "string",
//   booleanData: true,
//   numberData: 1,
//   collection: [1, 2, 3, 4]
// };
// // Access a value in the "collection" property
// const collectionValue = collection["collection"];
// console.log(collectionValue);
// // if (movie.collection) {
// //   movie.collection.forEach(member => {
// //     console.log(`Number: ${member}`);
// //   });
// // }
// // Practice with nested Arrays and Objects
// const keys = ["key", "1", "method", "favorites", "list"];

// // Add a method to an Object
// // obj.method = function() {
// //   return "the key is 'method' and it calls refers to a function";
// // };

// // // Fill in your favorite movie, number and color below
// obj["favorites"] = {
//   movie: "Taken",
//   number: 47,
//   color: "Purple"
// };

// // Add a list (a.k.a array) to an Object
// // obj.list = ["a", "b", 3, "d", ["e", 4, 5], { f: 6 }];
// obj["favorites"].list;
// console.log(obj);
// // // Using the 'for...in' loop to iterate over 'obj' object ...
// // // how many lines will the following statement print?
// // // what do you expect to see on each line?
// for (let key in keys) {
//   console.log(`Key is: ${key} and value is: ${obj[key]}`);
// }

// // // Use a template literal to print a sentence about your favorite things
// console.log(``);
// // // Access the values "b", 4, and 6 from obj.list
