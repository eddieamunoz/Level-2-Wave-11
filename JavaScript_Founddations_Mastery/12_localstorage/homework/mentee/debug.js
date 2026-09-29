// ============================================================
// 🐛  localStorage — HOMEWORK  |  DEBUG TASKS
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This saves a task array to localStorage and reads it back.
// But tasks.length logs 1 instead of 3, and tasks[0] is a string.
// What's wrong?

const tasksToSave = [
  { id: 1, title: "Task A" },
  { id: 2, title: "Task B" },
  { id: 3, title: "Task C" }
];

localStorage.setItem("tasks", JSON.stringify(tasksToSave));

// const tasks = localStorage.getItem("tasks");
// console.log(tasks.length);   // logs a large number — wrong
// console.log(tasks[0]);       // logs "{" — wrong, expected an object

// What's wrong ↓
// Need to parse back tasks.
// Your fix ↓
const tasks = JSON.parse(localStorage.getItem("tasks"));
console.log(tasks.length);
console.log(tasks[0]);

// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This function should save the task board state and show
// a save indicator. The save works but the indicator never appears.
// What's wrong?

function saveBoardState(taskList) {
  localStorage.setItem("board", JSON.stringify(taskList));

  const indicator = document.getElementById("save-indicator");
  indicator.classList.add("visible");

  setTimeout(function() {
    indicator.classList.remove("visible");
  }, 1500);
}

// The indicator element has this CSS:
// .save-indicator { opacity: 0; transition: opacity 0.3s; }
// .save-indicator.visible { opacity: 1; }
//
// saveBoardState() is being called from inside another function
// that also does heavy DOM work immediately after.
// Think about what could prevent the class from taking visual effect.

// What's wrong ↓
// The setTimout is removing the "visible" class due to the DOM work taking to long before the timer.
// Your fix — conceptual explanation is enough here ↓
// reorder the function enitrly so that the heavy DOM work is first, then set the timer.

// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This loads tasks and renders them.
// It crashes on first load AND has a second bug that causes
// duplicate tasks on every subsequent load.
// Find both bugs.

let taskList = [];

function loadAndRender() {
  const raw = localStorage.getItem("boardTasks");
  if (raw === null) {
    taskList = [];
    return;
  }
  taskList  = JSON.parse(raw);
  document.getElementById("list-todo").innerHTML = "";
  taskList.forEach(function(task) {
    const li = document.createElement("li");
    li.textContent = task.title;
    document.getElementById("list-todo").appendChild(li);
  });
}

// Saving some tasks so the second bug can be demonstrated:
localStorage.setItem("boardTasks", JSON.stringify([
  { id: 1, title: "Task A", status: "todo" },
  { id: 2, title: "Task B", status: "todo" }
]));

loadAndRender();
loadAndRender(); // called again — what happens?

// Bug 1 (crash on first load) ↓
// Function is missing a null check when parsing.
// Bug 2 (duplicates) ↓
// Generating new li, but not clearing the previous ones, thus resulting in duplicates.
// Your fix ↓
// lines 75-80