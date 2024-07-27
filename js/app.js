// Interception Observer
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  }
);
sections.forEach((section) => {
  observer.observe(section);
});

// Fetching the DB
fetch(
  "https://raw.githubusercontent.com/CesarSullen/sophiemystique/main/js/data.json"
)
  .then((response) => response.json())
  .then((data) => {
    const popList = document.getElementById("pop-music-list");
    const rnbList = document.getElementById("r&b-music-list");

    data.forEach((item) => {
      if (item.genre === "pop") {
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.classList.add("important-text", "styled-text-1");
        span.textContent = `${item.index}`;

        li.appendChild(span);
        li.appendChild(
          document.createTextNode(`. ${item.title} - ${item.artist}`)
        );

        popList.appendChild(li);
      }
    });

    data.forEach((item) => {
      if (item.genre === "R&B") {
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.classList.add("important-text", "styled-text-2");
        span.textContent = `${item.index}`;

        li.appendChild(span);
        li.appendChild(
          document.createTextNode(`. ${item.title} - ${item.artist}`)
        );

        rnbList.appendChild(li);
      }
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
