# Building a Simple To-Do List with JavaScript

Creating a **To-Do List** is a classic beginner project that teaches essential web development concepts. It combines **DOM manipulation**, **event handling**, and **data management**, making it an excellent exercise for anyone learning JavaScript.

---

## 1. Introduction

### What Is a To-Do List?

A **To-Do List** is a simple application that allows users to:

* Add tasks they want to complete.
* Mark tasks as completed.
* Delete tasks that are no longer needed.

**Practical use cases:**

* Personal task management.
* Reminders for school or work projects.
* Basic productivity tracking.

### Why Build a To-Do List as a Beginner Project?

* Teaches **DOM manipulation**: dynamically adding and removing elements.
* Introduces **event handling**: responding to user actions like clicks and input.
* Demonstrates **data storage techniques**: optionally using `localStorage`.
* Encourages modular, clean coding practices.

Think of it as a **mini productivity tool** you can actually use while learning.

---

## 2. HTML Structure

A simple, accessible HTML structure is essential.

```html
<div class="todo-container">
  <h1>My To-Do List</h1>
  <input type="text" id="taskInput" placeholder="Enter a new task">
  <button id="addTaskBtn">Add Task</button>
  <ul id="taskList"></ul>
</div>
```

**Explanation:**

* **`<input>`**: Allows users to type a new task. Use a placeholder for guidance.
* **`<button>`**: Adds the task when clicked.
* **`<ul>`**: Container for dynamically generated tasks.
* Proper IDs make selecting elements in JavaScript easy.

---

## 3. Styling the To-Do List

Basic CSS makes the list visually appealing and readable.

```css
.todo-container {
  max-width: 400px;
  margin: 50px auto;
  font-family: Arial, sans-serif;
}

input {
  width: 70%;
  padding: 10px;
  margin-right: 10px;
  box-sizing: border-box;
}

button {
  padding: 10px 15px;
  background-color: #28a745;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #218838;
}

ul {
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
}

li {
  padding: 10px;
  margin-bottom: 5px;
  background-color: #f1f1f1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

li.completed {
  text-decoration: line-through;
  color: gray;
}

li button {
  background-color: red;
  border: none;
  color: white;
  padding: 5px 8px;
  cursor: pointer;
}

li button:hover {
  background-color: darkred;
}
```

**Highlights:**

* Completed tasks have **strikethrough**.
* Buttons have **hover effects** for better user feedback.
* Flexbox aligns task text and delete button neatly.

---

## 4. JavaScript Implementation

Now let’s make the list interactive.

### JavaScript Code

```javascript
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Add a new task
addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  // Toggle completed state on click
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Add delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent li click event
    taskList.removeChild(li);
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = ""; // Clear input
});
```

### Step-by-Step Explanation

1. **Select elements** using `getElementById`.
2. **Listen for click events** on the add button.
3. **Trim input** to remove unnecessary spaces and check for empty input.
4. **Create a new `<li>` element** and set its text.
5. **Add click listener to toggle completed** state using `classList.toggle`.
6. **Create a delete button**, stop event propagation so clicking delete doesn’t toggle completion.
7. **Append the delete button** to the task and then append the task to the list.
8. **Clear the input** after adding the task.

---

## 5. Enhancements and Best Practices

* **Prevent empty tasks** with input validation.
* **Use `localStorage`** to persist tasks:

```javascript
// Save tasks to localStorage
function saveTasks() {
  const tasks = [];
  taskList.querySelectorAll("li").forEach(li => {
    tasks.push({
      text: li.firstChild.textContent,
      completed: li.classList.contains("completed")
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks on page load
window.addEventListener("load", () => {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task.text;
    if (task.completed) li.classList.add("completed");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", e => {
      e.stopPropagation();
      taskList.removeChild(li);
      saveTasks();
    });

    li.addEventListener("click", () => {
      li.classList.toggle("completed");
      saveTasks();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
});
```

* Keep code modular by creating **reusable functions** for adding tasks.
* Add **accessibility features**, like ARIA labels if needed.

---

## 6. Interactive Example

### Full HTML

```html
<div class="todo-container">
  <h1>My To-Do List</h1>
  <input type="text" id="taskInput" placeholder="Enter a new task">
  <button id="addTaskBtn">Add Task</button>
  <ul id="taskList"></ul>
</div>
```

### Full CSS

*(Use CSS from section 3)*

### Full JavaScript

*(Combine JavaScript from section 4 and optional localStorage enhancements in section 5)*

**How It Works:**

* Users type a task and click **Add Task**.
* Each task is appended to the list with a **delete button**.
* Clicking a task toggles the **completed state**.
* Clicking delete removes the task.
* Tasks can optionally **persist across reloads** using `localStorage`.

---

## 7. Summary

By building this simple To-Do List, you’ve learned:

* **DOM Manipulation**: Adding, updating, and removing elements.
* **Event Handling**: Listening to user actions and updating the interface.
* **Dynamic Styling**: Using `classList.toggle` for task completion.
* **Optional Persistence**: Storing tasks in `localStorage`.

**Next Steps for Students:**

* Add **task priorities or due dates**.
* Sort tasks by completion or deadline.
* Categorize tasks by project or type.

This project is a practical example of how **small JavaScript projects** teach essential skills while producing something functional and enjoyable.

---

