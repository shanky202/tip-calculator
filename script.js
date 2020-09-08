const input = document.querySelector('input');
const button = document.querySelector('button');
const output = document.getElementById('output');

function displayTip() {
    const tip = (input.value * 0.15).toFixed(2);
    output.textContent = `You Should tip ₹${tip} on ₹${input.value}`;
    output.classList.add('tip-output')
}

button.addEventListener('click', displayTip);