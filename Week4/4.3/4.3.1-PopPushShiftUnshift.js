const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable

const lastOne = nums.pop();
const lastSecondOne = nums.pop();
console.log(`pop1: ${lastOne}, pop2: ${lastSecondOne}`);

// remove each of the first two items with shift(), saving each item to a variable
const nextInLine = nums.shift();
const secondInLine = nums.shift();
console.log(`shift1: ${nextInLine}, shift2: ${secondInLine}
`);

// // use push and unshift to add the variables back to the array in numerical order, 0-6
nums.push(secondInLine);
nums.push(nextInLine);
nums.unshift(lastSecondOne);
nums.unshift(lastOne);
console.log(nums);
