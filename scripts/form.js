const products = [
    { id: "p1", name: "Industrial Pump" },
    { id: "p2", name: "Steel Crusher" },
    { id: "p3", name: "Conveyor Belt" },
    { id: "p4", name: "Grinding Mill" }
];

const select = document.getElementById("product");

products.forEach(product => {
    const option = document.createElement("option");

    option.value = product.id;
    option.textContent = product.name;

    select.appendChild(option);
});

document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("year").textContent =
        new Date().getFullYear();

    document.getElementById("lastModified").textContent =
        document.lastModified;
});