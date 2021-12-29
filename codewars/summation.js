// Summation
// Write a program that finds the summation of every number from 1 to num. 
// The number will always be a positive integer greater than 0.
// For example:
// summation(2) -> 3
// 1 + 2
// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

// Solution
//creat a function that takes 1 parameter called n
// creat an empty variable to hold the sum of each number
//creat a for loop to count from 1 to n
//concatinate over the loop using the assigned variable

function summation(n) {
     let totalSum = 0;
     for(i=1; i<=n; i++) {
          totalSum += i;
     }
     return console.log(totalSum);
}
summation(0)
