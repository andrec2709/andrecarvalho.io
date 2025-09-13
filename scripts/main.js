// <------ Global variables -------->

let header_sidebar_open_icon = document.getElementById("open-sidebar-icon");
let sidebar_close_icon = document.getElementById("close-sidebar-icon");
let sidebar = document.getElementById("sidebar-narrow");
let togglebtn = document.getElementById("page-mode");
let prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
let current_mode = prefersDark.matches ? "dark" : "light";

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

    let elements = document.getElementsByClassName("theme-dependant");
    let changeEvent = new Event("change")
    
    if (current_mode == "light"){
        current_mode = "dark";
        document.body.style.backgroundColor = "var(--main-bg-color-dark)";
        prefersDark.dispatchEvent(changeEvent);

        localStorage.setItem("setmode", "light");
        for (index = 0; index < elements.length; index++){
            elements.item(index).classList.remove("light");
            elements.item(index).classList.add("dark");
            console.log(elements.item(index).classList);
    };
    } else{
        current_mode = "light";
        document.body.style.backgroundColor = "var(--main-bg-color-light)";
        prefersDark.dispatchEvent(changeEvent);

        localStorage.setItem("setmode", "dark");
        for (index = 0; index < elements.length; index++){
            elements.item(index).classList.remove("dark");
            elements.item(index).classList.add("light");
            console.log(elements.item(index).classList);
        }
    }
});

// Changes content when user pref for light/dark mode (browser/system-wide) changes
prefersDark.addEventListener("change", () => {
    under_construction_img.setAttribute('src', (current_mode == "dark") ? "../assets/img/under-construction-dark.png" : "../assets/img/under-construction-light.png");
    console.log("changed");
});

document.addEventListener("DOMContentLoaded", () => {
    under_construction_img.setAttribute('src', (prefersDark['matches'] == true) ? "../assets/img/under-construction-dark.png" : "../assets/img/under-construction-light.png");
})