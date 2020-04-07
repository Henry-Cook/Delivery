let profile = [
  {
    name: "John Smith",
    phone: '917-123-4567',
    street: '123 generic Ave',
    city: "New York",
    state: 'NY',
    zip: 10000
  }
];
let profileData = document.getElementById('profile');
for (let i = 0; i < profile.length; i++) {
  let info = document.createElement('div');
  info.setAttribute('class','profileData');
  info.innerHTML = "Name: " + profile[i].name + '<br>' + "Phone: " + profile[i].phone + '<br>' + "Address: " + '<br>' + profile[i].street + ", "+ "<br>" + profile[i].city + ", " + profile[i].state + ", " + profile[i].zip;
  profileData.appendChild(info);
}

document.getElementById('editProfile').addEventListener('click', function(){
  document.getElementById('editForm').classList.toggle('hide');
});
