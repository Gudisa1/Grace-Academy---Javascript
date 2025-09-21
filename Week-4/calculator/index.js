 const display = document.getElementById('display');
        const buttons = document.querySelectorAll('.button');

        // Modal elements
        const modal = document.getElementById('modal');
        const modalTitle = document.getElementById('modal-title');
        const modalMessage = document.getElementById('modal-message');
        const modalButton = document.getElementById('modal-button');
        
        let currentInput = '';
        let result = '';

        // Custom modal for alerts
        function showModal(title, message) {
            modalTitle.textContent = title;
            modalMessage.textContent = message;
            modal.style.display = 'flex';
        }

        modalButton.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        // Function to update the display
        function updateDisplay(value) {
            if (display.textContent === '0' && value !== '.' && !isNaN(value)) {
                display.textContent = value;
                currentInput = value;
            } else {
                display.textContent += value;
                currentInput += value;
            }
        }
        
        // Add event listeners to all buttons
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const value = button.getAttribute('data-value');
                
                if (value === 'C') {
                    // Clear display
                    currentInput = '';
                    result = '';
                    display.textContent = '0';
                } else if (value === '=') {
                    try {
                        // Evaluate the expression and handle floating point issues
                        result = String(eval(currentInput));
                        if (result.includes('.')) {
                            result = parseFloat(result).toFixed(4);
                        }
                        display.textContent = result;
                        currentInput = result;
                    } catch (error) {
                        showModal("Error", "Invalid mathematical expression");
                        currentInput = '';
                        display.textContent = '0';
                    }
                } else if (value === 'Back') {
                    // Handle backspace
                    if (currentInput.length > 0) {
                        currentInput = currentInput.slice(0, -1);
                        if (currentInput === '') {
                             display.textContent = '0';
                        } else {
                            display.textContent = currentInput;
                        }
                    }
                } else {
                    updateDisplay(value);
                }
            });
        });
        
        // Initial setup
        window.onload = () => {
             display.textContent = '0';
        };