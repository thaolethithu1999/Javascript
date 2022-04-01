//1: show full name
let firstName = "Thao";
let lastName = "Le";
let fullName = firstName + " " + lastName;
console.log(fullName);

//2: show sentences
let name = "Linda";
let greeting = "Hi there";

function hi() {
  console.log(greeting + ", " + name + "!");
}
hi();

//3: log out 10
let myPoints = 3;

function add3Points() {
  myPoints += 3;
}

function removePoint() {
  myPoints--;
}

add3Points();
add3Points();
add3Points();
removePoint();
removePoint();
// needing to log out 10
console.log(myPoints);

//4: try to predict what each of the lines will log out
console.log("2" + 2); //"22"
console.log(11 + 7); //18
console.log(6 + "5"); //"65"
console.log("My points: " + 5 + 9); // "My points: 59"
console.log(2 + 2); //4
console.log("11" + "14"); //"1114"

//5: rendering an error message
let errorEl = document.getElementById("error");

function purchase() {
    errorEl.textContent = "Some thing went wrong, pls try again";
}
