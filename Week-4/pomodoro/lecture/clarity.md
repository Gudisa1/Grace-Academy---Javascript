
# CSS Styles Explanation for the Timer App

### 1. Root Variables (`:root`)

```css
:root {
    --primary-color: #8ABB6C;
    --primary-color-dark: #6c7f55;
    --background-start: #f4f6f8;
    --background-end: #e8ebef;
    --card-background: rgba(255, 255, 255, 0.9);
    --text-color: #2c3e50;
    --subtle-text: #7f8c8d;
    --box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08), 0 5px 15px rgba(0, 0, 0, 0.05);
    --button-shadow: 0 8px 20px rgba(138, 187, 108, 0.3);
    --timer-bg: #e0e6ed;
}
```

* This section defines **CSS variables**.
* Think of them like **custom colors and styles we can reuse everywhere**.
* For example: `var(--primary-color)` will always give us the green shade `#8ABB6C`.
* Benefits: easy to change theme colors and maintain consistency.

---

### 2. Universal Reset

```css
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
```

* Applies to **all elements** (`*`).
* `box-sizing: border-box` makes width/height calculations easier by including padding and border inside the set width.
* Resets default browser margins and paddings.

---

### 3. Body Styling

```css
body {
    font-family: 'Inter', sans-serif;
    background: linear-gradient(135deg, var(--background-start) 0%, var(--background-end) 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    color: var(--text-color);
    padding: 2rem;
    transition: background-color 0.5s ease;
}
```

* Uses **Inter font**.
* Background: a **diagonal gradient** (light gray tones).
* `display: flex` + `justify-content` + `align-items`: perfectly centers the timer box.
* `min-height: 100vh`: ensures it fills the whole screen height.
* Smooth transitions for background changes.

---

### 4. Timer Container

```css
.timer-container {
    width: 100%;
    max-width: 450px;
    background: var(--card-background);
    border-radius: 25px;
    box-shadow: var(--box-shadow);
    padding: 3rem 2rem;
    text-align: center;
    animation: fadeIn 0.5s ease-out;
    border: 1px solid rgba(255, 255, 255, 0.2);
}
```

* A **card-style box** where the timer sits.
* Rounded corners (`border-radius: 25px`).
* `box-shadow`: creates a floating effect.
* Centered text.
* `fadeIn` animation makes it smoothly appear.

---

### 5. Headings

```css
h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: var(--primary-color-dark);
}
```

* Big, bold heading.
* Slight margin below to separate it from other elements.

---

### 6. Status Message

```css
.status-message {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--subtle-text);
    margin-bottom: 2rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}
```

* Displays **messages like "Running" or "Paused"**.
* Uppercased letters with spacing for emphasis.

---

### 7. Timer Display

```css
#timer {
    font-size: 5rem;
    font-weight: 700;
    color: var(--primary-color-dark);
    background: var(--timer-bg);
    display: inline-block;
    padding: 1rem 2rem;
    border-radius: 15px;
    margin-bottom: 2rem;
    transition: color 0.5s ease, background-color 0.5s ease;
}
```

* Large digital-style number.
* Background block with rounded edges.
* Smooth transitions when color/background changes.

---

### 8. Controls (Buttons)

```css
.controls {
    display: flex;
    justify-content: center;
    gap: 1rem;
}
```

* Places buttons (Start/Pause, Reset) next to each other with space in between.

#### Button Base

```css
.button {
    padding: 1rem 2rem;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.3s ease;
    box-shadow: var(--button-shadow);
}
```

* Rounded pill-shaped buttons.
* Hover effects (`transform`, `box-shadow`).
* Shadow makes them look clickable.

#### Start/Pause Button

```css
#start-pause-btn {
    background-color: var(--primary-color);
    color: white;
}
#start-pause-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(138, 187, 108, 0.4);
}
```

* Green button with hover lift effect.

#### Reset Button

```css
#reset-btn {
    background-color: var(--subtle-text);
    color: white;
    box-shadow: 0 8px 20px rgba(127, 140, 141, 0.3);
}
#reset-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(127, 140, 141, 0.4);
}
```

* Gray button for secondary action.

---

### 9. Animations

```css
@keyframes fadeIn {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
}
```

* When the card or modal appears, it fades in and slightly grows.

---

### 10. Modal (Pop-up)

```css
.modal {
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: none;
    align-items: center;
    justify-content: center;
}
```

* A full-screen **overlay** for alerts/messages.
* Semi-transparent dark background.

#### Modal Content

```css
.modal-content {
    background-color: var(--card-background);
    padding: 2rem;
    border-radius: 15px;
    box-shadow: var(--box-shadow);
    width: 90%;
    max-width: 400px;
    text-align: center;
    animation: fadeIn 0.3s ease;
}
```

* White card in the middle of the overlay.

#### Modal Text & Button

```css
.modal-content h2 { margin-bottom: 1rem; color: var(--primary-color-dark); }
.modal-content p { margin-bottom: 1.5rem; color: var(--text-color); }

.modal-button {
    background-color: var(--primary-color);
    color: white;
    padding: 0.75rem 2rem;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}
.modal-button:hover {
    background-color: var(--primary-color-dark);
}
```

* Title is green, text is dark gray.
* Button matches the theme with hover effect.

---
