// ===== OBJECT + ARRAY =====
const equipment = [
{
name: "Jaw Crusher",
type: "Crushing",
description: "Reduces large rocks into smaller pieces."
},
{
name: "Ball Mill",
type: "Grinding",
description: "Grinds ore into fine powder."
},
{
name: "Flotation Cell",
type: "Separation",
description: "Separates minerals using chemical processes."
}
];

// ===== DOM MANIPULATION =====
const container = document.querySelector("#equipmentContainer");

if (container) {
equipment.forEach(item => {
container.innerHTML += `
<div class="card">
<h3>${item.name}</h3>
<p><strong>Type:</strong> ${item.type}</p>
<p>${item.description}</p>
</div>
`;
});
}

// ===== LOCAL STORAGE + CONDITIONAL =====
let visits = Number(localStorage.getItem("visits")) || 0;
visits++;
localStorage.setItem("visits", visits);

const visitMessage = document.querySelector("#visitMessage");

if (visitMessage) {
if (visits === 1) {
visitMessage.textContent = `Welcome! This is your first visit.`;
} else {
visitMessage.textContent = `Welcome back! You have visited ${visits} times.`;
}
}

// ===== FORM HANDLING =====
const form = document.querySelector("#contactForm");

if (form) {
form.addEventListener("submit", (e) => {
e.preventDefault();
document.querySelector("#formMessage").textContent =
`Thank you for your message! We will respond soon.`;
form.reset();
});
}