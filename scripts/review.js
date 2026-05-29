let count = localStorage.getItem("reviewCount");

count = count ? Number(count) + 1 : 1;

localStorage.setItem("reviewCount", count);

document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("counter").textContent = count;

    document.getElementById("year").textContent =
        new Date().getFullYear();
});