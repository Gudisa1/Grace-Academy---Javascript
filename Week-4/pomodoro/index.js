  // Element references
        const timerDisplay = document.getElementById('timer');
        const startPauseBtn = document.getElementById('start-pause-btn');
        const resetBtn = document.getElementById('reset-btn');
        const statusMessage = document.getElementById('status');
        
        // Modal elements
        const modal = document.getElementById('modal');
        const modalTitle = document.getElementById('modal-title');
        const modalMessage = document.getElementById('modal-message');
        const modalButton = document.getElementById('modal-button');

        // Timer variables
        let isRunning = false;
        let isWorkSession = true;
        let timerInterval;
        const workDuration = 25 * 60;
        const breakDuration = 5 * 60;
        let timeLeft = workDuration;

        // Custom modal for alerts
        function showModal(title, message) {
            modalTitle.textContent = title;
            modalMessage.textContent = message;
            modal.style.display = 'flex';
        }

        modalButton.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        // Function to update the timer display
        function updateDisplay() {
            const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
            const seconds = String(timeLeft % 60).padStart(2, '0');
            timerDisplay.textContent = `${minutes}:${seconds}`;
        }

        // Function to start or pause the timer
        function startPauseTimer() {
            if (isRunning) {
                // Pause timer
                clearInterval(timerInterval);
                startPauseBtn.textContent = 'Start';
            } else {
                // Start timer
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

        // Function to handle session completion
        function handleSessionEnd() {
            clearInterval(timerInterval);
            isWorkSession = !isWorkSession;
            
            if (isWorkSession) {
                // Start a new work session
                timeLeft = workDuration;
                statusMessage.textContent = 'Work Session';
                showModal("Time's Up!", "Your break is over. Time to get back to work!");
            } else {
                // Start a break session
                timeLeft = breakDuration;
                statusMessage.textContent = 'Break Session';
                showModal("Time's Up!", "Take a short break. You've earned it!");
            }
            
            updateDisplay();
            isRunning = false;
            startPauseBtn.textContent = 'Start';
        }

        // Function to reset the timer
        function resetTimer() {
            clearInterval(timerInterval);
            isRunning = false;
            isWorkSession = true;
            timeLeft = workDuration;
            startPauseBtn.textContent = 'Start';
            statusMessage.textContent = 'Work Session';
            updateDisplay();
        }

        // Event listeners
        startPauseBtn.addEventListener('click', startPauseTimer);
        resetBtn.addEventListener('click', resetTimer);

        // Initial setup
        window.onload = updateDisplay;