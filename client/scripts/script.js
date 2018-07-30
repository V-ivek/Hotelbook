var hotelList = [
    { "id": "1", "name": "Atlantis", "place": "Palm Jumeira", "link": "images/1.jpg" },
    { "id": "2", "name": "Burj Khalifa", "place": "Bur Dubai", "link": "images/burj-khalifa.jpg" },
    { "id": "3", "name": "Burj Al Arab", "place": "Palm Beach", "link": "images/burjalarab.jpg" },
    { "id": "4", "name": "Emirates Palace", "place": "Abu Dhabi", "link": "images/emirates.jpg" },
    { "id": "5", "name": "Al Mahal", "place": "Murqquoab", "link": "images/almaha.jpg" },
    { "id": "6", "name": "Le Royal Meridien", "place": "Dubai", "link": "images/meridian.JPG" },
    { "id": "7", "name": "The Oberoi", "place": "Dubai", "link": "images/Oberoi.jpg" },
    { "id": "8", "name": "Qasr Al Sahab", "place": "UAE", "link": "images/qasr.JPG" },
    { "id": "9", "name": "Waldorf Astoria", "place": "Ras Al Khaima", "link": "images/waldorf.jpg" },
    { "id": "10", "name": "Al Etihad Towers", "place": "Jumeira", "link": "images/etihad.jpg" },
    { "id": "11", "name": "Hilton Capital Gran", "place": "Abu Dhabi", "link": "images/hilton.jpg" },
    { "id": "12", "name": "Armani Hotel", "place": "Dubai", "link": "images/armani.jpg" },
];
localStorage.setItem('myObj', JSON.stringify(hotelList));


//Dynamic loading of hotel details to populate the browse page
var currentDiv = document.getElementById("tnail");
var i = 1, j = 1;
while (i <= 12) {
    j = 1;
    if (i % 3 === 1) {
        var row = document.createElement("div");
        row.classList.add("row");
    }
    while (j <= 3) {
        var div = document.createElement("div");
        var div1 = document.createElement("div");
        var node = document.createElement("div");
        var img = document.createElement("img");
        var a = document.createElement("a");
        var h5 = document.createElement("h5");
        var h6 = document.createElement("h6");
        var textname, textplace;
        div.classList.add("col-sm-4");
        img.src = hotelList[i - 1].link;
        img.alt = hotelList[i - 1].name;
        img.id = i * 10;
        img.classList.add("img-responsive");
        img.classList.add("img-thumbnail");
        div.appendChild(img);
        div1.classList.add("text-block");
        div1.id = i;
        div1.setAttribute("onclick", "hotelDetails(this.id);");
        div1.setAttribute("onmouseover", "imgBack(this.id);");
        div1.setAttribute("onmouseout", "imgOut(this.id);");
        textname = document.createTextNode(hotelList[i - 1].name);
        textplace = document.createTextNode(hotelList[i - 1].place);
        h5.appendChild(textname);
        h6.appendChild(textplace);
        div1.appendChild(h5);
        div1.appendChild(h6);
        div.appendChild(div1);
        row.appendChild(div);
        i++;
        j++;
    }
    currentDiv.appendChild(row);
}


//Redirecting to prefered hotel details
function hotelDetails(id, tid) {
    window.location = "jsonsend.html?x=" + id;
}

//image thumbnail responses with user mouseover
function imgBack(tid) {
    var imgg = document.getElementById(tid + 0);
    var no = Number(tid);
    imgg.style.backgroundColor = "black";
}

function imgOut(tid) {
    var imgg = document.getElementById(tid + 0);
    var no = Number(tid);
    imgg.style.backgroundColor = "#3e3e3e";
}


