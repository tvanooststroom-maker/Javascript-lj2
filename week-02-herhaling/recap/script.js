let input = document.getElementById('input');
let output = document.getElementById('output');
let button = document.getElementById('button');

let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let calcButton = document.getElementById('btncalc');
let result = document.getElementById('result');

button.addEventListener('click', function() {
    button.style.backgroundColor = 'blue';
    output.textContent = input.value;
    output.style.color = 'green';
    input.value = '';
});

calcButton.addEventListener('click', function() {
    result.textContent = calculator(input1.value, input2.value);
    input1.value = '';
    input2.value = '';

});

function calculator(a, b) {
    return a * b
}