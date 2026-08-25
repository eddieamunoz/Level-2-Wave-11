// ============================================================
// 🐛  FUNCTIONS — HOMEWORK  |  DEBUG TASKS
// ============================================================

// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This arrow function should return the full name
// but always returns undefined. What's wrong?

// const getFullName = (first, last) => {
//   first + " " + last;
// };

// console.log(getFullName("Alex", "Rivera"));

// What's wrong ↓
// Missing a Return and taking out the curly braces
// Your fix — write TWO versions:
//   a) Fix by adding return inside the braces
//   b) Fix by removing the braces (one-liner implicit return)


// const getFullName = (first, last) => {
//   return first + " " + last;
// };

// console.log(getFullName("Alex", "Rivera"));

const getFullName = (first, last) => 
  first + " " + last;

console.log(getFullName("Alex", "Rivera"));
// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This should return "Admin", "Moderator", or "Member"
// depending on role. It works for "admin" but returns
// undefined for everything else. What's wrong?

// function getRoleLabel(role) {
//   if (role === "admin") {
//     return "Admin";
//   } else if (role === "mod") {
//     return "Moderator";
//   } else {
//     return "Member";
//   }
// }

// console.log(getRoleLabel("admin")); // "Admin" ✅
// console.log(getRoleLabel("mod")); // undefined ❌
// console.log(getRoleLabel("member")); // undefined ❌

// What's wrong ↓
// the fucntion stops at once it finds admin becuase the return has been completed.
// Your fix ↓
// function getRoleLabel(role) {
//   if (role === "admin") {
//     return "Admin";
//   } else if (role === "mod") {
//     return "Moderator";
//   } else {
//     return "Member";
//   }
// }
// Bonus: rewrite the whole function as an arrow function
// using nested ternaries (just to see what it looks like —
// then write a comment about whether you'd actually use it).
// This looks a little cleaner that the original so personally i would use it.
// If there were more if statments i would refrain.
const getRoleLabel = (role) => role === "admin"? "Admin": role === "mod"? "Moderator" : "Member";
// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This discount calculator has TWO bugs.
// Both cause wrong math — find them both.

// const applyDiscount = (price, discountPercent = 10) => {
//   const discountAmount = price * discountPercent;
//   const finalPrice = price + discountAmount;
//   return finalPrice;
// };

// console.log(applyDiscount(100, 20)); // expected: 80
// console.log(applyDiscount(50)); // expected: 45

// Bug 1 (math) ↓
// discountPercent should be 0.10 in order to give 10%
// Bug 2 (math) ↓
// finalPrice should subtract price to discountAmount, not Add;
// Your fix ↓
const applyDiscount = (price, discountPercent = 10) => {
  const discountAmount = price * (discountPercent/100);
  const finalPrice = price - discountAmount;
  return finalPrice;
};
console.log(applyDiscount(100, 20)); // expected: 80
console.log(applyDiscount(50)); // expected: 45