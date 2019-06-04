// Create Button Handles
let clearButton = document.getElementById('ac');
let oppositeButton = document.getElementById('plusminus');
let percentButton = document.getElementById('percent');
let divideButton = document.getElementById('divide');

let sevenButton = document.getElementById('seven');
let eightButton = document.getElementById('eight');
let nineButton = document.getElementById('nine');
let multiplyButton = document.getElementById('multiply');

let fourButton = document.getElementById('four');
let fiveButton = document.getElementById('five');
let sixButton = document.getElementById('six');
let subtractButton = document.getElementById('minus');

let oneButton = document.getElementById('one');
let twoButton = document.getElementById('two');
let threeButton = document.getElementById('three');
let addButton = document.getElementById('plus');

let zeroButton = document.getElementById('zero');
let decimalButton = document.getElementById('period');
let equalButton = document.getElementById('equal');

// Get Display Handle
let calcDisplay = document.getElementById('display-bottom');
function getCalcDisplay(){
    return calcDisplay;
}

// Add Event Listeners to Function Buttons
clearButton.addEventListener('click', function () {
    getCalcDisplay().innerHTML = 0;
});
oppositeButton.addEventListener('click', function () {
    getCalcDisplay().innerHTML = parseInt(getCalcDisplay().innerHTML) * -1;
});
percentButton.addEventListener('click', function () {
    getCalcDisplay().innerHTML = parseInt(getCalcDisplay().innerHTML) / 100;
});

// Add Event Listeners to Operation Buttons
addButton.addEventListener('click', function () { });
subtractButton.addEventListener('click', function () { });
multiplyButton.addEventListener('click', function () { });
divideButton.addEventListener('click', function () { });

equalButton.addEventListener('click', function () { });

// Add Event Listeners to Number Buttons
zeroButton.addEventListener('click', function () {

    let value = zeroButton.innerHTML;

    if (getCalcDisplay().innerHTML == 0) {
        getCalcDisplay().innerHTML = value;
    } else {
        getCalcDisplay().innerHTML += value;
    }

});

oneButton.addEventListener('click', function () {

    let value = oneButton.innerHTML;

    if (getCalcDisplay().innerHTML == 0) {
        getCalcDisplay().innerHTML = value;
    } else {
        getCalcDisplay().innerHTML += value;
    }

});

twoButton.addEventListener('click', function () {

    let value = twoButton.innerHTML;

    if (getCalcDisplay().innerHTML == 0) {
        getCalcDisplay().innerHTML = value;
    } else {
        getCalcDisplay().innerHTML += value;
    }

});

threeButton.addEventListener('click', function () {

    let value = threeButton.innerHTML;

    if (getCalcDisplay().innerHTML == 0) {
        getCalcDisplay().innerHTML = value;
    } else {
        getCalcDisplay().innerHTML += value;
    }

});

fourButton.addEventListener('click', function () {

    let value = fourButton.innerHTML;

    if (getCalcDisplay().innerHTML == 0) {
        getCalcDisplay().innerHTML = value;
    } else {
        getCalcDisplay().innerHTML += value;
    }

});

fiveButton.addEventListener('click', function () {

    let value = fiveButton.innerHTML;

    if (getCalcDisplay().innerHTML == 0) {
        getCalcDisplay().innerHTML = value;
    } else {
        getCalcDisplay().innerHTML += value;
    }

});

sixButton.addEventListener('click', function () {

    let value = sixButton.innerHTML;

    if (getCalcDisplay().innerHTML == 0) {
        getCalcDisplay().innerHTML = value;
    } else {
        getCalcDisplay().innerHTML += value;
    }

});

sevenButton.addEventListener('click', function () {

    let value = sevenButton.innerHTML;

    if (getCalcDisplay().innerHTML == 0) {
        getCalcDisplay().innerHTML = value;
    } else {
        getCalcDisplay().innerHTML += value;
    }

});

eightButton.addEventListener('click', function () {

    let value = eightButton.innerHTML;

    if (getCalcDisplay().innerHTML == 0) {
        getCalcDisplay().innerHTML = value;
    } else {
        getCalcDisplay().innerHTML += value;
    }

});

nineButton.addEventListener('click', function () {

    let value = nineButton.innerHTML;

    if (getCalcDisplay().innerHTML == 0) {
        getCalcDisplay().innerHTML = value;
    } else {
        getCalcDisplay().innerHTML += value;
    }

});

decimalButton.addEventListener('click', function () {

    let value = decimalButton.innerHTML;
    let myDisplayValue = getCalcDisplay().innerHTML;

    if (!myDisplayValue.includes(".")) {
        getCalcDisplay().innerHTML += value;
    }
    
}); 
