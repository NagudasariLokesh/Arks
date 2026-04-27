// ===============================
// MOBILE DROPDOWN MENU TOGGLE
// ===============================

function toggleDropdown(){

let menu = document.getElementById("dropdownMenu");

menu.classList.toggle("open");

}



// ===============================
// CLOSE MENU WHEN CLICKING OUTSIDE
// ===============================

document.addEventListener("click", function(event){

let menu = document.getElementById("dropdownMenu");

let toggle = document.querySelector(".menu-toggle");

if(menu.classList.contains("open")){

if(!menu.contains(event.target) && !toggle.contains(event.target)){

menu.classList.remove("open");

}

}

});



// ===============================
// CLOSE MENU WHEN SCREEN RESIZES
// ===============================

window.addEventListener("resize", function(){

let menu = document.getElementById("dropdownMenu");

if(window.innerWidth > 768){

menu.classList.remove("open");

}

});
