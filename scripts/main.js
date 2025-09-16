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

async function invalidMessage(){
    let alert_widget = document.getElementById("alert-container");
    let alert_message = document.getElementById("alert-message");
    const session = await getSessionInfo();
    const session_json = await session.json();

    switch (session_json.language) {
        case "pt":
            alert_message.innerText = "Por favor preencha todos os campos";
            break;
    
        default:
            alert_message.innerText = "Please fill out all fields";
            break;
    }

    alert_widget.style.opacity = "100";
    alert_widget.style.bottom = "30px";

    setTimeout(() => {
        alert_widget.style.opacity = "0";
        alert_widget.style.bottom = "-60px";
    }, 2000);
}

async function onSubmit(){

        let username = document.getElementById("username");
        let email = document.getElementById("email");
        let message = document.getElementById("message");
        

        if (username.value === "" || email.value === "" || message.value === ""){
            await invalidMessage();
            document.getElementById("submit-form-btn").disabled = false;
            grecaptcha.reset();
        }
        else{
            document.getElementById("contact-me-form").requestSubmit();   
        }

}
// <-------------------------------->


// <----------- Events ------------->

if (isPage("contact.php")){
    document.getElementById("contact-me-form").addEventListener("submit", async function(e) {
        
        let formdt = new FormData(this);

        const response = await fetch("../api/ParseForm.php", {
            body: formdt,
            method: "POST"
        });


    });
}


prefersDark.addEventListener("change", async () => {

    // Changes content when user pref for light/dark mode (browser/system-wide) changes

    const session = await getSessionInfo();
    const session_json = await session.json();

    if (isPage("contact.php")){
        
        github_icon.setAttribute(
            'src',
            session_json.theme == "dark"
            ? "../assets/icons/github-mark-white.png"
            : "../assets/icons/github-mark.png"
        );        

        linkedin_icon.setAttribute(
            'src',
            session_json.theme == "dark"
            ? "../assets/icons/InBug-White.png"
            : "../assets/icons/InBug-Black.png"
        );        

    }

    if (under_construction_img != null){
    
        under_construction_img.setAttribute(
            'src',
            session_json.theme == "dark" 
            ? "../assets/img/under-construction-dark.png" 
            : "../assets/img/under-construction-light.png");

        under_construction_img.setAttribute(
            'src', 
            session_json.theme == "dark" 
            ? "../assets/img/under-construction-dark.png" 
            : "../assets/img/under-construction-light.png"
        );

    }

});

document.addEventListener("DOMContentLoaded", async () => {

    const session = await getSessionInfo();
    const session_json = await session.json();

    document.body.style.backgroundColor = session_json.theme == "dark" ? "var(--main-bg-color-dark)" : "var(--main-bg-color-light)";
    
    if (isPage("contact.php")){
        
        github_icon.setAttribute(
            'src',
            session_json.theme == "dark"
            ? "../assets/icons/github-mark-white.png"
            : "../assets/icons/github-mark.png"
        );        

        linkedin_icon.setAttribute(
            'src',
            session_json.theme == "dark"
            ? "../assets/icons/InBug-White.png"
            : "../assets/icons/InBug-Black.png"
        );        

    }

    if (under_construction_img != null){
    
        under_construction_img.setAttribute(
            'src',
            session_json.theme == "dark" 
            ? "../assets/img/under-construction-dark.png" 
            : "../assets/img/under-construction-light.png");

        under_construction_img.setAttribute(
            'src', 
            session_json.theme == "dark" 
            ? "../assets/img/under-construction-dark.png" 
            : "../assets/img/under-construction-light.png"
        );

    }
    
})


// Header buttons


togglebtn.addEventListener('click', async () => {

    // Toggle Light/Dark mode

    const session = await getSessionInfo();
    const session_json = await session.json();

    let elements = document.getElementsByClassName("theme-dependant");

    let changeEvent = new Event("change")
    
    let prefmode = session_json.theme;

    if ( prefmode == "light"){
        
        document.body.style.backgroundColor = "var(--main-bg-color-dark)";
        await setSessionValue('theme', 'dark');
        prefersDark.dispatchEvent(changeEvent);
        
        for (index = 0; index < elements.length; index++){
            
            elements.item(index).classList.remove("light");
            elements.item(index).classList.add("dark");

        };
    } else{

        document.body.style.backgroundColor = "var(--main-bg-color-light)";
        await setSessionValue('theme', 'light');
        prefersDark.dispatchEvent(changeEvent);

        for (index = 0; index < elements.length; index++){
        
            elements.item(index).classList.remove("dark");
            elements.item(index).classList.add("light");
        
        }
    }

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


