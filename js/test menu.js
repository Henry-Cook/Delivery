//Global pricing counter:
let total = 0;

//Flower Dropdown and Picks:
let flowerPicks = document.getElementById('flowerPicks');
let flowerChevron = document.getElementById('flowerChevron');
//Edible Dropdown and Picks:
let ediblePicks = document.getElementById('picksEdibles');
let edibleChevron = document.getElementById('edibleChevron');
//Extra Dropdown and Picks:
let extraPicks = document.getElementById('picksExtras');
let extraChevron = document.getElementById('extraChevron');
//Add Buttons for each selection:
let addFlowerBtn = document.getElementById('confirmation-flower-btn')
let addEdibleBtn = document.getElementById('confirmation-edible-btn')
let addExtraBtn = document.getElementById('confirmation-extra-btn')


//Functions that "un-hide" the drop down menu for each selection. 
function picksFlower() {
  //This clears the previous btns options
  ediblePicks.classList.add('hide');
  extraPicks.classList.add('hide');
  
  flowerPicks.classList.toggle('hide');
  flowerChevron.classList.toggle('fa-chevron-down');
  flowerChevron.classList.toggle('fa-chevron-up');
  addFlowerBtn.classList.toggle('hide');
  }    
function picksEdibles() {
  //This clears the previous btns options
  flowerPicks.classList.add('hide');
  extraPicks.classList.add('hide');
  
  ediblePicks.classList.toggle('hide');
  edibleChevron.classList.toggle('fa-chevron-down');
  edibleChevron.classList.toggle('fa-chevron-up');
  addEdibleBtn.classList.toggle('hide');
  }      
function picksExtras() {
  //This clears the previous btns options
  ediblePicks.classList.add('hide');
  flowerPicks.classList.add('hide');

  extraPicks.classList.toggle('hide');
  extraChevron.classList.toggle('fa-chevron-down');
  extraChevron.classList.toggle('fa-chevron-up');
  addExtraBtn.classList.toggle('hide');
}
 
//Collecting the values from the form and assigning variables, then calling specified functions 
function collectFlowerValues() {
  let amount = document.getElementById("amount-dropdown").value;
  let flower = document.getElementById("flower-dropdown").value;

  if(flower === "choose-flower" || amount === "choose-amount"){
    alert("Please choose both flower type and amount.");
  }else{
  addElement(flower, amount)
  resetValue()
  totalPrice(amount)
  };
  };
function collectEdibleValues(){
  let edibles = document.getElementById("menu-dropdown").value;
  addElement(edibles, "60");
  resetValue();
  totalPrice('60');
}
function collectExtraValues(){
  let extra = document.getElementById('extra-dropdown').value;
  let price;
  if(extra === "Pure Hash"){
    price = '30';
    addElement(extra, price);
    totalPrice(price);
  }else if(extra === "Pre-Rolled Oil dipped hash rolled Party Joint."){
    price = "25";
    addElement(extra, price);
    totalPrice(price);
  }else if(extra === "1ml Pens"){
    price = "60";
    addElement(extra, price);
    totalPrice(price);
  }else if(extra === "1ml Shatter Pens"){
    price = '100';
    addElement(extra, price);
    totalPrice(price);
  }else{
    alert("Please make a selection");
  }
  resetValue()

}

//Function that adds the pending order Items 
 function addElement(userPick, price) {
  //Grabbing Element that new element will go in:
  let orderItems = document.getElementById("order-items");
  //Creates new HTML Element
  let item = document.createElement("div");
  //Assigns it a class so I can change styling
  item.classList.add("item");
  //Adds content to new element
  item.innerHTML =
    userPick +
    "<span class='itemPrice'>$" +
    price +
    "</span>" +
    "<button id='remove' class='Remove' onclick='remove(this," + price + ")'>X</button>";
  //Appends new element
  orderItems.appendChild(item);
};
//Function to reset the dropdown value
function resetValue() {
  //Selects the dropdown elements
  let day = document.getElementById("day-dropdown");
  let time = document.getElementById("time-dropdown");
  let menu = document.getElementById("menu-dropdown");
  let amount = document.getElementById("amount-dropdown");
  let flower = document.getElementById("flower-dropdown");
  let extra = document.getElementById('extra-dropdown');
  //Sets the dropdowns back to original state
  flower.selectedIndex = 0;
  menu.selectedIndex = 0;
  amount.selectedIndex = 0;
  extra.selectedIndex = 0;
};

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
//Function for menu
function myFunction(x) {
  x.classList.toggle("change");
  document.getElementById("unorderedList").classList.toggle("hide");
}

//Function to remove the new elements:
function remove(el, price){
 subtractPrice(price);
 el.parentNode.remove();
}
//function that subtracts the deleted price
function subtractPrice(amount) {
  total = total - amount;
  final = document.getElementById("totalPriceVisual");
  final.innerHTML = '<h3 id="totalPriceVisual">Total: $' + total + "</h3>";
}