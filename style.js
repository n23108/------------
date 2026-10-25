let user=JSON.parse(localStorage.getItem("currentUser"))
if (user.wins === undefined) user.wins = 0;
if (user.loses === undefined) user.loses = 0;
const h5=document.querySelector("h5")
h5.textContent=`HELLO ${user.name}! YOUR WIN: ${user.wins} YOUR LOSE: ${user.loses}`