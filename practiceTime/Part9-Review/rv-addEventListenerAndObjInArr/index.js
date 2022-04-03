let data = [
  {
    player: "Jane",
    score: 52,
  },
  {
    player: "Mark",
    score: 41,
  },
];

let logBtn = document.getElementById("log-btn");
let ulEl = document.getElementById("ul-el");
logBtn.addEventListener("click", function () {
  //data[0].score; -> only Jame's score
  // all player's score in data
  for (let i = 0; i < data.length; i++) {
    ulEl.innerHTML += `
    <li>${data[i].player} has score: ${data[i].score} </li>`;
  }
});

// Fetch the button from the DOM, store it in a variable
// Use addEventListener() to listen for button clicks
// Log Jane's score when the button is clicked (via data)
