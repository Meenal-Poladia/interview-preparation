const display = document.getElementById('display-input');

const appendToDisplay = (input) => {
    display.value += input;
};

const clearValues = () => {
    display.value = '';
}

const calculateValues = () => {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}