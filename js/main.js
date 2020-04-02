//Function for mock login
document.getElementById('loginBtn').addEventListener('click', function() {
  if (document.getElementById("username").value == "U" && document.getElementById("password").value == "P") {
    window.location.replace('placeOrder.html');
  } else {
    alert("Incorrect Username or Password");
  }
});
//Function to show preliminary order
function showOrder() {
  let day = document.getElementById("day-dropdown").value;
  let time = document.getElementById("time-dropdown").value;
  document.getElementById("results").innerHTML =
    "Your order will arrive on " +
    day +
    " between " +
    time +
    ".";
  document.getElementById("confirmation-btn").classList.add("hide");
  document.getElementById("order-btn").classList.remove("hide");
}
//Function to show that order has been placed;
function orderPlaced() {
  document.getElementById("order-form").classList.add("hide");
  document.getElementById("placed-order").classList.remove("hide");
}
