// script.js

function clearDisplay() {
    document.getElementById('display').value = '';
}


function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1)
}

function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}


document.addEventListener('DOMContentLoaded', (event) => {
    const display = document.getElementById('display');
    const calculateButton = document.getElementById('calculateButton');

    calculateButton.addEventListener('click', calculateResult);

    function calculateResult() {
        try {
            display.value = appendResult(display.value);
        } catch (error) {
            display.value = 'error';
        }
    }

    function appendResult(result) {
        result = result.replace();
        return new Function('return ' + result)();
    }

    if (calculateButton !== 'clear') {
        const clearButton = calculator.querySelector('[data-action=clear]')
        clearButton.textContent = 'CE'
      }
});
