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

allClear.addEventListener("click", () => 
    operationScreen.textContent = "asdf"
);

function add(num1, num2){
    return num1 + num2;
}
function subtract(num1, num2){
    return num1 - num2;
}
function multiply(num1, num2){
    return num1 * num2;
}
function divide(num1, num2){
    return num1 / num2;
}

function operate(num1, oper, num2){
    switch(oper){
        case "+":
            add(num1, num2)
            break;
        case "-":
            subtract(num1, num2)
            break;
        case "*":
            multiply(num1, num2)
            break;
        case "/":
            divide(num1, num2)
            break;
        default:
            return null
    }
}