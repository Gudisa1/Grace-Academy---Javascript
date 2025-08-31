
# 🕹️ DOM Adventure Challenge: Interactive To-Do Quest

### 🎯 Goal

Students will **manipulate the DOM** step by step to create an interactive To-Do List app.
Instead of giving them the full solution, they’ll follow **guided challenges** that push them to apply what they’ve learned.

---

## 📝 Instructions

### Step 1: Setup the World

* Create an `index.html` file with:

  * A heading: “My To-Do Quest”
  * An input box
  * An “Add Task” button
  * An empty `<ul>`

👉 **Checkpoint**: If you type something and click the button, nothing should happen yet.

---

### Step 2: The First Spell (Event Listeners)

* In `script.js`, select the input and button using `document.querySelector`.
* Add an event listener to the button. When clicked:

  * Get the text from the input
  * Create a new `<li>` element with that text
  * Append it to the `<ul>`

👉 **Checkpoint**: You should now see a new list item appear every time you add a task.

---

### Step 3: The Power of Deletion (Dynamic Elements)

* Each `<li>` should also include a ❌ delete button.
* Clicking the ❌ should remove only that task from the list.

👉 **Checkpoint**: You should be able to add tasks and delete them individually.

---

### Step 4: Level Up (Toggle Complete)

* Add a feature so that clicking on a task’s text toggles a **“completed” class** (line-through style).

👉 **Checkpoint**: Clicking tasks should cross them off and clicking again should un-cross them.

---

### Step 5: Bonus Quest (Stretch Goals 🚀)

* Add a “Clear All” button that deletes the whole list.
* Allow pressing **Enter** in the input box to also add tasks.
* Save tasks in `localStorage` so they remain after refresh.

---
