const form = document.querySelector('form');
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password1');
const passwordVerif = document.getElementById('cpassword2');


function validateEmail(email) {
    const emailV = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailV.test(email);
}


form.addEventListener('submit', (event) => {
    event.preventDefault();

    const existingErrors = document.querySelectorAll(".error");
    existingErrors.forEach(error => error.remove());


    const email = emailField.value.trim();
    const password = passwordField.value.trim();
    const passwordV = passwordVerif.value.trim();

    let hasError = false; 

    if (!email) {
        hasError = true; 
        const div = document.getElementById("mail");
        const pError = document.createElement("p");
        const input = document.getElementById("email")
        pError.classList.add("error");
        input.classList.add("errors");
        pError.textContent = " ! Veuillez saisir une adresse mail valide.";
        div.appendChild(pError);
    } else if (!validateEmail(email)){
        hasError = true; 
        const div = document.getElementById("mail");
        const pError = document.createElement("p");
        const input = document.getElementById("email")
        pError.classList.add("error");
        input.classList.add("errors");
        pError.textContent = " ! Veuillez saisir une adresse mail valide.";
        div.appendChild(pError);
    }

    if (!password){
        hasError = true; 
        const div = document.getElementById("password");
        const pError = document.createElement("p");
        const input = document.getElementById("password1")
        const input2 = document.getElementById("cpassword2")
        pError.classList.add("error");
        input.classList.add("errors");
        input2.classList.add("errors");
        pError.textContent = " ! Veuillez entrer un mot de passe."
        div.appendChild(pError)
    }else if (password.length < 8 || password.length > 16) {
        hasError = true; 
        const div = document.getElementById("password");
        const pError = document.createElement("p");
        const input = document.getElementById("password1")
        pError.classList.add("error");
        input.classList.add("errors");
        pError.textContent = " ! Le mot de passe doit contenir entre 8 et 16 caractères.";
        div.appendChild(pError)
    }

    if (password != passwordV){
        hasError = true; 
        const div = document.getElementById("cpassword");
        const pError = document.createElement("p");
        const input = document.getElementById("password1")
        const input2 = document.getElementById("cpassword2")
        pError.classList.add("error");
        input.classList.add("errors");
        input2.classList.add("errors");
        pError.textContent = "! Les mot de passe doivent être identiques.";
        div.appendChild(pError)
    }

    if (!hasError){
        alert("Connexion réussie !");
        window.location.href = "../pages/dashboardV2.html";
    }
});
