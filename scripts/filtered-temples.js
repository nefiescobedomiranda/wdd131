// MENU
const menuButton = document.querySelector("#menu-button");
const navMenu = document.querySelector("#nav-menu");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});

// FOOTER
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// DATA
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, USA",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, USA",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Maryland, USA",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Peru",
    location: "Lima, Peru",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Santiago Chile",
    location: "Santiago, Chile",
    dedicated: "1983, September, 15",
    area: 20831,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/santiago-chile/800x500/santiago-chile-lds-temple-1085562-wallpaper.jpg"
  },
  {
    templeName: "Bogotá Colombia",
    location: "Bogotá, Colombia",
    dedicated: "1999, April, 24",
    area: 53500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bogota-colombia/800x500/bogota-colombia-temple-lds-1029726-wallpaper.jpg"
  },
  {
    templeName: "Buenos Aires Argentina",
    location: "Ciudad Evita, Argentina",
    dedicated: "1986, January, 17",
    area: 30659,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/buenos-aires-argentina/800x500/buenos-aires-argentina-temple-lds-236979-wallpaper.jpg"
  },
  {
    templeName: "Caracas Venezuela",
    location: "Caracas, Venezuela",
    dedicated: "2000, August, 20",
    area: 15332,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/caracas-venezuela/800x450/caracas_venezuela_temple_detail_1691066_2400x1200.jpg"
  }
];

// GALLERY
const gallery = document.querySelector(".gallery");

function createTempleCard(temple) {
    const figure = document.createElement("figure");

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = "lazy";

    const figcaption = document.createElement("figcaption");
    figcaption.innerHTML = `
        <h3>${temple.templeName}</h3>
        <p>${temple.location}</p>
        <p>${temple.dedicated}</p>
        <p>${temple.area.toLocaleString()} sq ft</p>
    `;

    figure.appendChild(img);
    figure.appendChild(figcaption);

    return figure;
}

function displayTemples(list) {
    gallery.innerHTML = "";
    list.forEach(t => gallery.appendChild(createTempleCard(t)));
}

displayTemples(temples);

// FILTERS
document.querySelector("#home").addEventListener("click", e => {
    e.preventDefault();
    displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", e => {
    e.preventDefault();
    displayTemples(temples.filter(t => parseInt(t.dedicated) < 1900));
});

document.querySelector("#new").addEventListener("click", e => {
    e.preventDefault();
    displayTemples(temples.filter(t => parseInt(t.dedicated) >= 2000));
});

document.querySelector("#large").addEventListener("click", e => {
    e.preventDefault();
    displayTemples(temples.filter(t => t.area > 90000));
});

document.querySelector("#small").addEventListener("click", e => {
    e.preventDefault();
    displayTemples(temples.filter(t => t.area < 10000));
});