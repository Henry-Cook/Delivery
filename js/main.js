//Function for mock login
document.getElementById("loginBtn").addEventListener("click", function () {
  if (
    document.getElementById("username").value == "U" &&
    document.getElementById("password").value == "P"
  ) {
    window.location.replace("placeOrder.html");
  } else {
    alert("Incorrect Username or Password");
  }
});
