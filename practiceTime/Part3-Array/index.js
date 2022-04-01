// arr = list of items
let featuredPosts = [
  "Check out my N clone ",
  "Here's the code for my project",
  "I've just relaucnhed my portfolio",
];
let message = "Something else";
featuredPosts.push(message);

console.log(featuredPosts.length);

console.log(featuredPosts);

featuredPosts.pop();
console.log(featuredPosts);

for (i = 10; i <= 100; i += 10) {
  console.log(i);
}

for (let i = 0; i < featuredPosts.length; i++) {
  console.log(featuredPosts[i]) + "/n";
}
//
let cards = [7, 3, 9];

for (let i = 0; i < cards.length; i++) {
  console.log(cards[i]);
}
//
let sentence = ["Hello", "my", "name", "is", "Thao"];
let greetingEl = document.querySelector("#greeting-el");

for (let i = 0; i < sentence.length; i++) {
  greetingEl.textContent += sentence[i] + " ";
}

console.log(greetingEl);
//

let player1Time = 102;
let player2Time = 107;

function getFastesRaceTime() {
  if (player1Time < player2Time) {
    return player1Time;
  } else if (player2Time < player1Time) {
    return player2Time;
  } else {
    return player1Time;
  }
}
// let fastestRace = getFastesRaceTime();
// console.log(fastestRace);

function totalRaceTime() {
  let store = getFastesRaceTime();
  console.log(store);
}
totalRaceTime();

//random
let randomNumber = Math.random() * 6; // 0.000 -> 5.999
console.log(randomNumber);

//floor
let flooredNumber = Math.floor(3.95632);
console.log(flooredNumber);

//dice 1-6
let dice = Math.floor(Math.random() * 6) + 1; // 1 to 6
// * 7 -> 0 to 7
console.log(dice);

function rollDice() {
  let dice = Math.floor(Math.random() * 6) + 1; // * 7
  return dice;
}
console.log(rollDice());
