const form = document.querySelector('form');
const emailField = document.getElementById('EMAIL');
const passwordField = document.getElementById('MDP');


form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = emailField.value.trim();
    const password = passwordField.value.trim();

    if (!email || !password) {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    if (!validateEmail(email)) {
        alert("Veuillez entrer une adresse mail valide.");
        return;
    }

    if (password.length < 8 || password.length > 16) {
        alert("Le mot de passe doit contenir entre 8 et 16 caractères.");
        return;
    }

    alert("Connexion réussie !");
    window.location.href = "../pages/dashboardv2.html";
});

function validateEmail(email) {
    const emailV = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailV.test(email);
}