const emailField = document.getElementById('email');
const emailE = document.getElementById('emailError');
const form = document.querySelector('form'); 

function validateEmail(email) {
    const emailV = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    return emailV.test(email);
}

form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const email = emailField.value.trim();

    emailError.textContent = ""; 

    if (!email) {
        emailError.textContent = "Veuillez entrer une adresse mail. 🤔";
    } else if (!validateEmail(email)) {
        emailError.textContent = "Veuillez entrer une adresse mail valide. 🤡";
    } else {
        confirmation.textContent = "Email envoyé avec succès ! 🚀"; 
    }
});
