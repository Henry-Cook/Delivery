//Object to store Mock Delivery Data
let deliveries = [
  {
    date: "4/1/2020",
    strain: "Sativa/Indica Hybrid",
    time: "9:30",
  },
  {
    date: "3/10/2020",
    strain: "Sativa/Indica Hybrid",
    time: "11:00",
  },
  {
    date: "3/30/2020",
    strain: "Sativa/Indica Hybrid",
    time: "7:30",
  },
];

//Delivery Page Functions
//Displays the past deliveries from object above, Will switch to backend eventually:
let pastData = document.getElementById("past");
for (let i = 0; i < deliveries.length; i++) {
  let info = document.createElement("div");
  info.setAttribute("class", "pastData");
  info.innerHTML =
    "Date: " +
    deliveries[i].date +
    "<br>" +
    "Time: " +
    deliveries[i].time +
    "<br>" +
    "Strain: " +
    deliveries[i].strain;
  pastData.appendChild(info);
}
//Function for menu
function myFunction(x) {
  x.classList.toggle("change");
  document.getElementById("unorderedList").classList.toggle("hide");
}
