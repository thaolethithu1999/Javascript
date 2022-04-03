// Save a value to localStorage

let content = ["www.exp.com"];
localStorage.setItem("myContent", JSON.stringify(content));

// Delete your code and refresh the page
//localStorage.clear()

// Fetch your value from localStorage and log it out
console.log(localStorage.getItem("myContent"));
