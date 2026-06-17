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

  const container = document.getElementById("minesContainer");

  function displayMines(data) {

    if (!container) return;

    container.innerHTML = data.map(m => `
      <div class="card">

        <img
          src="${m.img}"
          alt="${m.name}"
          loading="lazy">

        <h3>${m.country} - ${m.name}</h3>

        <p><strong>Mineral:</strong> ${m.mineral}</p>
        <p><strong>Type:</strong> ${m.type}</p>
        <p><strong>Owner:</strong> ${m.owner}</p>
        <p>${m.desc}</p>

      </div>
    `).join("");

  }

  function saveFeedback(feedback) {

    let data =
      JSON.parse(localStorage.getItem("feedbacks")) || [];

    data.push(feedback);

    localStorage.setItem(
      "feedbacks",
      JSON.stringify(data)
    );

  }

  if (container) {
    displayMines(mines);
  }

  const filter =
    document.getElementById("mineFilter");

  if (filter) {

    filter.addEventListener("change", () => {

      const value = filter.value;

      if (value === "all") {

        displayMines(mines);

      } else {

        const filtered = mines.filter(m =>
          m.mineral.includes(value)
        );

        displayMines(filtered);

      }

    });

  }

  const form = document.querySelector("form");

  if (form) {

    form.addEventListener("submit", (e) => {

      e.preventDefault();

      const name =
        document.getElementById("name").value.trim();

      const email =
        document.getElementById("email").value.trim();

      const msg =
        document.getElementById("message").value.trim();

      if (!name || !email || !msg) {

        alert("Please complete all fields.");
        return;

      }

      if (!email.includes("@")) {

        alert("Please enter a valid email.");
        return;

      }

      const feedback = {

        name,
        email,
        msg,
        date: new Date().toLocaleString()

      };

      saveFeedback(feedback);

      form.reset();

      alert("Feedback saved successfully!");

      location.reload();

    });

  }

  const output =
    document.getElementById("savedFeedback");

  if (output) {

    const data =
      JSON.parse(
        localStorage.getItem("feedbacks")
      ) || [];

    if (data.length === 0) {

      output.innerHTML = `
        <div class="card">
          <h3>No Feedback Yet</h3>
          <p>
            Feedback submitted through the form
            will appear here.
          </p>
        </div>
      `;

    } else {

      output.innerHTML =
        data.map(f => `
          <div class="card">

            <h3>${f.name}</h3>

            <p>${f.msg}</p>

            <p>
              <strong>Email:</strong>
              ${f.email}
            </p>

            <small>${f.date}</small>

          </div>
        `).join("");

    }

  }

});