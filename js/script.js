// CATEGORY SWITCHING FUNCTION

function showCategory(category, button){

// hide all product sections
let categories = document.querySelectorAll(".product-category");

categories.forEach(function(section){
section.style.display = "none";
});

// show selected category
let selected = document.querySelector("." + category);

if(selected){
selected.style.display = "grid";
}

// remove active highlight from all buttons
let buttons = document.querySelectorAll(".category-btn");

buttons.forEach(function(btn){
btn.classList.remove("active");
});

// highlight clicked button
button.classList.add("active");

}



// DROPDOWN MENU FUNCTION

function toggleDropdown(){

let menu = document.getElementById("dropdownMenu");

if(menu.style.display === "block"){
menu.style.display = "none";
}
else{
menu.style.display = "block";
}

}
