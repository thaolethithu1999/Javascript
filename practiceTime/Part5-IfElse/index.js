let age = 100;

if (age < 6) {
  console.log("Free");
} else if (age >= 6 && age <= 17) {
  console.log("Child discount");
} else if (age >= 18 && age <= 26) {
  console.log("Student discount");
} else if (age >= 27 && age <= 66) {
  console.log("Full price");
} else if (age > 66) {
  console.log("Senior citizen discount");
}

// for loop
let largeCountries = ["Russia", "Canada", "USA", "China", "Brazil"];
console.log("The largest countries in the world");

largeCountries.push("Australia", "India");
largeCountries.pop();
largeCountries.shift();
largeCountries.unshift("Russia");

for (let i = 0; i < largeCountries.length; i++) {
  console.log("- " + largeCountries[i]);
}

//logical operations
let dayOfMonth = 13;
let weekday = "Friday";

if (weekday === "Friday" && dayOfMonth === 13) {
  console.log("shopping day");
} else {
  console.log("just normal day");
}

//rock, paper, scissor

let hands = ["rock", "paper", "scissor"];

function getHands() {
  let a = Math.floor(Math.random() * hands.length);
  return hands[a];
}

console.log(getHands());

// sort fruits
let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"];

let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");

function add() {
  for (let i = 0; i < fruit.length; i++) {
    if (fruit[i] === "🍎") {
      appleShelf.textContent += fruit[i] + " ";
    } else if (fruit[i] === "🍊") {
      orangeShelf.textContent += fruit[i] + " ";
    }
  }
}

add();

// Truthy and falsy values
const credits = 12;

if (credits) {
  console.log("Let's play");
} else {
  console.log("Sorry, you have no credits");
}

// if(0) -> js return false
// if("") -> false
// else -> true

let currentViewers = null;

currentViewers = ["Thao", "Le"];

if (currentViewers) {
  console.log("We have viewers");
}

let cViewer;
console.log(cViewer); // underfined

let cViewer1 = {};
console.log(cViewer1.randomKey); // underfined

let cViewer2 = ["item1"];
console.log(cViewer2[5]); // underfined

console.log(Boolean("")); // false
console.log(Boolean("0")); // true
console.log(Boolean(100)); // true
console.log(Boolean(null)); // false
console.log(Boolean([0])); // true
console.log(Boolean(-0)); // FALSE cuz 0 + or - still false
