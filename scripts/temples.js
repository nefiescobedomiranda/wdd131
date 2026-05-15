const menuButton = document.querySelector("#menu-button");
const navMenu = document.querySelector("#nav-menu");

menuButton.addEventListener("click", () => {

    navMenu.classList.toggle("open");

    if (navMenu.classList.contains("open")) {
        menuButton.textContent = "✖";
    } else {
        menuButton.textContent = "☰";
    }
});

/* Footer current year */

document.querySelector("#currentyear").textContent =
    new Date().getFullYear();

/* Last modified */

document.querySelector("#lastModified").textContent =
    `Last Modified: ${document.lastModified}`;