//Global pricing counter:
let total = 0;

//Collecting the values from the form and assigning variables:
function collectValues() {
  let menu = document.getElementById("menu-dropdown").value;
  let amount = document.getElementById("amount-dropdown").value;
  let flower = document.getElementById("flower-dropdown").value;
  //If statement to make sure that selections are made, If so call next functions:
  if (
    menu === "choose-menu" ||
    amount === "choose-amount" ||
    flower === "choose-flower"
  ) {
    alert("Please complete all selections.");
  } else {
    if (menu === "Pre-Rolled Oil dipped hash rolled Party Joint.") {
      amount = "25";
      addElement(amount, menu, flower);
      resetValue();
      totalPrice(amount);
    } else if (menu === "Pure Hash") {
      amount = "30";
      addElement(amount, menu, flower);
      resetValue();
      totalPrice(amount);
    } else {
      addElement(amount, menu, flower);
      resetValue();
      totalPrice(amount);
    }
  }
}

function addElement(amount, menu, flower) {
  //Grabbing Element that new element will go in:
  let orderItems = document.getElementById("order-items");
  //Creates new HTML Element
  let item = document.createElement("div");
  //Assigns it a class so I can change styling
  item.classList.add("item");
  //Adds content to new element
  item.innerHTML =
    menu +
    "-" +
    flower +
    "<span class='itemPrice'>$" +
    amount +
    "</span>" +
    "<button id='remove' class='Remove'>X</button>";
  //Appends new element
  orderItems.appendChild(item);
}

//Function to reset the dropdown value
function resetValue() {
  //Selects the dropdown elements
  let day = document.getElementById("day-dropdown");
  let time = document.getElementById("time-dropdown");
  let menu = document.getElementById("menu-dropdown");
  let amount = document.getElementById("amount-dropdown");
  let flower = document.getElementById("flower-dropdown");
  //Sets the dropdowns back to original state
  flower.selectedIndex = 0;
  menu.selectedIndex = 0;
  amount.selectedIndex = 0;
}

function totalPrice(amount) {
  num = Number(amount);
  total += num;

  final = document.getElementById("totalPriceVisual");
  final.innerHTML = '<h3 id="totalPriceVisual">Total: $' + total + "</h3>";
}

function orderConfirm() {
  let day = document.getElementById("day-dropdown").value;
  let time = document.getElementById("time-dropdown").value;
  if (day === "choose-day" || time === "choose-time") {
    alert("Please chose a delivery time and date");
  } else {
    let makeOrder = document.getElementById("order-form");
    let orderAlert = document.getElementById("results");
    let day = document.getElementById("day-dropdown").value;
    let time = document.getElementById("time-dropdown").value;
    makeOrder.classList.add("hide");
    orderAlert.classList.remove("hide");
    orderAlert.innerHTML =
      "<h3>Your order will arrive on " + day + " between " + time + ".</h3>";
  }
}

//Function to remove the new element
