// <------ Global variables -------->

let header_sidebar_open_icon = document.getElementById("open-sidebar-icon");
let sidebar_close_icon = document.getElementById("close-sidebar-icon");
let sidebar = document.getElementById("sidebar-narrow");
let togglebtn = document.getElementById("page-mode");
let prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
let under_construction_img = document.getElementById("under-construction-img");


// <----------- Events ------------->

// Show sidebar functionality
header_sidebar_open_icon.addEventListener('click', () => {
    
    sidebar.style.right = "0";
    sidebar.style.opacity = "1";

});

// Close sidebar functionality
sidebar_close_icon.addEventListener('click', () => {
    
    sidebar.style.right = "-15rem";
    sidebar.style.opacity = "0";
});

// Toggle Light/Dark mode
togglebtn.addEventListener('click', () => {
    // TODO: implement logic for toggle mode
    if (prefersDark['matches'] == true){
        localStorage.setItem("setmode", "light");
    } else{
        localStorage.setItem("setmode", "dark");
    }

});

// Changes content when user pref for light/dark mode (browser/system-wide) changes
prefersDark.addEventListener("change", () => {
    under_construction_img.setAttribute('src', (prefersDark['matches'] == true) ? "../assets/img/under-construction-dark.png" : "../assets/img/under-construction-light.png");
});

document.addEventListener("DOMContentLoaded", () => {
    under_construction_img.setAttribute('src', (prefersDark['matches'] == true) ? "../assets/img/under-construction-dark.png" : "../assets/img/under-construction-light.png");
})