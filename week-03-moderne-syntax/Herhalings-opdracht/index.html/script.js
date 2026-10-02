const btn = document.getElementById("btn")
const title = document.getElementById("title")
const section = document.getElementById("section")

const name = "Tristan"
const opleiding = "Software-developer"
let aantalklikken = 0

function berekenPunten() {
    return aantalklikken * 10;
}
btn.addEventListener("click", () => {
    aantalklikken += 1;

    title.textContent= `Hoi, ik ben ${name} en ik doe ${opleiding}`
    section.classList.toggle("active")
    const nieuweParagraaf = document.createElement("p");
    nieuweParagraaf.textContent = `Je hebt nu ${berekenPunten()} punten.`;

    section.appendChild(nieuweParagraaf);
});
