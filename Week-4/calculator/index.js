const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";   // Stores current input string
let resultDisplayed = false;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    // Clear button
    if (button.id === "clear") {
      currentInput = "";
      display.textContent = "0";
      resultDisplayed = false;
      return;
    }

    // Equals button
    if (button.id === "equals") {
      try {
        // Evaluate the string expression
        const result = eval(currentInput);
        display.textContent = result;
        currentInput = result.toString();
        resultDisplayed = true;
      } catch (error) {
        display.textContent = "Error";
        currentInput = "";
        resultDisplayed = true;
      }
      return;
    }

    // Number or operator
    if (resultDisplayed) {
      // Start new input after "=" if user presses a number
      if (/[0-9.]/.test(value)) {
        currentInput = value;
      } else {
        currentInput += value;
      }
      resultDisplayed = false;
    } else {
      // Prevent multiple operators in a row
      const lastChar = currentInput.slice(-1);
      if (["+", "-", "*", "/"].includes(value) && ["+", "-", "*", "/"].includes(lastChar)) {
        currentInput = currentInput.slice(0, -1) + value; // Replace last operator
      } else {
        // Prevent multiple decimals in one number
        if (value === ".") {
          const parts = currentInput.split(/[\+\-\*\/]/);
          if (parts[parts.length - 1].includes(".")) return;
        }
        currentInput += value;
      }
    }

    display.textContent = currentInput;
  });
});
