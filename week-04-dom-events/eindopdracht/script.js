// Selecteer het formulier, invoerveld, takenlijst en teller
let form = document.getElementById("task-form")
let text = document.getElementById("task-input")
let tasks = document.getElementById("tasks")
let counter = document.getElementById("counter")
// taakToevoegen() — maak een <li> aan met een checkbox en verwijderknop
form.addEventListener('submit', (e)=> {
    e.preventDefault()
    const inputValue = text.value.trim()

    const taak = document.createElement('li')
    taak.textContent = inputValue

    const btn = document.createElement('button')
    btn.type ="button"
    btn.textContent = 'verwijderen'

    const checkbox = document.createElement('input')
    checkbox.type ="checkbox"

    taak.append(btn, checkbox)

    btn.addEventListener('click', ()=> {
        taak.remove();
    })

    tasks.appendChild(taak)
    text.value = ''
   toonTaken() 

});
const toonTaken =() => {
    const total = document.querySelectorAll("li")
    counter.textContent = total.length

}

// toonTaken() — werk de teller bij


// Voeg listeners toe aan het formulier en de taken
