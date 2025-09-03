// Element references
const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

// Modal elements
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalMessage = document.getElementById('modal-message');
const modalButton = document.getElementById('modal-button');

let tasks = [];

// Show custom modal
function showModal(title, message) {
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    modal.style.display = 'flex';
}

modalButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Save tasks to local storage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Render tasks from the array
const renderTasks = () => {
    todoList.innerHTML = '';
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

// Handle adding a new task
const addTask = () => {
    const text = todoInput.value.trim();
    if (text === '') {
        showModal("Warning", "Task cannot be empty.");
        return;
    }
    
    const newTask = {
        id: Date.now(),
        text: text,
        completed: false
    };
    tasks.push(newTask);
    saveTasks();
    renderTasks();
    todoInput.value = '';
};

// Handle toggling task completion and deletion
todoList.addEventListener('click', (e) => {
    const listItem = e.target.closest('.todo-item');
    if (!listItem) return;

    const taskId = parseInt(listItem.dataset.id);
    if (isNaN(taskId)) return; // Added check for valid ID

    const taskIndex = tasks.findIndex(t => t.id === taskId);

    if (e.target.classList.contains('delete-button')) {
        // Delete task
        tasks = tasks.filter(t => t.id !== taskId);
    } else if (e.target.classList.contains('todo-text') || e.target.classList.contains('checkbox')) {
        // Toggle task completion only when text or checkbox is clicked
        if (taskIndex !== -1) {
            tasks[taskIndex].completed = !tasks[taskIndex].completed;
        }
    }
    saveTasks();
    renderTasks();
});

// Event listeners for adding tasks
addButton.addEventListener('click', addTask);

todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

// Initial load
window.onload = () => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        try {
            // Make sure the data is a valid array
            tasks = JSON.parse(savedTasks);
            if (!Array.isArray(tasks)) {
                tasks = [];
            }
        } catch (e) {
            // Handle case where local storage data is corrupted
            console.error("Failed to parse tasks from local storage:", e);
            tasks = [];
        }
    }
    renderTasks();
};
