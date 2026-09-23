let title = document.getElementById("title");
let button = document.getElementById("btn");
let section = document.getElementById("section");

button.addEventListener("click", () => {
    title.textContent = "Ik heb geklikt";
    title.classList.toggle("active");
    const p = document.createElement("p");
    p.textContent = "ik voeg een paragraaf toe";
    section.appendChild(p);
});

