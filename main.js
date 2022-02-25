// Dark mode toggle
function darkModeToggle(){
    var element = document.body;
    element.classList.toggle("dark-mode");
}

//Funtion to control top button visibility
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    Upbutton.style.display = "block";
  } else {
    Upbutton.style.display = "none";
  }
}

//Function to scroll up
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//Binding scrolling function to button
let Upbutton = document.getElementById("myBtn");
let width = window.innerWidth > 0 ? window.innerWidth : screen.width;
window.onscroll = function () {
  if(width>600){
    scrollFunction();
  }
};