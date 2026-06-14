document.addEventListener("DOMContentLoaded", () => {

  /* ======================
     🌍 ARRAY + OBJECTS
  ====================== */

  const mines = [
    {
      name: "Cuajone Mine",
      country: "Peru",
      mineral: "Copper",
      desc: "Open-pit copper mine in Peru"
    },
    {
      name: "Escondida",
      country: "Chile",
      mineral: "Copper",
      desc: "Largest copper mine in the world"
    },
    {
      name: "Red Lake",
      country: "Canada",
      mineral: "Gold",
      desc: "High-grade gold mine"
    }
  ];

  /* ======================
     🌍 DOM MANIPULATION
  ====================== */

  const container = document.querySelector(".grid");

  if (container) {
    container.innerHTML = mines.map(m => {
      return `
        <div class="card">
          <h3>${m.country} - ${m.name}</h3>
          <p><b>Mineral:</b> ${m.mineral}</p>
          <p>${m.desc}</p>
        </div>
      `;
    }).join("");
  }

  /* ======================
     💬 FORM + LOCALSTORAGE
  ====================== */

  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = form.querySelector("input[type='text']").value;
      const email = form.querySelector("input[type='email']").value;
      const msg = form.querySelector("textarea").value;

      /* CONDITION */
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

      alert("Saved!");

      form.reset();
    });
  }

  /* ======================
     📦 SHOW FEEDBACK
  ====================== */

  const output = document.getElementById("savedFeedback");

  if (output) {
    const data = JSON.parse(localStorage.getItem("feedbacks")) || [];

    output.innerHTML = data.map(f => {
      return `
        <div class="card">
          <h4>${f.name}</h4>
          <p>${f.msg}</p>
          <small>${f.date}</small>
        </div>
      `;
    }).join("");
  }

});