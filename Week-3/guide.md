
---

### 📂 Project Structure

```
dom-todo-quest/
│── index.html
│── style.css
│── script.js
```

---

### `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My To-Do Quest</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>📝 My To-Do Quest</h1>

  <div class="input-area">
    <input id="taskInput" type="text" placeholder="Enter a task...">
    <button id="addBtn">Add Task</button>
  </div>

  <ul id="taskList"></ul>

  <!-- Bonus: Clear All -->
  <button id="clearAllBtn">Clear All</button>

  <script src="script.js"></script>
</body>
</html>
```

---

### `style.css`

```css
body {
  font-family: Arial, sans-serif;
  background: #f5f5f5;
  text-align: center;
  margin: 20px;
}

h1 {
  color: #333;
}

.input-area {
  margin: 15px 0;
}

input {
  padding: 8px;
  width: 200px;
}

button {
  padding: 8px 12px;
  margin-left: 5px;
  cursor: pointer;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  background: white;
  margin: 5px auto;
  padding: 10px;
  width: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.completed {
  text-decoration: line-through;
  color: gray;
}
```

---

### `script.js`

```javascript
// ==========================
// 🕹️ DOM To-Do Quest
// ==========================

// Step 1: Select elements (input, add button, list, clear button)
// HINT: Use document.getElementById or querySelector



// Step 2: Add event listener to the "Add Task" button
// - Get the value from input
// - Create a <li> element
// - Append it to the <ul>
// HINT: use createElement + appendChild



// Step 3: Add a ❌ delete button inside each <li>
// - Clicking it should remove that task
// HINT: element.remove()



// Step 4: Toggle "completed" class when task text is clicked
// HINT: element.classList.toggle("completed")



// Step 5 (Bonus):
// - Add "Enter" key support
// - Add "Clear All" button
// - Save tasks to localStorage
```

---
---
---
// ==========================
// ✅ Teacher's Solution
// ==========================

// Step 1: Select elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const clearAllBtn = document.getElementById("clearAllBtn");

// Load saved tasks from localStorage (Bonus)
window.addEventListener("DOMContentLoaded", loadTasks);

// Step 2: Add event listener to the "Add Task" button
addBtn.addEventListener("click", addTask);

// Step 5 (Bonus): Add "Enter" key support
taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

// Step 5 (Bonus): Clear All button
clearAllBtn.addEventListener("click", function () {
  taskList.innerHTML = "";
  localStorage.removeItem("tasks");
});

// Function: Add Task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") return; // Prevent empty tasks

  // Create <li>
  const li = document.createElement("li");

  // Create span for task text
  const span = document.createElement("span");
  span.textContent = taskText;

  // Step 4: Toggle "completed" class
  span.addEventListener("click", function () {
    span.classList.toggle("completed");
    saveTasks();
  });

  // Step 3: Create delete button ❌
  const delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.addEventListener("click", function () {
    li.remove();
    saveTasks();
  });

  // Append text + delete button into li
  li.appendChild(span);
  li.appendChild(delBtn);

  // Append li into ul
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";

  // Save to localStorage
  saveTasks();
}

// Save tasks to localStorage
function saveTasks() {
  const tasks = [];
  document.querySelectorAll("#taskList li span").forEach((span) => {
    tasks.push({
      text: span.textContent,
      completed: span.classList.contains("completed"),
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks from localStorage
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = task.text;
    if (task.completed) {
      span.classList.add("completed");
    }
    span.addEventListener("click", function () {
      span.classList.toggle("completed");
      saveTasks();
    });

    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.addEventListener("click", function () {
      li.remove();
      saveTasks();
    });

    li.appendChild(span);
    li.appendChild(delBtn);
    taskList.appendChild(li);
  });
}
---
---
---