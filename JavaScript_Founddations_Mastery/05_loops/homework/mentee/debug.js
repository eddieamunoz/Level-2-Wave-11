// ============================================================
// 🐛  LOOPS — HOMEWORK  |  DEBUG TASKS
// ============================================================
// Fix the bug in each snippet.
// Explain what was wrong as a comment. Then fix it.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This loop should log numbers 1 through 10.
// It only logs 1 through 9. What's wrong?

// for (let i = 1; i < 10; i++) {
//   console.log(i);
// }

// What's wrong ↓
// When using the less than symbol, it will inculde all numbers less than 10;
// Your fix ↓
for (let i = 1; i <= 10; i++) {
  console.log(i);
};

// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This loop should calculate the sum of 1 through 5 (answer: 15).
// It always logs 0. What's wrong?

// for (let i = 1; i <= 5; i++) {
//   let total = 0;
//   total += i;
// }
// console.log("Sum: " + total);

// What's wrong ↓
// total is being declared inside the loop automatically setting it at 0 so it
// so it needs to be outside the loop before it.
// Your fix ↓
let total = 0;
for (let i = 1; i <= 5; i++) {
  total += i;
}
console.log("Sum: " + total);

// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This loop should log all ODD numbers from 1 to 10,
// then log "Done!" at the end.
// Instead it logs nothing and skips straight to "Done!".
// There are TWO bugs. Find both.

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   } else {
//     continue;
//   }
// }
// console.log("Done!");

// Bug 1 ↓
// the loop is currently putting out even numbers on line 57 since they're divisible by 2
// Bug 2 ↓
// the else and continue do not apply in this loop and can be left alone or deleted
// Your fix ↓
for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
};
console.log("Done!");