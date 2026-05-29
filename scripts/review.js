let count = localStorage.getItem("reviewCount");

count = count ? Number(count) + 1 : 1;

localStorage.setItem("reviewCount", count);

document.getElementById("counter").textContent = count;

// footer year
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
});