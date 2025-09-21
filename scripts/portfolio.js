class RepoCard extends HTMLDivElement {

    constructor(){
        super();
        
    }
    
}

customElements.define("repo-card", RepoCard);


async function getData(){
    const response = await fetch("../api/GetReposInfo.php");

    const res_json = await response.json();

    res_json.forEach(element => {
        console.log(element['id']);
    });
}



getData();

