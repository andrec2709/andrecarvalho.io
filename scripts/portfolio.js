class BaseCard extends HTMLElement{
    // Common properties and methods for FCard and RepoCard
    
    static observedAttributes = ["class"];

    name;
    desc;
    date;

    constructor(){
        super();
    }

    connectedCallback(){}

    getProp(prop){
        return this.prop;
    }

    setProp(prop, value){

    }

}

class FCard extends BaseCard {
    // "Feature Card"

    title;

    constructor(){
        super();
    }

    connectedCallback(){

        this.setAttribute('class', 'f-card-main repos-common ');
        this.setAttribute('role', 'button');
        this.setAttribute('tabindex', '0');

        const card_title = document.createElement('p');
        card_title.setAttribute('class', 'f-card-title ');
        
        const card_name = document.createElement('p');
        card_name.setAttribute('class', 'f-card-name f-card-content ');
        
        const card_desc = document.createElement('p');
        card_desc.setAttribute('class', 'f-card-desc f-card-content ');
        
        const card_date = document.createElement('p');
        card_date.setAttribute('class', 'f-card-date f-card-content ');

        this.appendChild(card_title);
        this.appendChild(card_name);
        this.appendChild(card_desc);
        this.appendChild(card_date);
        
    }

    setProp(prop, value){
        this.prop = value;

        switch (prop) {
            case "title":
                this.childNodes.item(0).innerText = value;
                break;
            case "name":
                this.childNodes.item(1).innerText = value;
                break;
            case "desc":
                this.childNodes.item(2).innerText = value;
                break;
            case "date":
                this.childNodes.item(3).innerText = value;
                break;
        }

    }
    
}

class RepoCard extends BaseCard{
    
    constructor(){
        super();
    }

    connectedCallback(){
        this.setAttribute('class', 'repos-list-item repos-common ');
        this.setAttribute('role', 'button');
        this.setAttribute('tabindex', '0');

        const card_name = document.createElement('p');
        card_name.setAttribute('class', 'repos-list-item-name ');
        
        const card_desc = document.createElement('p');
        card_desc.setAttribute('class', 'repos-list-item-desc ');
        
        const card_date = document.createElement('p');
        card_date.setAttribute('class', 'repos-list-item-date ');

        this.appendChild(card_name);
        this.appendChild(card_desc);
        this.appendChild(card_date);

    }

    setProp(prop, value){
    this.prop = value;

    switch (prop) {
        case "name":
            this.childNodes.item(0).innerText = value;
            break;
        case "desc":
            this.childNodes.item(1).innerText = value;
            break;
        case "date":
            this.childNodes.item(2).innerText = value;
            break;
    }

    }
    

}

customElements.define("repo-card", RepoCard);
customElements.define("f-card", FCard);


async function getData(){
    // Gets information about the public repositories, and their total commits

    const response = await fetch("../api/GetReposInfo.php");

    const res_json = await response.json();

    return res_json;

}

async function populateRepoList(){
    const pub_repos = await getData();
    // Container for featured cards
    const fcont = document.getElementById("feature-container");
    // Container for all public repositories
    const repolist = document.getElementById("repos-list");

    let most_commits_repo = null;
    let most_recent_repo = null;
    

    pub_repos.forEach(repo => {

        // Generating each repository's card
        const rc = document.createElement('repo-card');

        repolist.appendChild(rc);

        rc.setProp('name', repo['repo_name']);
        rc.setProp('desc', repo['description'] === null ? "No description available" : repo['description']);
        rc.setProp('date', repo['updated_at']);
        // Redirect to repo's page on click
        rc.addEventListener('click', (e) => {
            window.open(`https://github.com/andrec2709/${repo['repo_name']}`);
        });

        // Assigns first repo as most_commits_repo, and then starts comparing total nº of commits on next iterations
        if (most_commits_repo === null){
            most_commits_repo = repo;
            
        }
        else if (repo['commits'] > most_commits_repo['commits']){
            most_commits_repo = repo;
        }

        // Assigns first repo as most_recent_repo, and then starts comparing last updated repo on next iterations
        if (most_recent_repo === null){
            most_recent_repo = repo;
        }
        else if (repo['updated_at'] > most_recent_repo['updated_at']){
            most_recent_repo = repo;
        }

    });

    // Creates first "feature" card (Most commits);
    const fc = document.createElement('f-card');
    fcont.appendChild(fc);

    // Determined preferred language for first time load
    const pref_lang = (localStorage.getItem('lang') || 'en') == 'en' ? 'en' : 'pt';
    const most_commits = pref_lang == 'en' ? 'Most commits: ' : 'Mais commits: ';
    const last_up = pref_lang == 'en' ? 'Last updated' : 'Última atualização';

    // Defining content of the elements
    fc.setProp("title", `${most_commits} ${most_commits_repo['commits']}`);
    fc.setProp("name", most_commits_repo['repo_name']);
    fc.setProp("desc", most_commits_repo['description'] === null ? "No description available" : most_commits_repo['description']);
    fc.setProp("date", most_commits_repo['updated_at']);
    
    // Sets i18n (translation) key
    fc.firstChild.dataset.i18n = "portfolio.most_commits";
    // This holds the count of total commits itself, it will be appended to the i18n key when the user switches languages
    fc.firstChild.dataset.extra = most_commits_repo['commits'];

    // Creates second "feature" card (Last updated)
    const fc2 = document.createElement('f-card');
    fcont.appendChild(fc2);

    // Defining content of the elements
    fc2.setProp("title", last_up);
    fc2.setProp("name", most_recent_repo['repo_name']);
    fc2.setProp("desc", most_recent_repo['description'] === null ? "No description available" : most_recent_repo['description']);
    fc2.setProp("date", most_recent_repo['updated_at']);
    // Sets i18n (translation) key
    fc2.firstChild.dataset.i18n = "portfolio.last_up";

    fc.addEventListener('click', (e) => {
        window.open(`https://github.com/andrec2709/${most_commits_repo['repo_name']}`);
    });

    fc2.addEventListener('click', (e) => {
        window.open(`https://github.com/andrec2709/${most_recent_repo['repo_name']}`);
    });

}

populateRepoList();