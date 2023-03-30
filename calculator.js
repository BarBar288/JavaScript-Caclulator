// A simple calculator made in JavaScript. My friend loves making Python calculators, so this is an equalizer.
// Made by MalekK882, and intended for public use on MalekK882's GitHub account.
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}
function single_e(a) {
    return a*e
}

// User Interface

let num1 = prompt("Please enter the first number:");
let num2 = prompt("Please enter the second number:");
let operation = prompt("Please enter the operation to perform: add, subtract, multiply, or divide");
let e = 2.71828183

if (operation === "add") {
    alert(add(num1, num2));
} else if (operation === "subtract") {
    alert(subtract(num1, num2));
} else if (operation === "multiply") {
    alert(multiply(num1, num2));
} else if (operation === "divide") {
    alert(divide(num1, num2));
} else {
    alert("Invalid operation");
}
