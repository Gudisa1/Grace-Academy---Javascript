
# 1. **Grab Elements**

We need to connect JavaScript to the HTML elements (buttons, text, etc.).

```js
// Timer display and buttons
const timerDisplay = document.getElementById('timer');
const startPauseBtn = document.getElementById('start-pause-btn');
const resetBtn = document.getElementById('reset-btn');
const statusMessage = document.getElementById('status');

// Modal (popup) elements
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalMessage = document.getElementById('modal-message');
const modalButton = document.getElementById('modal-button');
```

---

# 2. **Define Timer State**

Here we prepare variables that will control how the timer behaves.

```js
let isRunning = false;       // Is the timer currently counting?
let isWorkSession = true;    // Are we in a work session (true) or break session (false)?
let timerInterval;           // Stores the setInterval ID so we can stop it later

// Durations in seconds
const workDuration = 25 * 60;   // 25 minutes
const breakDuration = 5 * 60;   // 5 minutes

let timeLeft = workDuration;    // How much time remains in the current session
```

---

# 3. **Modal Logic**

Popup messages when a session ends.

```js
function showModal(title, message) {
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    modal.style.display = 'flex';   // Show the modal
}

// Close modal when button is clicked
modalButton.addEventListener('click', () => {
    modal.style.display = 'none';
});
```

---

# 4. **Update Timer Display**

This converts `timeLeft` into `MM:SS` and updates the UI.

```js
function updateDisplay() {
    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
    const seconds = String(timeLeft % 60).padStart(2, '0');
    timerDisplay.textContent = `${minutes}:${seconds}`;
}
```

---

# 5. **Start / Pause Button Logic**

Here’s the heart of the timer: toggling between running and paused.

```js
function startPauseTimer() {
    if (isRunning) {
        // If running → pause it
        clearInterval(timerInterval);
        startPauseBtn.textContent = 'Start';
    } else {
        // If paused → start it
        startPauseBtn.textContent = 'Pause';
        timerInterval = setInterval(() => {
            timeLeft--;          // Decrease time by 1 second
            updateDisplay();     // Refresh the shown time

            if (timeLeft <= 0) {
                handleSessionEnd();   // If time is up, switch sessions
            }
        }, 1000);   // Run every 1000 ms (1 second)
    }

    // Flip the running state
    isRunning = !isRunning;
}
```

---

# 6. **Handle Session End (Switch Work ↔ Break)**

When time runs out, we stop and prepare the next session.

```js
function handleSessionEnd() {
    clearInterval(timerInterval);    // Stop the countdown
    isWorkSession = !isWorkSession;  // Toggle work ↔ break

    if (isWorkSession) {
        // New Work Session
        timeLeft = workDuration;
        statusMessage.textContent = 'Work Session';
        showModal("Time's Up!", "Your break is over. Time to get back to work!");
    } else {
        // New Break Session
        timeLeft = breakDuration;
        statusMessage.textContent = 'Break Session';
        showModal("Time's Up!", "Take a short break. You've earned it!");
    }

    updateDisplay();                  // Reset display
    isRunning = false;                // Not auto-running
    startPauseBtn.textContent = 'Start';
}
```

---

# 7. **Reset Button Logic**

This restores everything back to the starting state.

```js
function resetTimer() {
    clearInterval(timerInterval);     // Stop any running countdown
    isRunning = false;
    isWorkSession = true;             // Always reset to Work
    timeLeft = workDuration;          // Back to 25:00
    startPauseBtn.textContent = 'Start';
    statusMessage.textContent = 'Work Session';
    updateDisplay();
}
```

---

# 8. **Event Listeners**

Connect the buttons to the functions.

```js
startPauseBtn.addEventListener('click', startPauseTimer);
resetBtn.addEventListener('click', resetTimer);
```

---

# 9. **Initial Setup**

When the page loads, show the initial timer.

```js
window.onload = updateDisplay;
```

---

# ✅ Final JS (all steps combined)

```js
// 1. Element references
const timerDisplay = document.getElementById('timer');
const startPauseBtn = document.getElementById('start-pause-btn');
const resetBtn = document.getElementById('reset-btn');
const statusMessage = document.getElementById('status');

const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalMessage = document.getElementById('modal-message');
const modalButton = document.getElementById('modal-button');

// 2. Timer state
let isRunning = false;
let isWorkSession = true;
let timerInterval;
const workDuration = 25 * 60;
const breakDuration = 5 * 60;
let timeLeft = workDuration;

// 3. Modal functions
function showModal(title, message) {
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    modal.style.display = 'flex';
}
modalButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// 4. Update display
function updateDisplay() {
    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
    const seconds = String(timeLeft % 60).padStart(2, '0');
    timerDisplay.textContent = `${minutes}:${seconds}`;
}

// 5. Start/Pause logic
function startPauseTimer() {
    if (isRunning) {
        clearInterval(timerInterval);
        startPauseBtn.textContent = 'Start';
    } else {
        startPauseBtn.textContent = 'Pause';
        timerInterval = setInterval(() => {
            timeLeft--;
            updateDisplay();
            if (timeLeft <= 0) {
                handleSessionEnd();
            }
        }, 1000);
    }
    isRunning = !isRunning;
}

// 6. Handle session end
function handleSessionEnd() {
    clearInterval(timerInterval);
    isWorkSession = !isWorkSession;

    if (isWorkSession) {
        timeLeft = workDuration;
        statusMessage.textContent = 'Work Session';
        showModal("Time's Up!", "Your break is over. Time to get back to work!");
    } else {
        timeLeft = breakDuration;
        statusMessage.textContent = 'Break Session';
        showModal("Time's Up!", "Take a short break. You've earned it!");
    }

    updateDisplay();
    isRunning = false;
    startPauseBtn.textContent = 'Start';
}

// 7. Reset timer
function resetTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    isWorkSession = true;
    timeLeft = workDuration;
    startPauseBtn.textContent = 'Start';
    statusMessage.textContent = 'Work Session';
    updateDisplay();
}

// 8. Event listeners
startPauseBtn.addEventListener('click', startPauseTimer);
resetBtn.addEventListener('click', resetTimer);

// 9. Initial setup
window.onload = updateDisplay;
```

---
