function showCategory(category, button){

let categories = document.querySelectorAll(".product-category");

categories.forEach(function(section){

section.style.display = "none";

});


document.querySelector("." + category).style.display = "grid";



/* REMOVE ACTIVE CLASS FROM ALL BUTTONS */

let buttons = document.querySelectorAll(".category-btn");

buttons.forEach(function(btn){

btn.classList.remove("active");

});


/* ADD ACTIVE CLASS TO CLICKED BUTTON */

button.classList.add("active");

}
