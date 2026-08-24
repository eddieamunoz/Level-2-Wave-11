// ============================================================
// 🐛  DATA TYPES — HOMEWORK  |  DEBUG TASKS
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This tries to build a greeting using the customer's first name.
// It logs "undefined Rivera" instead of "Alex Rivera". What's wrong?

const customerName = "alex rivera";
const cleanName    = customerName.trim().toLowerCase();

// Trying to capitalise the first letter:
const titled = cleanname[0].toUpperCase() + cleanname.slice(1);
console.log(`Hello, ${titled}!`);

// What's wrong ↓
// "cleanname" needs to be camelCase to "cleanName"

// Your fix ↓
const titled = cleanName[0].toUpperCase() + cleanName.slice(1);
console.log(`Hello, ${titled}!`);

// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This calculates the total for an order item.
// The result is "79.992" instead of 159.98. What's wrong?

const itemPrice = "79.99";  // from a form input
const itemQty   = 2;

const lineTotal = itemPrice * itemQty;  // works — * coerces
const receipt   = `Total: $${itemPrice + lineTotal}`; // bug here

console.log(receipt); // "Total: $79.99159.98" — wrong

// What's wrong ↓
// item price is being iclude in total, when the calculating for the total was already declared in line 35.
// item price is also recognized as a string, in order to change it to a number you musy parseFloat() itemPrice.

// Your fix ↓
const lineTotal = parseFloat(itemPrice) * itemQty;
const receipt   = `Total: $${lineTotal}`;



// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This builds a discount label and checks if a code is valid.
// There are TWO bugs — one produces a wrong boolean,
// one produces a wrong string.

const rawCode     = "  save10  ";
const validCode   = "SAVE10";

// Bug 1: comparing without cleaning
const isValid = rawCode === validCode;
console.log(`Code valid: ${isValid}`);  // false — wrong, should be true

// Bug 2: building a label with the raw code
const label = `Discount code: ${rawCode} — valid: ${isValid}`;
console.log(label); // shows messy whitespace in the label

// Bug 1 ↓
// rawCode is not cleaned up to validCode. Must make a variable that cleans rawCode and add it to isValid
// in place of rawCode.
// Bug 2 ↓
// replace raw code with cleaned code that trims out the spaces.

// Your fix for both ↓
const cleanedCode = rawCode.trim().toUpperCase()
const isValid = cleanedCode === validCode;
console.log(`Code valid: ${isValid}`);

const label = `Discount code: ${cleanedCode} — valid: ${isValid}`;
console.log(label);
