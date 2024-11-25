
const form = document.querySelector('form');
const emailField = document.getElementById('EMAIL');
const passwordField = document.getElementById('MDP');
const PasswordError = document.getElementById('passwordError');
const EmailError = document.getElementById('emailError');

function validateEmail(email) {
    const emailV = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    return emailV.test(email);
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = emailField.value.trim();
    const password = passwordField.value.trim();

    EmailError.textContent = "";
    PasswordError.textContent = "";

    let isValid = true;

    if (!email) {
        EmailError.textContent = "Veuillez entrer une adresse mail.🤔";
        isValid = false;
    } else if (!validateEmail(email)) {
        EmailError.textContent = "Veuillez entrer une adresse mail valide.🤡";
        isValid = false;
    }

    if (!password) {
        PasswordError.textContent = "Veuillez entrer un mot de passe.😔";
        isValid = false;
    } else if (password.length < 8 || password.length > 16) {
        PasswordError.textContent = "Veuillez entrer un mot de passe compris entre 8 et 16 caractères.🤫";
        isValid = false;
    }

    if (isValid) {
        window.location.href = "../pages/dashboardv2.html";
    }
});



