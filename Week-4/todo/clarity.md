### **Step 1: Grab DOM elements**

```js
// 1️⃣ Element references for input, button, and task list
const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

// 2️⃣ Modal elements for custom alerts
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalMessage = document.getElementById('modal-message');
const modalButton = document.getElementById('modal-button');
```

> ✅ Always start by referencing the elements you’ll interact with.

---

### **Step 2: Define task storage**

```js
// 3️⃣ Tasks array to hold all tasks in memory
let tasks = [];
```

> This array will **store all tasks** and later sync with `localStorage`.

---

### **Step 3: Show a modal (custom alert)**

```js
// 4️⃣ Function to show modal with a title and message
function showModal(title, message) {
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    modal.style.display = 'flex';
}

// Close modal when OK button is clicked
modalButton.addEventListener('click', () => {
    modal.style.display = 'none';
});
```

> Students learn: creating **custom alerts** is better than `alert()` for nicer UI.

---

### **Step 4: Save tasks to localStorage**

```js
// 5️⃣ Save tasks array as JSON in localStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
```

> Shows **persistence**: tasks remain after page reload.

---

### **Step 5: Render tasks on the UI**

```js
// 6️⃣ Render tasks from the array into the <ul>
const renderTasks = () => {
    // Clear current list
    todoList.innerHTML = '';

    // Create each task <li> dynamically
    tasks.forEach((task) => {
        const li = document.createElement('li');
        li.className = `todo-item ${task.completed ? 'completed' : ''}`;
        li.dataset.id = task.id;

        li.innerHTML = `
            <span class="checkbox"></span>
            <span class="todo-text">${task.text}</span>
            <button class="delete-button">&#128465;</button>
        `;
        todoList.appendChild(li);
    });
};
```

> Explains: **dynamic rendering**. Every time `renderTasks()` is called, the UI reflects the current state.

---

### **Step 6: Add a new task**

```js
// 7️⃣ Function to add a task
const addTask = () => {
    const text = todoInput.value.trim();

    // Prevent empty tasks
    if (text === '') {
        showModal("Warning", "Task cannot be empty.");
        return; // Stops function
    }

    // Create task object
    const newTask = {
        id: Date.now(),   // unique ID
        text: text,
        completed: false
    };

    // Add to tasks array
    tasks.push(newTask);

    // Save and re-render
    saveTasks();
    renderTasks();

    // Clear input
    todoInput.value = '';
};
```

> Key teaching points: **trim input**, **validate**, **update array → save → render**.

---

### **Step 7: Toggle completion or delete tasks**

```js
// 8️⃣ Event delegation: handle clicks on task items
todoList.addEventListener('click', (e) => {
    const listItem = e.target.closest('.todo-item');
    if (!listItem) return; // clicked outside tasks

    const taskId = parseInt(listItem.dataset.id);
    if (isNaN(taskId)) return; // safety check

    const taskIndex = tasks.findIndex(t => t.id === taskId);

    if (e.target.classList.contains('delete-button')) {
        // Delete task
        tasks = tasks.filter(t => t.id !== taskId);
    } else if (e.target.classList.contains('todo-text') || e.target.classList.contains('checkbox')) {
        // Toggle completion
        if (taskIndex !== -1) {
            tasks[taskIndex].completed = !tasks[taskIndex].completed;
        }
    }

    // Save changes and re-render
    saveTasks();
    renderTasks();
});
```

> Students learn **event delegation**, **toggle boolean**, **filter for delete**.

---

### **Step 8: Listen for input events**

```js
// 9️⃣ Add task when button clicked
addButton.addEventListener('click', addTask);

// 10️⃣ Add task when Enter key is pressed
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
```

> Shows **multiple ways to trigger the same function**.

---

### **Step 9: Load tasks from localStorage on page load**

```js
// 11️⃣ Initial load: retrieve tasks from localStorage
window.onload = () => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        try {
            tasks = JSON.parse(savedTasks);
            if (!Array.isArray(tasks)) tasks = [];
        } catch (e) {
            console.error("Failed to parse tasks:", e);
            tasks = [];
        }
    }
    renderTasks(); // show tasks on UI
};
```

> Teaches **persistence and error handling**.

---



---

