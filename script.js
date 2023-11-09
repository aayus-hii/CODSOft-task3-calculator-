const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
const clear = document.querySelector('.clear');
const calculate = document.querySelector('.calculate');
const operators = ['+', '-', '*', '/'];
let decimalSet = false;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.value === 'C') 
        {
            display.value = ' ';  /*try '0' or null */
            decimalSet = false;
        } 
        else if (operators.includes(button.value)) 
        {
            display.value += ` ${button.value} `;
            decimalSet = false;
        } else if (button.value === '.') 
        {
            if (!decimalSet) {
                display.value += button.value;
                decimalSet = true;
            }
        } 
        else if (button.value === '=') 
        {
            try {
                display.value = eval(display.value);
                decimalSet = false;
            } catch (error) {
                display.value = 'Error';
            }
        } 
        else 
        {
            display.value += button.value;
        }
    });
});






