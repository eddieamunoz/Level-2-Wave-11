// ============================================================
// 🐛  CONDITIONALS — HOMEWORK  |  DEBUG TASKS
// ============================================================
// Fix the bug in each snippet.
// Explain what was wrong as a comment. Then fix it.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This should log "Pass" when score is 70, but it always
// logs "Pass" even when score is 30. Why?

let score = 30;
const passing = 60;

// if (score = passing) {
//   console.log("Pass ✅");
// } else {
//   console.log("Fail ❌");
// }

// What's wrong ↓
// Not using strict equality === to compare variables.
// Your fix ↓
if (score === passing) {
  console.log("Pass ✅");
} else {
  console.log("Fail ❌");
};

// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// A theme park ride requires riders to be EITHER
// at least 140cm tall OR accompanied by an adult.
// But the code is turning away people it shouldn't.

const height        = 135;
const withAdult     = true;
const minHeight     = 140;

// if (height >= minHeight && withAdult) {
//   console.log("🎢 Enjoy the ride!");
// } else {
//   console.log("🚫 Sorry, you cannot ride.");
// }

// What's wrong ↓
// Using the wrong operator with && making both conditons having to be true.
// switch to the || or operator will correct the issue.
// Your fix ↓
if (height >= minHeight || withAdult) {
  console.log("🎢 Enjoy the ride!");
} else {
  console.log("🚫 Sorry, you cannot ride.");
};

// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This shipping calculator has two bugs.
// One causes the wrong tier to log.
// One is a style issue from a previous lesson.
// Find both.

// var orderTotal = 85;

// if (orderTotal >= 50) {
//   console.log("🚚 Standard shipping: $5");
// }
// if (orderTotal >= 100) {
//   console.log("🚀 Free express shipping!");
// }
// if (orderTotal < 50) {
//   console.log("📦 Economy shipping: $9.99");
// }

// Bug 1 ↓
// orderTotal needs to starts eith the highest value variable at the top
// in order for the loop to run
// Bug 2 ↓
// only using if and not else or else if staments, this is not efficient code.
// additionally, we can change the "var" to "let" in orderTotal.
// Your fix ↓
let orderTotal = 85;

if (orderTotal >= 100) {
  console.log("🚀 Free express shipping!");}
else if (orderTotal >= 50) {
  console.log("🚚 Standard shipping: $5");
} else {
  console.log("📦 Economy shipping: $9.99");
};
