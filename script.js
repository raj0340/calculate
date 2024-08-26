// script.js

let displayValue = ''; // Current input on the display

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function appendOperator(operator) {
    // Prevent multiple operators in a row
    if (displayValue === '' || isNaN(displayValue.slice(-1))) return;
    displayValue += operator;
    updateDisplay();
}

function appendDot() {
    // Prevent multiple dots in the same number
    const parts = displayValue.split(/[\+\-\*\/]/);
    const lastPart = parts[parts.length - 1];
    if (lastPart.includes('.')) return;
    displayValue += '.';
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString();
    } catch (e) {
        displayValue = 'Error';
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').innerText = displayValue || '0';
}
