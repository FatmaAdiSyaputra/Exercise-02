const numberBtn = document.querySelectorAll('.number');
const operatorBtn = document.querySelectorAll('.operator');
const inputColumn = document.querySelector('#inputColumn');

const state = {
    inputValue: '',
    // arrayOfNumbers: [],
    result: 0
};
// number button when clicked.
Array.from(numberBtn).forEach(selector => {
    selector.addEventListener('click', function () {
        state.inputValue += this.textContent;
        inputColumn.value = state.inputValue;
    });
});

// operator button when clicked.
Array.from(operatorBtn).forEach(selector => {
    selector.addEventListener('click', function () {
        let operator = this.textContent;

        if (operator != '=' && operator != 'AC') {
            state.inputValue += this.textContent;
            inputColumn.value = state.inputValue;
        } else if (operator == 'AC') {
            state.inputValue = '';
            inputColumn.value = '0';
        } else {
            state.inputValue = state.inputValue.replace('x','*');
            state.result = eval(state.inputValue);
            state.inputValue = state.result;
            inputColumn.value = state.result;
        }

    });
});