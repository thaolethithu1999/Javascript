// document.getElementById("count-el").innerText = 5;
//let count = 0;

// console.log(count);

// let bonusPoints = 50;

// bonusPoints = bonusPoints +50;
// console.log(bonusPoints);

// bonusPoints = bonusPoints - 75;
// console.log(bonusPoints);

// bonusPoints = bonusPoints + 45;
// console.log(bonusPoints);

// let lap1 = 34, lap2 = 33, lap3 = 36;

// function increment() {
//   console.log(lap1 + lap2 + lap3);
// }
// increment();

// let inlapsCompleted = 0;

// function lapsCompleted() {
//     console.log(inlapsCompleted+1);
// }

// lapsCompleted();
// lapsCompleted();
// lapsCompleted();

// console.log(lapsCompleted);

// let count = 0;

// function increment() {
//   count = count + 1;
//   console.log(count);
// }

// increment();

//change the count-el in the HTML to reflect the new count
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

let count = 0;

function increment() {
  //count += 1;
  countEl.innerText = ++count; // count = count + 1 # count++
}

function save() {
  let show = count + " - ";
  saveEl.textContent += show;
  //innerText will hide "hidden" elements
  // textContext get the content of all elements
  countEl.textContent = 0;
  count = 0;
}
