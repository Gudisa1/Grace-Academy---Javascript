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