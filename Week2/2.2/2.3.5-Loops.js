// Follow the steps below to create a **while** loop that TOTALS the numbers from 1 to 100

// 1) create a variable to represent the current number
let i = 0;
// 2) create a variable to represent the current total
let totalSum = 0;
// 3) write a while loop that sums the numbers from 1 to 100
// totalSum += i

while (i <= 100) {
  totalSum = i + totalSum;
  console.log(totalSum);
  i++;
}
// Now using the same variables you created in steps 1 and 2, create a **for** loops that TOTALS the numbers from 1 to 100

// 1) write a for loop that sums the numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
  totalSum += i;
}
console.log(i);
