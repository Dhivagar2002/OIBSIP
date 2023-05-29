// Get the display element
const display = document.getElementById('display');

// Get all number buttons
const numberButtons = document.querySelectorAll('.number');

// Get all operator buttons
const operatorButtons = document.querySelectorAll('.operator');

// Clear the display
document.getElementById('clear').addEventListener('click', () => {
    display.value = '';
});

// Add event listeners to number buttons
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        display.value += button.textContent;
    });
});

// Add event listeners to operator buttons
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        display.value += ' ' + button.textContent + ' ';
    });
});

// Calculate the result
document.getElementById('equals').addEventListener('click', () => {
    const expression = display.value;

    try {
        const result = eval(expression);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
});
