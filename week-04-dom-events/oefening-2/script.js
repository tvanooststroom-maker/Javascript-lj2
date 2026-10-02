// Selecteer alle vakken met querySelectorAll als houvast
const box = document.querySelectorAll(".box")
// Loop met een for of loop door elk vak en voeg aan elk vak een click-event toe dat de klasse 'active' wisselt
  for (const value of box)
value.addEventListener("click", () => {
        value.classList.toggle("active")
    });