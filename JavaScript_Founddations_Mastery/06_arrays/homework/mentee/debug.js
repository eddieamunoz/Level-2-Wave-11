// ============================================================
// 🐛  ARRAYS — HOMEWORK  |  DEBUG TASKS
// ============================================================
// Fix the bug in each snippet.
// Explain what was wrong as a comment. Then fix it.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This should log the middle element ("C") of the array.
// Instead it logs undefined. What's wrong?

// const letters = ["A", "B", "C", "D", "E"];
// // const middleIndex = letters.length / 2;
// console.log(letters[middleIndex]);

// What's wrong ↓
// the length of the array is 5, dividing the array by 2 will yield 2.5 which is undefined in an array.
// Your fix ↓
// add Math.floor
const letters = ["A", "B", "C", "D", "E"];
const middleIndex = Math.floor(letters.length / 2);
console.log(letters[middleIndex]);

// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This loop should build a total of all prices.
// It logs NaN instead of a number. What's wrong?

// const prices = [10, 20, 30, 40];
// let total = 0;

// for (let i = 0; i <= prices.length; i++) {
//   total += prices[i];
// }

// console.log("Total: $" + total);

// What's wrong ↓
// Our for loop is using the wrong operator, its going more than the 4 numbers held in the array,
// Which is why it results in Nan, taking ou the "=" and leaving the "<" should work.
// Your fix ↓
const prices = [10, 20, 30, 40];
let total = 0;

for (let i = 0; i < prices.length; i++) {
  total += prices[i];
}

console.log("Total: $" + total);

// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This code is supposed to find the highest score in the array
// and log the winner's name. It always logs the wrong winner.
// There are TWO bugs. Find both.

// const names  = ["Alice", "Bob", "Carol", "Dave"];
// const scores = [82, 91, 78, 95];

// let topIndex  = 1;
// let topScore  = 0;

// for (let i = 0; i < scores.length; i++) {
//   if (scores[i] > topScore) {
//     topScore = scores[i];
//     topIndex = i;
//   }
// }

// console.log("Winner: " + names[topIndex] + " with " + topScore);

// Bug 1 ↓
// top index needs to be set to 0 since its skipping the first result/
// Bug 2 ↓
// topScore should be the first score on the array in order it to value something,
// otherwise the whichever score is always going to better than 0.
// Your fix ↓
const names  = ["Alice", "Bob", "Carol", "Dave"];
const scores = [82, 91, 78, 95];

let topIndex  = 0;
let topScore  = scores[0];

for (let i = 0; i < scores.length; i++) {
  if (scores[i] > topScore) {
    topScore = scores[i];
    topIndex = i;
  }
}

console.log("Winner: " + names[topIndex] + " with " + topScore);