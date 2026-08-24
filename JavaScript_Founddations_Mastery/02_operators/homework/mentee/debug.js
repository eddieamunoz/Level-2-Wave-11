// ============================================================
// 🐛  OPERATORS — HOMEWORK  |  DEBUG TASKS
// ============================================================
// Fix the bug in each snippet.
// Explain what was wrong as a comment. Then fix it.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This should calculate a 15% tip but the result is wrong.

const billAmount = 80;
const tipPercent = 15;
const tipAmount  = billAmount % (tipPercent/100);
console.log("Tip: $" + tipAmount);

// What's wrong ↓
// the remainder operator does not give you the percentage for the tip.
// Your fix ↓
const tipAmount  = billAmount * (tipPercent/100);


// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// The developer wants to track a countdown timer.
// Something is wrong with how the variable is declared.

const countdown = 10;
countdown -= 1;
countdown -= 1;
countdown -= 1;
console.log("Countdown: " + countdown);

// What's wrong ↓
// the countdown cant be declared with const becuase it will become immutable

// Your fix ↓
let countdown = 10;


// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This code is supposed to check if two usernames match.
// It always logs true even when they shouldn't match.
// There are also two style issues (not errors, but bad practice).
// Find the logic bug AND the two style issues.

var username1 = "gamer99";
var username2 = "Gamer99";
console.log("Names match: " + (username1 == username2));

// Logic bug ↓
// the second issue is that we need to use strict equality "===" in the console.log().

// Style issue 1 ↓
// instead of var we need to use const so the value doesnt change.

// Style issue 2 ↓

// Your fix ↓
const username1 = "gamer99";
const username2 = "Gamer99";
console.log("Names match: " + (username1.toLowerCase() === username2.toLowerCase()));