
# Creating an Interactive Accordion with JavaScript (Without `classList`)

Interactive UI components are the heart of modern web pages. One of the most common components is the **accordion**, which allows users to expand and collapse sections of content. In this chapter, we’ll build a fully functional accordion **without using `classList`**, relying instead on inline styles and DOM manipulation. This approach helps beginners understand how styles and visibility are controlled programmatically.

---

## 1. Introduction

### What Is an Accordion?

An **accordion** is a vertically stacked list of headers that can be clicked to reveal or hide associated content. Typical use cases include:

* **FAQs** – collapsing answers under each question.
* **Navigation menus** – expanding submenus.
* **Collapsible content sections** – saving screen space in dashboards or articles.

**Benefits of Using Accordions:**

* Saves vertical space by showing only relevant content.
* Improves **user experience** by reducing visual clutter.
* Makes pages more interactive and engaging.

In this guide, we’ll implement an accordion **without using `classList`**, using **inline style properties** like `style.display` or `style.maxHeight` to toggle sections.

---

## 2. Understanding the Accordion Concept

An accordion works by:

1. Having **headers** that the user can click.
2. Each header is associated with a **content section**.
3. Clicking the header toggles the **visibility** of the content.

When not using `classList`, we directly manipulate the element’s styles:

* `element.style.display` – can be set to `"none"` or `"block"` to hide/show content.
* `element.style.maxHeight` – allows smooth height transitions.
* Checking visibility involves reading `element.style.display` or computing height.

Think of it as opening or closing a physical file folder—clicking a header either **pulls it open** or **pushes it closed**.

---

## 3. HTML Structure for the Accordion

A semantic and accessible structure uses `<button>` for headers and `<div>` for content. Using ARIA attributes improves accessibility:

```html
<div class="accordion">
  <div class="accordion-item">
    <button class="accordion-header" aria-expanded="false">
      What is JavaScript?
    </button>
    <div class="accordion-content" style="display: none;">
      JavaScript is a programming language for web interactivity.
    </div>
  </div>

  <div class="accordion-item">
    <button class="accordion-header" aria-expanded="false">
      What is the DOM?
    </button>
    <div class="accordion-content" style="display: none;">
      The DOM is the Document Object Model representing the page structure.
    </div>
  </div>
</div>
```

**Key Points:**

* `<button>` allows keyboard navigation.
* `aria-expanded` indicates the open/closed state for screen readers.
* Content is initially hidden via inline `style="display: none;"`.

---

## 4. Styling the Accordion

CSS ensures that the accordion looks good and transitions smoothly.

```css
.accordion-header {
  background-color: #f1f1f1;
  border: none;
  cursor: pointer;
  width: 100%;
  text-align: left;
  padding: 12px;
  font-size: 16px;
  outline: none;
}

.accordion-header:hover {
  background-color: #ddd;
}

.accordion-content {
  overflow: hidden;
  padding: 0 12px;
  transition: max-height 0.3s ease, padding 0.3s ease;
}
```

* `overflow: hidden` ensures collapsed content does not spill.
* `transition` allows smooth opening/closing effects.
* Inline `display` or `maxHeight` will be manipulated by JavaScript.

---

## 5. JavaScript Implementation Without `classList`

We’ll toggle the accordion by **modifying inline styles** and updating `aria-expanded`.

### JavaScript Code

```javascript
// Select all accordion headers
const headers = document.querySelectorAll(".accordion-header");

headers.forEach(header => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling; // Get the associated content

    // Check if content is currently visible
    if (content.style.display === "block") {
      content.style.display = "none";  // Hide content
      header.setAttribute("aria-expanded", "false");
    } else {
      // Optional: close other open sections for single-open behavior
      headers.forEach(h => {
        h.nextElementSibling.style.display = "none";
        h.setAttribute("aria-expanded", "false");
      });

      content.style.display = "block"; // Show clicked content
      header.setAttribute("aria-expanded", "true");
    }
  });
});
```

### Step-by-Step Explanation

1. **Select headers**: `document.querySelectorAll(".accordion-header")` grabs all accordion buttons.
2. **Attach click listeners**: Each header listens for a click event.
3. **Identify content**: `header.nextElementSibling` selects the corresponding content div.
4. **Check visibility**: `content.style.display` tells us whether it’s open or closed.
5. **Toggle visibility**: Change `display` to `"block"` or `"none"`.
6. **Update ARIA**: `aria-expanded` is updated for accessibility.
7. **Single-open logic**: Optional loop closes all other sections before opening the clicked one.

---

## 6. Enhancements and Best Practices

### Keyboard Accessibility

* Use `<button>` tags for headers.
* Users can navigate with **Tab** and activate with **Enter/Space**.

### Reusable Functions

```javascript
function toggleAccordion(header) {
  const content = header.nextElementSibling;
  content.style.display = content.style.display === "block" ? "none" : "block";
}
```

* Allows the function to be reused for multiple accordions on the page.

### Clean and Modular Code

* Keep JavaScript in a separate file.
* Avoid hardcoding element references.
* Comment your code for clarity.

---

## 7. Interactive Example: Multiple Accordion Items

### Full HTML

```html
<div class="accordion">
  <div class="accordion-item">
    <button class="accordion-header" aria-expanded="false">What is HTML?</button>
    <div class="accordion-content" style="display: none;">
      HTML is the markup language used to structure web pages.
    </div>
  </div>
  <div class="accordion-item">
    <button class="accordion-header" aria-expanded="false">What is CSS?</button>
    <div class="accordion-content" style="display: none;">
      CSS styles the appearance of HTML elements.
    </div>
  </div>
  <div class="accordion-item">
    <button class="accordion-header" aria-expanded="false">What is JavaScript?</button>
    <div class="accordion-content" style="display: none;">
      JavaScript adds interactivity to web pages.
    </div>
  </div>
</div>
```

### Full CSS

```css
.accordion-header {
  background-color: #eee;
  cursor: pointer;
  padding: 12px;
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
  font-size: 16px;
  transition: background 0.3s ease;
}

.accordion-header:hover {
  background-color: #ccc;
}

.accordion-content {
  overflow: hidden;
  padding: 0 12px;
  transition: max-height 0.3s ease;
}
```

### Full JavaScript

```javascript
const headers = document.querySelectorAll(".accordion-header");

headers.forEach(header => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;

    if (content.style.display === "block") {
      content.style.display = "none";
      header.setAttribute("aria-expanded", "false");
    } else {
      headers.forEach(h => {
        h.nextElementSibling.style.display = "none";
        h.setAttribute("aria-expanded", "false");
      });

      content.style.display = "block";
      header.setAttribute("aria-expanded", "true");
    }
  });
});
```

**How It Works:**

* Initially, all content sections are hidden (`display: none`).
* Clicking a header opens its section by setting `display: block`.
* Other sections close automatically (single-open accordion).
* Inline style changes directly control visibility without relying on `classList`.

---

## 8. Summary

In this chapter, we learned how to:

* Build an **accordion UI component** using HTML, CSS, and JavaScript.
* Toggle visibility **without using `classList`**, relying on **inline styles**.
* Enhance accessibility with **ARIA attributes**.
* Implement **single-open logic** and reusable functions.

**Key Takeaways:**

* Direct DOM manipulation can achieve fully functional UI interactions.
* Understanding `element.style` and property checks provides a solid foundation for dynamic web design.
* Students are encouraged to experiment with **animations, nested accordions, and multiple styles** for more advanced effects.

With these skills, you can create interactive, space-saving components that enhance your web pages—all without touching `classList`.

---

