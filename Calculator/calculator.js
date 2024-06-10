function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function deleteDisplay() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0,-1);
}

function calculatePercentage() {
            var display = document.getElementById('display');
            var currentValue = parseFloat(display.value);
            display.value = currentValue / 100;
        }
