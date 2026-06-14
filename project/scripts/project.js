document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     1. LAST VISIT SYSTEM
  ========================= */

  const visitMessage = document.getElementById("visitMessage");
  const lastVisit = document.getElementById("lastVisit");

  if (visitMessage) {
    const now = new Date().toLocaleString();

    const savedVisit = localStorage.getItem("lastVisit");

    if (!savedVisit) {
      visitMessage.textContent = "Welcome to the Mining Education Platform.";
    } else {
      visitMessage.textContent = "Welcome back to the Mining Education Platform.";
      lastVisit.textContent = "Last visit: " + savedVisit;
    }

    localStorage.setItem("lastVisit", now);
  }


  /* =========================
     2. FORM FEEDBACK MESSAGE
  ========================= */

  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      alert("Thank you! Your feedback has been received.");

      form.reset();
    });
  }


  /* =========================
     3. ACTIVE NAV LINK (optional polish)
  ========================= */

  const links = document.querySelectorAll("nav a");

  links.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add("active");
    }
  });

});