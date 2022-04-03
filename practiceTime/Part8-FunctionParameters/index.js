//function parameters
const welcomeEl = document.getElementById("welcome-el");

function greetUser(greeting, name) {
  welcomeEl.textContent = `${greeting} ${name} `;
}
let firstWord = "Louis";
let secondWord = "Vuiton";
greetUser(firstWord, secondWord);

//add
function add(a, b) {
  return a + b;
}
console.log(add(3, 4));

//
function getFirst(arr) {
  return arr[0];
}

let gF = getFirst([10, 9, 7]);
console.log(gF);

