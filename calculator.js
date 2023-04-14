console.log('initiating program')
// A simple calculator made in JavaScript. My friend loves making Python calculators, so this is an equalizer.
// Made by MalekK882, and intended for public use on MalekK882's GitHub account.
function add(a, b) {
    return a + b;
}
console.log('add function initalized')
function subtract(a, b) {
    return a - b;
}
console.log('subtract function initalized')
function multiply(a, b) {
    return a * b;
}
console.log('multiply function initialized')
function divide(a, b) {
    return a / b;
}


// User Interface
let num1 = prompt("Please enter the first number:");
let num2 = prompt("Please enter the second number:");
let operation = prompt("Please enter the operation to perform: add, subtract, multiply, or divide");

console.log('defining operations')

if (operation === "add") {
    alert(add(num1, num2));
} else if (operation === "subtract") {
    alert(subtract(num1, num2));
} else if (operation === "multiply") {
    alert(multiply(num1, num2));
} else if (operation === "divide") {
    alert(divide(num1, num2));
} else if (operation === "e") {
    alert(e(num1));

console.log('defining invalid operations')

    
} else {
    alert("Invalid operation");
}

console.log('operation completed. click run again to use the calculator again')
