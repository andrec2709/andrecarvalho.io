



// <-------- working on sidebar open and close functions ------------>

let header_sidebar_open_icon = document.getElementById("open-sidebar-icon");
let sidebar_close_icon = document.getElementById("close-sidebar-icon");
let sidebar = document.getElementById("sidebar-narrow");

// --> Show sidebar functionality
header_sidebar_open_icon.addEventListener('click', () => {
    
    sidebar.style.right = "0";
    sidebar.style.opacity = "1";

});

// --> Close sidebar functionality
sidebar_close_icon.addEventListener('click', () => {
    
    sidebar.style.right = "-15rem";
    sidebar.style.opacity = "0";
});


// <------------------------------------------------------------------->




// <---------------- Light/Dark mode toggle [START] --------------------------->


let togglebtn = document.getElementById("page-mode");
let mode = (window.matchMedia("(prefers-color-scheme: dark)")['matches']) ? "dark" : "light";

document.addEventListener("load", () => {
});



togglebtn.addEventListener('click', () => {
    // TODO: implement logic for toggle mode
    if (mode == "dark"){
        mode = "light";
        localStorage.setItem("setmode", "light");
    } else{
        mode = "dark";
        localStorage.setItem("setmode", "dark");
    }

});


// <---------------- Light/Dark mode toggle [END] --------------------------->




