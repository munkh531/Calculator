let allClear = document.getElementById("all-clear");
let clear = document.getElementById("clear");
let div = document.getElementById("divide");
let sub = document.getElementById("sub");
let multi = document.getElementById("multi");
let plus = document.getElementById("plus");
let dot = document.getElementById("dot");
let equal = document.getElementById("equal");
let zero = document.getElementById("zero");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let operationScreen = document.getElementById("operationScreen");

//state variables
let firstNumner = "";
let secondNumber = "";
let currentOperator = null;
let resultDisplayed = false;

//animation 
function flashButton(buttonElement) {
    if (!buttonElement) return;
    buttonElement.classList.add("key-pressed");
    setTimeout(() => {
        buttonElement.classList.remove("key-pressed");
    }, 100);
}


//operations
function add(num1, num2){
    return num1+ num2;
}
function subtract(num1, num2){
    return num1 - num2;
}
function multiply(num1, num2){
    return num1 * num2;
}
function divide(num1, num2){
    if(num2 === 0){
        alert("You can't divide by zero!");
        return 0;
    }
    return num1 / num2;
}

function operate(oper, num1, num2){
    switch(oper){
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        default:
            return 0;
    }
}
//update display
function updateDisplay(value){
    if(resultDisplayed){
        operationScreen.textContent = "";
        resultDisplayed = false;
    }
    operationScreen.textContent += value;
}

//number buttons
[zero, one, two, three, four, five, six, seven, eight, nine, dot].forEach(btn =>{
    btn.addEventListener("click", () => {
        updateDisplay(btn.textContent);
    });
});

//operator buttons
[plus, sub, multi, div].forEach(op =>{
    op.addEventListener("click", ()=>{
        if(currentOperator !== null) return; //prevent chaining

        firstNumber = operationScreen.textContent;
        currentOperator = op.textContent;
        updateDisplay(currentOperator);
    });
});


// Equal button logic
equal.addEventListener("click", () => {
    if (currentOperator === null) return;

    let fullExpression = operationScreen.textContent;
    let parts = fullExpression.split(currentOperator);

    if (parts.length < 2) return;

    secondNumber = parts[1];

    let num1 = parseFloat(firstNumber);
    let num2 = parseFloat(secondNumber);

    let result = operate(currentOperator, num1, num2);

    operationScreen.textContent = Math.floor(result * 100) / 100;
    firstNumber = operationScreen.textContent;
    secondNumber = "";
    currentOperator = null;
    resultDisplayed = true;
});

// All Clear
allClear.addEventListener("click", () => {
    operationScreen.textContent = "";
    firstNumber = "";
    secondNumber = "";
    currentOperator = null;
    resultDisplayed = false;
});


// Clear
clear.addEventListener("click", () => {
    operationScreen.textContent = operationScreen.textContent.trim().slice(0, -1);
});

document.addEventListener("keydown", (e) => {
    document.activeElement.blur();
    const key = e.key;

    // Map key to button element
    const keyMap = {
        "0": zero,
        "1": one,
        "2": two,
        "3": three,
        "4": four,
        "5": five,
        "6": six,
        "7": seven,
        "8": eight,
        "9": nine,
        ".": dot,
        "+": plus,
        "-": sub,
        "*": multi,
        "/": div,
        "Enter": equal,
        "=": equal,
        "Backspace": clear,
        "c": allClear,
        "C": allClear
    };

    // Perform flash if button exists
    if (key in keyMap) {
        flashButton(keyMap[key]);
    }

    // Handle functionality
    if (!isNaN(key)) {
        updateDisplay(key);
    } else if (key === ".") {
        updateDisplay(".");
    } else if (["+", "-", "*", "/"].includes(key)) {
        if (currentOperator !== null) return;
        firstNumber = operationScreen.textContent;
        currentOperator = key;
        updateDisplay(key);
    } else if (key === "Enter" || key === "=") {
        equal.click();
    } else if (key === "Backspace") {
        clear.click();
    } else if (key.toLowerCase() === "c") {
        allClear.click();
    }
});

const darkToggle = document.getElementById("darkModeToggle");

// Load preference from localStorage
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark");
    darkToggle.checked = true;
}

// Listen for toggle changes
darkToggle.addEventListener("change", () => {
    if (darkToggle.checked) {
        document.body.classList.add("dark");
        localStorage.setItem("darkMode", "enabled");
    } else {
        document.body.classList.remove("dark");
        localStorage.setItem("darkMode", "disabled");
    }
});
