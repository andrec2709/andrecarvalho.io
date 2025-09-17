
async function invalidMessage(state){

    let alert_widget = document.getElementById("alert-container");
    let alert_message = document.getElementById("alert-message");
    

    const session = await getSessionInfo();
    const session_json = await session.json();
    switch (state) {
        case 0:
            alert_widget.classList.remove("failed");
            alert_widget.classList.add("success");
            
            alert_message.innerText = 
            session_json.language == "pt" 
            ? "Enviado" : "Sent";
            
            break;

        case 1:
            alert_widget.classList.remove("success");
            alert_widget.classList.add("failed")
            
            alert_message.innerText = 
            session_json.language == "pt"
            ? "Por favor preencha todos os campos"
            : "Please fill out all fields";

            break;
        
        case 2:
            alert_widget.classList.remove("success");
            alert_widget.classList.add("failed");

            alert_message.innerText = 
            session_json.language == "pt"
            ? "E-mail inválido"
            : "Invalid e-mail";

            break;

    }


    alert_widget.style.opacity = "100";
    alert_widget.style.bottom = "70px";
    alert_widget.style.visibility = "visible";

    setTimeout(() => {
        alert_widget.style.opacity = "0";
        alert_widget.style.bottom = "-60px";
    }, 4000);

}

async function onSubmit(){

        let username = document.getElementById("username");
        let email = document.getElementById("email");
        let message = document.getElementById("message");
        
        const pattern = /^((?!.*\.\.|.*\.@|^\.|^-)[a-zA-Z0-9._+%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/g;
        // let emailregex = new RegExp(pattern);

        if (username.value === "" || email.value === "" || message.value === ""){
            await invalidMessage(1);
            document.getElementById("submit-form-btn").disabled = false;
            grecaptcha.reset();
        }
        else if (email.value.search(pattern) === -1){
            console.log("Invalid e-mail");
            await invalidMessage(2);
            document.getElementById("submit-form-btn").disabled = false;
            grecaptcha.reset();
        }
        else{
            await invalidMessage(0);
            document.getElementById("contact-me-form").requestSubmit();   
        }

}

document.getElementById("contact-me-form").addEventListener("submit", async function(e) {
    e.preventDefault();
    let formdt = new FormData(this);

    const response = await fetch("../api/ParseForm.php", {
        body: formdt,
        method: "POST"
    });

    grecaptcha.reset();
    this.reset();

});
