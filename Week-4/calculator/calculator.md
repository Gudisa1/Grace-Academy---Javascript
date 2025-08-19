
# Building a Simple Calculator with JavaScript

Creating a **calculator** is one of the classic beginner projects in web development. It’s an excellent exercise to practice **DOM manipulation**, **event handling**, and **JavaScript logic** while producing something interactive and useful.

---

## 1. Introduction

### What Is a Calculator?

A calculator is a tool that allows users to perform arithmetic operations, such as:

* Addition (+)
* Subtraction (−)
* Multiplication (×)
* Division (÷)

**Practical use cases:**

* Quick math calculations
* Educational tools for learning arithmetic
* Enhancing web applications with numeric input processing

### Why Build a Calculator as a Beginner Project?

* Teaches how to **capture user input** with buttons.
* Demonstrates **dynamic DOM updates** to display results.
* Provides experience handling **edge cases** in user input.
* Encourages writing **modular and maintainable code**.

Think of it as a mini “brain” for arithmetic on your webpage.

---

## 2. HTML Structure

Here’s a semantic HTML layout for a simple calculator:

```html
<div class="calculator">
  <div id="display">0</div>
  <div class="buttons">
    <button class="btn" data-value="7">7</button>
    <button class="btn" data-value="8">8</button>
    <button class="btn" data-value="9">9</button>
    <button class="btn operator" data-value="/">/</button>

    <button class="btn" data-value="4">4</button>
    <button class="btn" data-value="5">5</button>
    <button class="btn" data-value="6">6</button>
    <button class="btn operator" data-value="*">*</button>

    <button class="btn" data-value="1">1</button>
    <button class="btn" data-value="2">2</button>
    <button class="btn" data-value="3">3</button>
    <button class="btn operator" data-value="-">-</button>

    <button class="btn" data-value="0">0</button>
    <button class="btn" data-value=".">.</button>
    <button class="btn" id="clear">C</button>
    <button class="btn operator" data-value="+">+</button>

    <button class="btn equals" id="equals">=</button>
  </div>
</div>
```

**Accessibility Tips:**

* Each button has a **data-value** attribute to easily capture its value.
* Use clear text on buttons for user-friendly interaction.
* A single display `<div>` shows both input and results.

---

## 3. Styling the Calculator

Here’s CSS to make the calculator visually appealing:

```css
.calculator {
  width: 260px;
  margin: 50px auto;
  font-family: Arial, sans-serif;
  border: 2px solid #333;
  border-radius: 10px;
  padding: 10px;
  background-color: #f5f5f5;
}

#display {
  height: 50px;
  background-color: #222;
  color: #fff;
  font-size: 24px;
  text-align: right;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  overflow-x: auto;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

button.btn {
  padding: 20px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #e0e0e0;
  transition: background-color 0.2s;
}

button.btn:hover {
  background-color: #d4d4d4;
}

button.operator {
  background-color: #ff9500;
  color: white;
}

button.operator:hover {
  background-color: #e08900;
}

button.equals {
  grid-column: span 4;
  background-color: #28a745;
  color: white;
}

button.equals:hover {
  background-color: #218838;
}
```

**Highlights:**

* Clear distinction between numbers and operators.
* Hover effects provide visual feedback.
* Grid layout organizes buttons neatly.

---

## 4. JavaScript Implementation

### JavaScript Code

```javascript
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
let currentInput = "";
let operator = "";
let firstNumber = null;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (button.id === "clear") {
      currentInput = "";
      firstNumber = null;
      operator = "";
      display.textContent = "0";
      return;
    }

    if (button.id === "equals") {
      if (firstNumber !== null && operator !== "" && currentInput !== "") {
        const secondNumber = parseFloat(currentInput);
        let result;
        switch (operator) {
          case "+": result = firstNumber + secondNumber; break;
          case "-": result = firstNumber - secondNumber; break;
          case "*": result = firstNumber * secondNumber; break;
          case "/":
            result = secondNumber === 0 ? "Error" : firstNumber / secondNumber;
            break;
        }
        display.textContent = result;
        currentInput = result.toString();
        firstNumber = null;
        operator = "";
      }
      return;
    }

    if (button.classList.contains("operator")) {
      if (currentInput === "" && display.textContent !== "0") {
        firstNumber = parseFloat(display.textContent);
      } else if (currentInput !== "") {
        firstNumber = parseFloat(currentInput);
      }
      operator = value;
      currentInput = "";
    } else {
      // Prevent multiple decimals
      if (value === "." && currentInput.includes(".")) return;
      currentInput += value;
      display.textContent = currentInput;
    }
  });
});
```

### Step-by-Step Explanation

1. **Select elements**: display and all buttons.
2. **Initialize state variables**:

   * `currentInput` stores the current number being typed.
   * `firstNumber` stores the first operand.
   * `operator` stores the selected operation.
3. **Add click listeners** to each button.
4. **Clear button**: resets all values and display.
5. **Equals button**: performs the operation based on stored values.
6. **Operators**: store the current number as `firstNumber` and the operator, then reset input.
7. **Digits and decimal**: update `currentInput` and display dynamically.
8. **Edge cases**:

   * Prevent division by zero.
   * Prevent multiple decimals in a number.

---

## 5. Enhancements and Best Practices

* **Prevent invalid sequences**: no two operators in a row.
* **Keyboard support**: listen for `keydown` events to allow typing numbers and operators.
* **Modular code**: separate functions for calculation and input handling.
* **Error handling**: show "Error" for invalid operations.

---

## 6. Interactive Example

### How It Works

1. User clicks number buttons → updates `currentInput` and display.
2. User clicks an operator → stores first number and operator.
3. User enters second number → updates `currentInput`.
4. User clicks equals → performs calculation and updates display.
5. User clicks clear → resets the calculator.

**Optional Enhancements:**

* Add button animations.
* Highlight the current operator.
* Include memory functions (M+, M-, MR, MC).

---

## 7. Summary

By building this simple calculator, you’ve learned:

* **DOM Manipulation**: updating the display dynamically.
* **Event Handling**: capturing clicks and performing actions.
* **JavaScript Logic**: storing state, handling operations, and edge cases.

**Next Steps for Students:**

* Add support for **percentages**, **parentheses**, or **advanced functions**.
* Implement **keyboard input**.
* Improve styling and animations.

This project is a practical, interactive way to **master core JavaScript skills** and understand the connection between the DOM, events, and logic.

---
