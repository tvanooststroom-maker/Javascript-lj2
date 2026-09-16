// Stap 1: Schrijf calculateTotal(bedrag, korting)
// Stap 2: Luister naar het submit-event, lees de invoervelden uit met .value en toon het resultaat
// Stap 3: Toon een foutmelding in #result als het bedrag of de korting leeg is
// Bonus: Schrijf getKlantniveau(bedrag) en toon het niveau erbij

let submit = document.getElementById('submit');
let result = document.getElementById('result');
let amoutInput = document.getElementById('amount');
let discountInput = document.getElementById('discount');

function calculateTotal(bedrag, korting) {
    return bedrag - (bedrag * korting / 100);
}


submit.addEventListener('click', function(e) {
    e.preventDefault()
    result.textContent = calculateTotal(amoutInput.value, discountInput.value);
}
)