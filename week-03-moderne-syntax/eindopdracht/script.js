let button = document.getElementById("profile-form")
let section = document.getElementById("profiles-list")
let naam = document.getElementById("name")
let functie = document.getElementById("role")
let afdeling = document.getElementById("department")

button.addEventListener("submit", (event) => {
    event.preventDefault();

    section.innerHTML = `
        <article class="profile">
            <h3>${naam.value}</h3>
            <p>Functie: ${functie.value}</p>
            <p>Afdeling: ${afdeling.value}</p>
            <button type="button" class="delete-button">Verwijder</button>
        </article>
    `;

  document.querySelector(".delete-button").addEventListener("click", (event) => {
        event.target.parentElement.remove();
    });

    button.reset();
});