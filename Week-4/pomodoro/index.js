const timerDisplay = document.getElementById("timerDisplay");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const switchBtn = document.getElementById("switchBtn");

let workDuration = 25 * 60;  // 25 minutes in seconds
let breakDuration = 5 * 60;  // 5 minutes in seconds
let timeLeft = workDuration;
let timer = null;
let isWorkSession = true;    // true = work, false = break

function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerDisplay.textContent = `${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
}

function startTimer() {
  if (timer) return; // Prevent multiple intervals

  timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateDisplay();
    } else {
      clearInterval(timer);
      timer = null;
      alert(isWorkSession ? "Work session complete! Time for a break." : "Break over! Back to work.");
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
  timer = null;
}

function resetTimer() {
  pauseTimer();
  timeLeft = isWorkSession ? workDuration : breakDuration;
  updateDisplay();
}

function switchSession() {
  pauseTimer();
  isWorkSession = !isWorkSession;
  timeLeft = isWorkSession ? workDuration : breakDuration;
  switchBtn.textContent = isWorkSession ? "Switch to Break" : "Switch to Work";
  updateDisplay();
}


startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);
switchBtn.addEventListener("click", switchSession);

// Initialize display
updateDisplay();

