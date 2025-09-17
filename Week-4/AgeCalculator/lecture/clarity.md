
---

```css
/* ============================= */
/* 1. CSS Variables (Custom Properties) */
/* ============================= */
:root {
    /* Primary brand colors */
    --primary-color: #568F87;        /* Main greenish color */
    --primary-color-dark: #3e6661;   /* Darker shade for hover effects */
    --primary-color-light: #7cb9b3;  /* Lighter shade for focus effects */

    /* Background gradient colors */
    --background-start: #f4f6f8;     /* Gradient start color */
    --background-end: #e8ebef;       /* Gradient end color */

    /* Card styling */
    --card-background: rgba(255, 255, 255, 0.9);  /* Slightly transparent white */
    --text-color: #2c3e50;          /* Main text color */
    --subtle-text: #7f8c8d;         /* Secondary text color */
    --border-color: #d8dee3;        /* Light border color for inputs */
    
    /* Shadows */
    --box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08), 0 5px 15px rgba(0, 0, 0, 0.05);
    --button-shadow: 0 8px 20px rgba(86, 143, 135, 0.3);
}

/* Explanation:
- CSS variables make your colors, shadows, and other values reusable.
- Using :root ensures these variables are globally accessible.
*/
```

---

```css
/* ============================= */
/* 2. Global Styles */
/* ============================= */
* {
    box-sizing: border-box;  /* Includes padding and border in element's width/height */
    margin: 0;               /* Reset default margin */
    padding: 0;              /* Reset default padding */
}

body {
    font-family: 'Inter', sans-serif; /* Clean, modern font */
    background: linear-gradient(135deg, var(--background-start), var(--background-end)); /* Gradient background */
    display: flex;           /* Center the card */
    justify-content: center;
    align-items: center;
    min-height: 100vh;       /* Full viewport height */
    color: var(--text-color); /* Default text color */
    padding: 2rem;           /* Some spacing from edges */
}

/* Explanation:
- We reset box-sizing for consistent sizing.
- Flexbox on body centers content both vertically and horizontally.
- Gradient adds a soft background effect.
*/
```

---

```css
/* ============================= */
/* 3. Card Container */
/* ============================= */
.card-container {
    width: 100%;                  /* Full width until max-width */
    max-width: 450px;             /* Limit card size */
    background: var(--card-background); /* Semi-transparent white */
    border-radius: 25px;          /* Rounded corners */
    box-shadow: var(--box-shadow); /* Soft shadow for 3D effect */
    padding: 3rem 2rem;           /* Space inside the card */
    backdrop-filter: blur(10px);  /* Blur effect behind card */
    border: 1px solid rgba(255, 255, 255, 0.2); /* Slight border */
    text-align: center;           /* Center text */
    animation: fadeIn 0.5s ease-out; /* Smooth appearance */
}

/* Explanation:
- Creates a visually appealing card in the center.
- Rounded corners, shadows, and blur give a modern glassy look.
*/
```

---

```css
/* ============================= */
/* 4. Headings */
/* ============================= */
h1 {
    font-size: 2.5rem;             /* Large heading */
    font-weight: 700;               /* Bold */
    margin-bottom: 2rem;           /* Space below heading */
    color: var(--primary-color-dark); /* Use brand dark color */
}
```

---

```css
/* ============================= */
/* 5. Form Inputs */
/* ============================= */
.input-group {
    margin-bottom: 2rem; /* Space between input groups */
    text-align: left;     /* Align labels to left */
}

label {
    display: block;
    font-size: 1rem;
    margin-bottom: 0.5rem;
    color: var(--subtle-text); /* Subtle color for labels */
}

.input-field {
    width: 100%;                     /* Full width input */
    padding: 0.75rem 1rem;           /* Comfortable padding */
    font-size: 1.1rem;
    border: 1px solid var(--border-color); /* Light border */
    border-radius: 10px;
    outline: none;                   /* Remove default outline */
    transition: border-color 0.3s ease, box-shadow 0.3s ease; /* Smooth focus effect */
}

.input-field:focus {
    border-color: var(--primary-color);       /* Highlight border on focus */
    box-shadow: 0 0 0 3px var(--primary-color-light); /* Glow effect */
}

/* Explanation:
- Input fields are full-width and user-friendly.
- Focus state guides the user visually.
*/
```

---

```css
/* ============================= */
/* 6. Buttons */
/* ============================= */
.button {
    width: 100%;                         /* Full width button */
    background-color: var(--primary-color);
    color: #ffffff;
    border: none;
    border-radius: 50px;                 /* Pill-shaped button */
    padding: 1rem 2rem;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;                     /* Pointer on hover */
    transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
    box-shadow: var(--button-shadow);
}

.button:hover {
    background-color: var(--primary-color-dark);
    transform: translateY(-2px);         /* Lift effect */
    box-shadow: 0 10px 25px rgba(86, 143, 135, 0.4); /* Deeper shadow */
}
```

---

```css
/* ============================= */
/* 7. Result Text */
/* ============================= */
.result {
    margin-top: 2rem;
    font-size: 1.5rem;
    line-height: 1.6;
    font-weight: 600;
    color: var(--text-color);
}

.result span {
    color: var(--primary-color-dark);
    font-weight: 700;
}

.result-item {
    display: block;
    margin-bottom: 0.5rem;
}

/* Explanation:
- Highlights the result text with emphasis on key numbers using <span>.
*/
```

---

```css
/* ============================= */
/* 8. Modal Styles */
/* ============================= */
.modal {
    position: fixed;
    z-index: 1000;                 /* Stay on top */
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent overlay */
    display: none;                 /* Hidden by default */
    align-items: center;
    justify-content: center;
}

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

.modal-content h2 {
    margin-bottom: 1rem;
    color: var(--primary-color-dark);
}

.modal-content p {
    margin-bottom: 1.5rem;
    color: var(--text-color);
}

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

/* Explanation:
- The modal appears in front of everything when needed.
- Background overlay darkens the screen.
- Button and modal content styled similarly to card for consistency.
*/
```

---

```css
/* ============================= */
/* 9. Animations */
/* ============================= */
@keyframes fadeIn {
    from { 
        opacity: 0; 
        transform: scale(0.95); /* Slight shrink */
    }
    to { 
        opacity: 1; 
        transform: scale(1);    /* Normal size */
    }
}

/* Explanation:
- fadeIn animation makes elements appear smoothly.
- Used for both card and modal for nice visual effect.
*/
```

