// ============================================================
// 🐛  DOM MANIPULATION — HOMEWORK  |  DEBUG TASKS
// ============================================================
// To test: swap <script src="app.js"> with <script src="debug.js">
// in index.html.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This should set the board title but logs a TypeError. Why?

// function renderBoardTitle() {
//   const titleEl = document.querySelector(".board-title");
//   titleEl.textContent = "My Task Board";
// }



// What's wrong ↓
// there is a "." on the querySelector but biard title is an id.
// Your fix ↓
function renderBoardTitle() {
  const titleEl = document.getElementById("board-title")
  titleEl.textContent = "My Task Board";
}
renderBoardTitle();
// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This loop should create a card for every task and append
// it to the list. But only the last card appears. Why?

// function renderTasks() {
//   const list = document.getElementById("list-todo");
//   const tasks = ["Design page", "Write tests", "Fix bug"];

//   tasks.forEach(function(taskTitle) {
//     const li = document.createElement("li");
//     li.textContent = taskTitle;
//     list.innerHTML = li.outerHTML;
//   });
// }

// renderTasks();

// What's wrong ↓
// the innerHTML is being replaced by the outHTML on every loops,
// instead it should be appended so each loop add it to the bottom.
// Your fix ↓
function renderTasks() {
  const list = document.getElementById("list-todo");
  const tasks = ["Design page", "Write tests", "Fix bug"];

  tasks.forEach(function(taskTitle) {
    const li = document.createElement("li");
    li.textContent = taskTitle;
    list.appendChild(li);
  });
}
renderTasks();

// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This function should add a "highlighted" class to all
// high-priority cards, but nothing changes on the page.
// There are TWO bugs.

function highlightTasks() {
  const highCards = document.querySelectorAll(".priority-high");

  for (let i = 0; i <= highCards.length; i++) {
    highCards[i].classList.add("highlighted");
  }
}

highlightTasks();

// Bug 1 ↓
// on the loop <= should be < because the loop will pull undefined, because it ventures too far.
// Bug 2 ↓
// Throwing typeerror because nothing is being highlighted.
// Your fix ↓
function highlightTasks() {
  const highCards = document.querySelectorAll(".priority-high");

  for (let i = 0; i < highCards.length; i++) {
    highCards[i].classList.add("highlighted");
  }
}

highlightTasks();
