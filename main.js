//******************************* GLOBAL VARIABLES ************************************
const zeroBtn = document.getElementById('calc-zero');
const oneBtn = document.getElementById('calc-one');
const twoBtn = document.getElementById('calc-two');
const threeBtn = document.getElementById('calc-three');
const fourBtn = document.getElementById('calc-four');
const fiveBtn = document.getElementById('calc-five');
const sixBtn = document.getElementById('calc-six');
const sevenBtn = document.getElementById('calc-seven');
const eightBtn = document.getElementById('calc-eight');
const nineBtn = document.getElementById('calc-nine');

const decimalBtn = document.getElementById('calc-decimal');
const clearBtn = document.getElementById('calc-clear');
const backspaceBtn = document.getElementById('calc-backspace');
let displayValElement = document.getElementById('calc-display-val');
const percentageBtn = document.getElementById('calc-percentage');

const calcNumBtns = document.getElementsByClassName('calc-btn-num');
const calcOperatorBtns = document.getElementsByClassName('calc-btn-operator');
const nightDayMode = document.getElementById('night-day-btn');
const calcKeys = document.getElementsByClassName('calculator-keys');

var displayVal = '0';
var pendingVal;
var evalStringArray = [];

//******************************* FUNCTIONS ************************************

const updateDisplayVal = (clickObj) => {
    var btnText = clickObj.target.innerText;
    
    if (displayVal === '0'){
        displayVal = '';
    }
    displayVal += btnText;
    displayValElement.value = displayVal;
}

const performOperation = (clickObj) => {
    let operator = clickObj.target.innerText;

    switch (operator) {
        case '+':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.value = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('+');
            break;
        case '-':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.value = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('-');
            break;
        case 'x':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.value = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('*');
            break;
        case '÷':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.value = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('/');
            break;
        case '=':
            evalStringArray.push(displayVal);
            var evaluation = eval(evalStringArray.join(' '));
            displayVal = evaluation + '';
            displayValElement.value = displayVal;
            evalStringArray = [];
            break;
        default:
            break;
    }
}

clearBtn.onclick = () => {
     displayVal = "0";
     pendingVal = undefined;
     evalStringArray = [];
     displayValElement.value = displayVal;
}

backspaceBtn.onclick = () => {
    let lengthOfDisplayVal = displayVal.length;
    displayVal = displayVal.slice(0, lengthOfDisplayVal - 1);
    
    if (displayVal === ''){
        displayVal = '0';
    }
    displayValElement.value = displayVal
}

decimalBtn.onclick = () => {
    if (!displayVal.includes('.')){
        displayVal += '.';
    }
    displayValElement.value = displayVal;
}

nightDayMode.onclick = () => {
    
    document.body.classList.toggle('dark-mode');
}

for (let i = 0; i < calcNumBtns.length; i++){
    calcNumBtns[i].addEventListener('click', updateDisplayVal, false);
}

for (let i = 0; i < calcOperatorBtns.length; i++){
     calcOperatorBtns[i].addEventListener('click', performOperation, false);
}

