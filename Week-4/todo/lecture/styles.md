# 📘 To-Do App CSS Stylesheet Explanation

This document explains the CSS used in our **To-Do App**. The file includes variables, layout styles, and interactive effects to make the app modern, clean, and user-friendly.

---

## 🎨 CSS Variables (`:root`)

At the top, we define **CSS custom properties (variables)** for colors, shadows, and other reusable values. This makes the design **consistent** and **easy to update**.

```css
:root {
  --primary-color: #3338A0;          /* Main theme color */
  --primary-color-light: #5259cf;    /* Lighter version for hover effects */
  --background-color: #f0f2f5;       /* Soft background for input areas */
  --card-background: rgba(255, 255, 255, 0.9); /* Glass-like white cards */
  --text-color: #2c3e50;             /* Default text color */
  --completed-text-color: #95a5a6;   /* Gray for completed tasks */
  --completed-bg: #ecf0f1;           /* Light background for completed tasks */
  --border-color: #e0e6ed;           /* Soft borders */
  --box-shadow: 0 15px 35px rgba(0,0,0,0.08), 0 5px 15px rgba(0,0,0,0.05);
  --button-shadow: 0 8px 20px rgba(51,56,160,0.2); /* Glow for buttons */
}
```

---

## 🌍 Global Reset

Ensures consistent spacing across all browsers.

```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```

---

## 🖼 Body Styles

The background uses a **gradient** and centers the To-Do app in the middle of the screen.

```css
body {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg, #e4e7ee 0%, #dce0e8 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  color: var(--text-color);
  padding: 2rem;
  transition: background 0.5s ease;
}
```

---

## 📦 Main Container (`.todo-container`)

This is the "card" that holds everything. It has a **glass-like effect** using `backdrop-filter: blur`.

```css
.todo-container {
  max-width: 500px;
  background: var(--card-background);
  border-radius: 25px;
  box-shadow: var(--box-shadow);
  padding: 2.5rem 2rem;
  backdrop-filter: blur(10px);
}
```

---

## 🏷 Header (`.todo-header`)

```css
.todo-header {
  font-size: 2.2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
  color: var(--primary-color);
}
```

👉 Large, bold, centered title.

---

## ✍️ Input Section (`.input-group`, `.todo-input`, `.add-button`)

* **Input box** → pill-shaped, minimal style.
* **Button** → blue, rounded, with hover animation.

```css
.input-group { /* Rounded input container */
  display: flex;
  background: var(--background-color);
  border-radius: 50px;
  padding: 0.5rem;
}

.todo-input { /* Typing box */
  flex-grow: 1;
  border: none;
  background: transparent;
  padding: 0.75rem 1rem;
}

.add-button { /* Add task button */
  background-color: var(--primary-color);
  color: white;
  border-radius: 50px;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  transition: 0.3s ease;
}
```

---

## ✅ Task List (`.todo-list`, `.todo-item`)

Each task is a rounded box with hover effects.

```css
.todo-item {
  display: flex;
  justify-content: space-between;
  background-color: var(--card-background);
  border-radius: 15px;
  padding: 1rem 1.25rem;
  margin-bottom: 0.75rem;
  cursor: pointer;
  transition: 0.2s;
}
```

### Completed Tasks

When a task is marked as done:

* Background becomes lighter.
* Text is gray and crossed out.

```css
.todo-item.completed {
  background-color: var(--completed-bg);
  opacity: 0.8;
}
.todo-item.completed .todo-text {
  text-decoration: line-through;
  color: var(--completed-text-color);
}
```

---

## ☑️ Custom Checkbox (`.checkbox`)

Circle-shaped, turns blue with a ✓ when clicked.

```css
.checkbox {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: 2px solid var(--primary-color);
}
.todo-item.completed .checkbox {
  background-color: var(--primary-color);
}
.todo-item.completed .checkbox::after {
  content: '✓';
  color: #fff;
}
```

---

## ❌ Delete Button (`.delete-button`)

Small red "X" to remove tasks.

```css
.delete-button {
  font-size: 1.5rem;
  color: #ff7675;
  background: none;
  border: none;
  cursor: pointer;
  transition: 0.2s;
}
.delete-button:hover {
  color: #d63031;
  transform: scale(1.1);
}
```

---

## 🎬 Animations

* **Bounce** for checkboxes.
* **Fade** for modal.

```css
@keyframes bounceIn {
  0% { transform: scale(0.5); opacity: 0; }
  50% { transform: scale(1.2); opacity: 1; }
  100% { transform: scale(1); }
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
```

---

## ⚠️ Modal (Custom Alerts)

Used for messages like "Task cannot be empty".

```css
.modal {
  position: fixed;
  z-index: 1000;
  background-color: rgba(0,0,0,0.5);
  display: none; /* Hidden by default */
  align-items: center;
  justify-content: center;
}

.modal-content {
  background-color: var(--card-background);
  padding: 2rem;
  border-radius: 15px;
  animation: fadeIn 0.3s ease;
}
```

---

# 📝 Summary

* **Variables** keep design consistent.
* **Flexbox** centers and arranges items.
* **Animations & hover effects** make the app interactive.
* **Glass-like UI** gives it a modern look.


---
