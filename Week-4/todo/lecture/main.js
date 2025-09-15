const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

const modal=document.getElementById('modal');
const modalTitle=document.getElementById('modal-title');
const modalMessage=document.getElementById('modal-message');
const modalButton=document.getElementById('modal-button');

let tasks=[]



function showModal(title, message) {
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    modal.style.display = 'flex';
}

modalButton.addEventListener('click', () => {
    modal.style.display = 'none';
});


function renderTasks() {


    todoList.innerHTML='';
    tasks.forEach((task, index) => {
        const li=document.createElement('li');
        li.className='todo-item'
        // li.textContent=task.text;
        todoList.appendChild(li);

        const checkbox=document.createElement('input');
        checkbox.type='checkbox';
        checkbox.checked=task.completed;
        checkbox.addEventListener('change', () => toggleTaskCompletion(task.id));
        li.prepend(checkbox);

        const span=document.createElement('span');
        span.textContent=task.text;
        li.appendChild(span);
        
        if (task.completed) {
           span.style.textDecoration='line-through';
        }
        const deleteBtn=document.createElement('button');
        deleteBtn.textContent='Delete';
        deleteBtn.className='delete-button'
                deleteBtn.addEventListener('click', () => deleteTask(task.id));

        li.appendChild(deleteBtn);

    });

    }
function addTask() {
    const text=todoInput.value.trim();

    if (text==='') {
        showModal('Input Error', 'Task description cannot be empty.');
        return;
    }

    const newTask={
        id:Date.now(),
        text,
        completed:false
    }

    tasks.push(newTask);

    renderTasks();
    todoInput.value='';
}


function deleteTask(id) {
    tasks=tasks.filter(task=>task.id!==id);
    renderTasks();
}

function toggleTaskCompletion(id) {
    tasks=tasks.map(task=>{
        if (task.id===id) {
            return {...task, completed:!task.completed};
        }
        return task;
    });
    renderTasks();
}


addButton.addEventListener('click', addTask);

todoInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }});