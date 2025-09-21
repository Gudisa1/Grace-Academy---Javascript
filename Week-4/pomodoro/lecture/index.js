// Timer display and buttons
const timerDisplay = document.getElementById('timer');
const startPauseBtn = document.getElementById('start-pause-btn');
const resetBtn = document.getElementById('reset-btn');
const statusMessage = document.getElementById('status');


let isRunning = false;       // Is the timer currently counting?
let isWorkSession = true;    // Are we in a work session (true) or break session (false)?
let timerInterval;           // Stores the setInterval ID so we can stop it later

// Durations in seconds
const workDuration = 25 * 60;   // 25 minutes
const breakDuration = 5 * 60;   // 5 minutes

let timeLeft = workDuration; 


function updateDisplay() {
    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
    const seconds = String(timeLeft % 60).padStart(2, '0');
    timerDisplay.textContent = `${minutes}:${seconds}`;
}


function startPauseTimer(){

    if (isRunning) {

        clearInterval(timerInterval);
        startPauseBtn.textContent = 'Start';
    }

    else{
        startPauseBtn.textContent = 'Pause';
        

        timerInterval = setInterval(() => {
            timeLeft--;          // Decrease time by 1 second
            updateDisplay();     // Refresh the shown time

            if (timeLeft <= 0) {
                handleSessionEnd();   // If time is up, switch sessions
            }
        }, 1000); 
    }
    isRunning = !isRunning;  // Toggle the running state
}

function handleSessionEnd() {
    clearInterval(timerInterval);    // Stop the countdown
    isWorkSession = !isWorkSession;  // Toggle work ↔ break

    if (isWorkSession) {
        // New Work Session
        timeLeft = workDuration;
        statusMessage.textContent = 'Work Session';
        // showModal("Time's Up!", "Your break is over. Time to get back to work!");
    } else {
        // New Break Session
        timeLeft = breakDuration;
        statusMessage.textContent = 'Break Session';
        // showModal("Time's Up!", "Take a short break. You've earned it!");
    }

    updateDisplay();                  // Reset display
    isRunning = false;                // Not auto-running
    startPauseBtn.textContent = 'Start';
}


function resetTimer() {
    clearInterval(timerInterval);     // Stop any running countdown
    isRunning = false;
    isWorkSession = true;             // Always reset to Work
    timeLeft = workDuration;          // Back to 25:00
    startPauseBtn.textContent = 'Start';
    statusMessage.textContent = 'Work Session';
    updateDisplay();
}

startPauseBtn.addEventListener('click', startPauseTimer);
resetBtn.addEventListener('click', resetTimer);
