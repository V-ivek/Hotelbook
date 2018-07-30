var id = window.location.search;
id = id.replace("?x=", "");
var i = Number(id);
i--;

//Fetching the required hotel from localStorage
var hotelObj = localStorage.getItem('myObj');
var hotelList = JSON.parse(hotelObj);
var hotel = hotelList[i];
document.getElementById("demo").innerHTML = hotel.name;
var panel = document.getElementById("section");
panel.style.backgroundImage = "url(" + hotel.link + ")";
