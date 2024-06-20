function appendValue(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function cleardisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function deletelast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'error';
    }
}