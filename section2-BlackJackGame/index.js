
let sum = 0;
let hasBlackjack = false;
let isAlive = true;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

let cards = [];

let player = {
  name: "Thao",
  chips: 145,
  sayHello: function() {
    console.log("HI");
  }
};

player.sayHello();

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

// 1 -> 13
function getRandomCard() {
  let c = Math.floor(Math.random() * 13) + 1; 
  if (c === 1) {
    return 11;
  } else if (c >= 11 && c <= 13) {
    return 10;
  } else {
    return c;
  }
  //return Math.floor(Math.random() * 13) + 1;
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard(); //Math.floor(Math.random() * 11); // random integer 0 to 10
  console.log("firstCard = " + firstCard);
  let secondCard = getRandomCard(); //Math.floor(Math.random() * 11);
  console.log("secondCard = " + secondCard);
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  //cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!";
    hasBlackjack = true;
  } else {
    message = "You've out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  //console.log("Draw me a new cards");
  if (isAlive === true && hasBlackjack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    console.log(cards);
    renderGame();
  }
}

console.log(isAlive);
// cash out
console.log(hasBlackjack);

// if else statement
// let age = 22;

// if (age < 21) {
//   console.log("You can't enter the club!");
// } else {
//   console.log("Welcome!");
// }

// // check if elegible
// let age2 = 100;
// if (age2 < 100) {
//   console.log("Not elegible");
// } else if (age2 === 100) {
//   console.log("Here is your birthday card from the King!");
// } else {
//   console.log("Not elegible, you have already gotten one!");
// }
// //practice
// console.log(4 === 3); // false
// console.log(5 > 2); // true
// console.log(12 > 12); // false
// console.log(3 < 0); // false
// console.log(3 >= 3); // true
// console.log(11 <= 11); // true
// console.log(3 <= 2); // false
