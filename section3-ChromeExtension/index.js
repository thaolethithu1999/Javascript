// function saveInput() {
//   console.log("Button clicked from onclick attribute");
// }

// let can be reassigned
// const can't be reassigned
let myLeads = [];
//document.getElementById("input-el").focus();
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

window.onload = function () {
  document.getElementById("input-el").focus();
};

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  //console.log(myLeads);
  inputEl.value = "";
  renderLeads();
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    //listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>";
    //template string
    listItems += `
        <li>
            <a target='_blank' href='${myLeads[i]}'>
                ${myLeads[i]}
            </a>
        </li>
    `;

    //console.log(listItems);
    //ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
    //   const li = document.createElement("li");
    //   li.textContent = myLeads[i];
    //   ulEl.append(li);
  }
  ulEl.innerHTML = listItems;
}
