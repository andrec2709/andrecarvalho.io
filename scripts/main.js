// translation handler
class I18n {

    constructor() {
        if (I18n.instance) return I18n.instance;
        this.lang = localStorage.getItem('lang') || 'en';
        I18n.instance = this;
    
    }

    static getInstance() {
        if (!I18n.instance) {
            I18n.instance = new I18n();
        }
        return I18n.instance;
    }

    get(key){
        return key.split('.').reduce((obj, part) => obj?.[part], this.translations);
    }

    apply() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const text = this.get(key);

            if (text) el.innerHTML = text;
        });
    }

    async setLang(lang) {
        localStorage.setItem('lang', lang);
        this.lang = lang;
        await setSessionValue('language', lang);
        document.documentElement.setAttribute('lang', lang);
        this.apply();
    }

    async loadLang(lang) {
        const response = await fetch(`/lang/${lang}.json`);
        this.translations = await response.json();
        this.setLang(lang);
    }
}

// Callouts
class CallOut extends HTMLElement {
    supportedTypes = ['note'];
    
    static get observedAttributes(){
        return ['class', 'cout-type'];
    }
    
    constructor() {
        super();
    }

    attributeChangedCallback(name, oldValue, newValue){
        if (!(oldValue !== newValue)) {
            return;
        }
        
        switch (name) {
            case 'cout-type':
                const calloutIcon = this.getElementsByClassName('callout-icon').item(0);

                if (calloutIcon) this.defineCalloutType(calloutIcon, newValue, oldValue);

                break;
        }

    }

    connectedCallback(){
        const callout_icon = document.createElement('img');
        const callout_type = this.getAttribute('cout-type');

        this.defineCalloutType(callout_icon, callout_type);

        callout_icon.classList.add('callout-icon');
        callout_icon.classList.add('callout-item');
        callout_icon.setAttribute('aria-label', 'callout icon');
        callout_icon.setAttribute('alt', "Callout icon");

        this.prepend(callout_icon);

    }

    defineCalloutType(lm, newValue, oldValue = "") {

        if (!this.supportedTypes.includes(newValue)){
            return;
        }        

        switch (newValue) {
            case 'note':
                lm.src = '/assets/icons/pen.svg';
                break;
        }

        if (oldValue) {
            this.classList.replace(oldValue, newValue);
        } else {
            this.classList.add(newValue);
        }
    }
}

customElements.define('call-out', CallOut);

// <------ Global variables -------->

//
// translation handler
const i18n = new I18n();

let pref_btn_container = document.getElementsByClassName('pref-btn-container').item(0);
let theme_options = document.getElementById('theme-options');
let lang_options = document.getElementById('lang-options');

// Others

let prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
const defaultTheme = 'light';
let themeBeforePrint = getTheme();

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

function showMenu(e) {
    let thisMenu;

    switch (e.dataset.menu) {
        case 'theme':
            thisMenu = document.getElementById("theme-options");
            document.getElementById('lang-options').classList.remove('opened');
            break;
        case 'lang':
            thisMenu = document.getElementById('lang-options');
            document.getElementById('theme-options').classList.remove('opened');
            break;
    }

    let height = parseInt(getComputedStyle(thisMenu).height.replace('px', ''));

    if (!thisMenu.classList.contains('opened')) {
        thisMenu.hidden = false;
    }

    // nested rAF so it properly works on firefox too
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            thisMenu.classList.toggle('opened');
        });
    });

}

function setTheme(theme, isString = false){
    // When user clicks a theme from the dropdown menu, it runs this functions.
    const current = getTheme();
    let toTheme;
    
    if (isString) {
        toTheme = theme;
    } else {
        toTheme = theme.dataset.value;
    }

    localStorage.setItem('theme', toTheme);
    document.documentElement.classList.replace(`theme-${current}`, `theme-${toTheme}`);
}

function getTheme(){
    const current = localStorage.getItem('theme') || defaultTheme;
    return current;
}

function toggleSidebar(e){
    let sidebar = document.getElementsByClassName('nav-sidebar').item(0);
    if (e.dataset.action === 'open'){
        sidebar.classList.add('opened');
    } else {
        sidebar.classList.remove('opened');
    }
}

function toggleLang(e){
    i18n.loadLang(e.dataset.value);
}


// <-------------- Events ---------------->

// Makes sure element is removed from the document on end of transition
theme_options.addEventListener('transitionend', (e) => {
    if (!theme_options.classList.contains('opened')) {
        theme_options.hidden = true;
    }
});
// Makes sure element is removed from the document on end of transition
lang_options.addEventListener('transitionend', (e) => {
    if (!lang_options.classList.contains('opened')) {
        lang_options.hidden = true;
    }
});
// Closes the menus when clicking out of them
document.addEventListener('click', (e) => {
    if (!pref_btn_container.contains(e.target)){
        theme_options.classList.remove('opened');
        lang_options.classList.remove('opened');
    }
});

window.addEventListener('beforeprint', (e) => {
    themeBeforePrint = getTheme();
    
    setTheme(defaultTheme, true);

});

window.addEventListener('afterprint', (e) => {
    setTheme(themeBeforePrint, true);
});

// <-------------------------------->