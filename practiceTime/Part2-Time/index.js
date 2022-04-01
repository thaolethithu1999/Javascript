
//Calculator
let num1 = 8;
let num2 = 2;
let result = 0;
let sumEl = document.getElementById("sum-el");
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

function add() {
  result = num1 + num2;
  sumEl.textContent = "Sum: " + result;
  //"sum: "+= num1+num2 => string
}

function subtract() {
  result = num1 - num2;
  sumEl.textContent = "Sum: " + result;
}

function divide() {
  result = num1 / num2;
  sumEl.textContent = "Sum: " + result;
}

function multiply() {
  result = num1 * num2;
  sumEl.textContent = "Sum: " + result;
}
