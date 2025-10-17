// <------ Global variables -------->


// Sidebar

let sidebar_close_icon = document.getElementById("close-sidebar-icon");
let sidebar = document.getElementById("sidebar-narrow");
let github_btn_sidebar = document.getElementById("github-profile-sidebar");
let start_btn_sidebar = document.getElementById("start-sidebar");
let portfolio_btn_sidebar = document.getElementById("portfolio-sidebar");
let contact_btn_sidebar = document.getElementById("contact-sidebar");
let about_btn_sidebar = document.getElementById("about-me-sidebar");

//


// Main Header

let header_sidebar_open_icon = document.getElementById("open-sidebar-icon");
let togglebtn = document.getElementById("page-mode");
let github_btn = document.getElementById("github-profile");
let displaylang_btn = document.getElementById("display-lang");
let start_btn = document.getElementById("start");
let portfolio_btn = document.getElementById("portfolio");
let contact_btn = document.getElementById("contact");
let about_btn = document.getElementById("about-me");
let pagelogo_btn = document.getElementById("page-logo");

//

// contact.php

let github_icon = document.getElementById("github-icon");
let linkedin_icon = document.getElementById("linkedin-icon")
//


// Others

let prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
let under_construction_img = document.getElementById("under-construction-img");

//


// <-------------------------------->


// <-------- Functions ------------->

async function getSessionInfo(){

    const response = await fetch("../api/SessionInfo.php");
    return response;

}

async function setSessionValue(key, value){

    const response = await fetch("../api/UpdateSessionValue.php", {
        headers: {"Content-Type":"application/json"},
        method: "POST",
        body: JSON.stringify({ key: key, value: value }),
        credentials: "include"

    });

    return response;

}

async function openWithLang(url, target = "_self") {
    
    const session = await getSessionInfo();
    const session_json = await session.json();

    window.open(`${url}?lang=${session_json.language}`, target);

}

function isPage(pagename){

    let url = window.location.href;

    let regex = new RegExp(`${pagename}`, "gi");

    return url.search(regex) != -1 ? true : false;

}

async function loadPrefTheme(pageload = false){

    let html = document.documentElement;
    let theme = html.getAttribute('data-theme');

    const lms = document.getElementsByClassName('theme-dependant');

    if (!pageload){
        
        theme = theme == 'light' ? 'dark' : 'light';
        await setSessionValue('theme', theme);
        html.setAttribute('data-theme', theme);

    }
    
    for (i = 0; i < lms.length; i++){
        let lm = lms.item(i);

        if (lm.tagName === "IMG"){
            let opt = lm.getAttribute(`data-${theme}-img`);
            lm.setAttribute('src', opt);
        }
        else{
            if (theme == 'light'){
                lm.classList.add('light');
            }
            else{
                lm.classList.remove('light');
            }
        }
    }

}

// <-------------- Events ---------------->


prefersDark.addEventListener("change", async () => {

    // Changes content when user pref for light/dark mode (browser/system-wide) changes

    loadPrefTheme();

});

document.addEventListener("DOMContentLoaded", async () => {


    loadPrefTheme(true);
    document.documentElement.classList.add('ready');
    document.body.classList.add('loaded');

    
})


// Header buttons


togglebtn.addEventListener('click', async () => {
    
    loadPrefTheme();

});

displaylang_btn.addEventListener("click", async () => {

    // Sets display language (based on session prefs)

    const session = await getSessionInfo();
    const curr_lang = await session.json();
 
    let new_lang = curr_lang.language === 'pt' ? 'en' : 'pt';
    const response = await setSessionValue('language', new_lang);

    window.open(`?lang=${new_lang}`, "_self");

})

header_sidebar_open_icon.addEventListener('click', () => {

    // Show sidebar functionality
   
    sidebar.style.right = "0";
    sidebar.style.opacity = "1";

});

sidebar_close_icon.addEventListener('click', () => {
    
    // Close sidebar functionality

    sidebar.style.right = "-15rem";
    sidebar.style.opacity = "0";

});

github_btn.addEventListener("click", async () => {
    
    window.open("https://www.github.com/andrec2709", "_blank");

});

github_btn_sidebar.addEventListener("click", async () => {

    window.open("https://www.github.com/andrec2709", "_blank");

});

start_btn.addEventListener("click", async () => {

    await openWithLang("../pages/index.php");

});

portfolio_btn.addEventListener("click", async () => {

    await openWithLang("../pages/portfolio.php");

});

contact_btn.addEventListener("click", async () => {

    await openWithLang("../pages/contact.php");

});

about_btn.addEventListener("click", async () => {

    await openWithLang("../pages/about.php");

});

start_btn_sidebar.addEventListener("click", async () => {

    await openWithLang("../pages/index.php");

});

portfolio_btn_sidebar.addEventListener("click", async () => {

    await openWithLang("../pages/portfolio.php");

});

contact_btn_sidebar.addEventListener("click", async () => {

    await openWithLang("../pages/contact.php");

});

about_btn_sidebar.addEventListener("click", async () => {

    await openWithLang("../pages/about.php");

});

pagelogo_btn.addEventListener("click", async () => {

    await openWithLang("../pages/index.php");

});


//


// <-------------------------------->


