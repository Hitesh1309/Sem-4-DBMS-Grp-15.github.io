// Dark mode toggle
function darkModeToggle(){
    var element = document.body;
    element.classList.toggle("dark-mode");
}

//Binding dark mode toggle to button
let dToggle=document.getElementById("dark-mode-toggler");
dToggle.onclick=darkModeToggle;