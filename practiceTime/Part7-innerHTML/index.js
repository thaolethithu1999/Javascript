const container = document.getElementById("container");

container.innerHTML = "<button onclick='buy()'>Buy!</button>";

function buy() {
  container.innerHTML += "<p>Thank you for buying</p>";
}

//template string
const recipient = "Apple";
const sender = "Xiaomi";
const email = `Hey ${recipient}! How is it going? Cheer ${sender}`;

console.log(email);

// let myLead = `["abc"]`;
// myLeads = JSON.parse(myLeads);
// myLeads.push("hhh");
// console.log(myLeads);

// let myLead = ["abc"];
// myLeads = JSON.stringify(myLeads);
// console.log(typeof myLeads);

let list = `["list"]`;

list = JSON.parse(list);
console.log(typeof list);

list.push("newlist");

list = JSON.stringify(list);
console.log(typeof list);
console.log(list);

// localStorage.setItem("myLeads", "www.exp.com");
// let name = localStorage.getItem("myLeads")
// console.log(name);
