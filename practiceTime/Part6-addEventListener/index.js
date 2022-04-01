let box = document.getElementById("box");

box.addEventListener("click", function () {
  console.log("I want to open the box");
});

// let and const
//
const playerName = "Thao";
let credits = 45;

credits -= 10;

//
// The customer wants to order some stuff. Here are the details:
const basePrice = 520; // let -> const
const discount = 120; // let -> const
let shippingCost = 12;
let shippingTime = "5-12 days";

// Whops! Turns out the shipping will be a bit more complex
shippingCost = 15;
shippingTime = "7-14 days";

// Calculating the full price //let -> const
const fullPrice = basePrice - discount + shippingCost;

// Finally, notifying the customer
console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime);
