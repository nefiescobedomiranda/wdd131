document.addEventListener("DOMContentLoaded", () => {

  const mines = [
    {
      name: "Escondida",
      country: "Chile",
      mineral: "Copper",
      type: "Open-pit",
      owner: "BHP",
      img: "assets/escondida.jpg",
      desc: "Largest copper mine in the world."
    },
    {
      name: "Grasberg",
      country: "Indonesia",
      mineral: "Gold & Copper",
      type: "Open-pit",
      owner: "Freeport",
      img: "assets/grasberg.jpg",
      desc: "One of the largest gold mines."
    },
    {
      name: "Bingham Canyon",
      country: "USA",
      mineral: "Copper",
      type: "Open-pit",
      owner: "Rio Tinto",
      img: "assets/bingham.jpg",
      desc: "Deepest open-pit mine."
    },
    {
      name: "Chuquicamata",
      country: "Chile",
      mineral: "Copper",
      type: "Open-pit",
      owner: "Codelco",
      img: "assets/chuquicamata.jpg",
      desc: "Historic copper mine."
    },
    {
      name: "Mponeng",
      country: "South Africa",
      mineral: "Gold",
      type: "Underground",
      owner: "Harmony Gold",
      img: "assets/mponeng.jpg",
      desc: "Deepest mine in the world."
    },
    {
      name: "Muruntau",
      country: "Uzbekistan",
      mineral: "Gold",
      type: "Open-pit",
      owner: "Navoi",
      img: "assets/muruntau.jpg",
      desc: "Huge gold deposit."
    },
    {
      name: "Carajás",
      country: "Brazil",
      mineral: "Iron",
      type: "Open-pit",
      owner: "Vale",
      img: "assets/carajas.jpg",
      desc: "Richest iron ore mine."
    },
    {
      name: "Kidd Creek",
      country: "Canada",
      mineral: "Copper/Zinc",
      type: "Underground",
      owner: "Glencore",
      img: "assets/kidd.jpg",
      desc: "Deep base metal mine."
    },
    {
      name: "Olympic Dam",
      country: "Australia",
      mineral: "Uranium/Copper",
      type: "Underground",
      owner: "BHP",
      img: "assets/olympic.jpg",
      desc: "Multi-metal giant deposit."
    },
    {
      name: "Diavik",
      country: "Canada",
      mineral: "Diamonds",
      type: "Open-pit",
      owner: "Rio Tinto",
      img: "assets/diavik.jpg",
      desc: "Famous diamond mine."
    }
  ];

  const container = document.querySelector(".grid");

  if (container) {
    container.innerHTML = mines.map(m => `
      <div class="card">
        <img src="${m.img}" loading="lazy" alt="${m.name}">
        <h3>${m.country} - ${m.name}</h3>
        <p><b>Mineral:</b> ${m.mineral}</p>
        <p><b>Type:</b> ${m.type}</p>
        <p><b>Owner:</b> ${m.owner}</p>
        <p>${m.desc}</p>
      </div>
    `).join("");
  }

  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = form.querySelector("input[type='text']").value;
      const email = form.querySelector("input[type='email']").value;
      const msg = form.querySelector("textarea").value;

      if (!name || !email || !msg) {
        alert("Fill all fields");
        return;
      }

      const feedback = {
        name,
        email,
        msg,
        date: new Date().toLocaleString()
      };

      let data = JSON.parse(localStorage.getItem("feedbacks")) || [];
      data.push(feedback);

      localStorage.setItem("feedbacks", JSON.stringify(data));

      form.reset();
      alert("Saved!");
    });
  }

  const output = document.getElementById("savedFeedback");

  if (output) {
    const data = JSON.parse(localStorage.getItem("feedbacks")) || [];

    output.innerHTML = data.map(f => `
      <div class="card">
        <h4>${f.name}</h4>
        <p>${f.msg}</p>
        <small>${f.date}</small>
      </div>
    `).join("");
  }

});