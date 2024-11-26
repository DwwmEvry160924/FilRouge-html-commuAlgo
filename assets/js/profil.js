// Modal Suppression Compte

let modal = document.getElementById("modal");
let btn = document.getElementById("S_comment");
let span = document.getElementsByClassName("close")[0];
let confirm = document.getElementById("confirm");
let annul = document.getElementById("annul")



btn.addEventListener('click', function (e) {
    e.preventDefault();
    modal.style.display = "block";
})

span.addEventListener("click", function (e) {
    e.preventDefault();
    modal.style.display = "none";
})

window.addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target == modal) {
        modal.style.display = "none";
    }
})

confirm.addEventListener('click', function (e) {
    e.preventDefault();

    modal.style.display = "none";
})

annul.addEventListener('click', function (e) {
    e.preventDefault();
    modal.style.display = "none";
})

// Modal Modifications Infos compte

let modal2 = document.getElementById("modal2");
let btn2 = document.getElementById("Account");
let span2 = document.getElementsByClassName("close2")[0];
let valid = document.getElementById("valid")
let cancel = document.getElementById("annule")

btn2.addEventListener('click', function (e) {
    e.preventDefault();
    modal2.style.display = "block";
})

span2.addEventListener("click", function (e) {
    e.preventDefault();
    modal2.style.display = "none";
})

window.addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target == modal2) {
        modal2.style.display = "none";
    }
})

valid.addEventListener('click', function (e) {
    e.preventDefault();
    modal2.style.display = "none";
})

cancel.addEventListener('click', function (e) {
    e.preventDefault();
    modal2.style.display = "none";
})




const form = document.querySelector("#check")

form.addEventListener('click', (event) => {


    const passwordField = document.getElementById('npassword');
    const password = passwordField.value.trim();
    const vPasswordField = document.getElementById("v_npassword");
    const passwordV = vPasswordField.value.trim();
    const lPasswordField = document.getElementById("lpassword");
    const lpassword = ("Kevinestnul");
    // const lpassword = lPasswordField.value.trim();

    let hasError = false;


    const existingErrors = document.querySelectorAll(".error");
    existingErrors.forEach(error => error.remove());

    if (!password) {
        hasError = true;
        const div = document.getElementsByClassName("colonne1")[0];
        const pError = document.createElement("p");
        pError.classList.add("error");
        passwordField.classList.add("errors");
        pError.textContent = " ! Veuillez entrer un mot de passe.";
        div.appendChild(pError);
    } else if (password.length < 8 || password.length > 16) {
        hasError = true;
        const div = document.getElementsByClassName("colonne1")[0];
        const pError = document.createElement("p");
        pError.classList.add("error");
        passwordField.classList.add("errors");
        pError.textContent = " ! Le mot de passe doit contenir entre 8 et 16 caractères.";
        div.appendChild(pError);
    }

    if (!passwordV) {
        hasError = true;
        // Applications de la div sur l'index 0 de ma class
        const div = document.getElementsByClassName("colonne1")[1];
        const pError = document.createElement("p");
        pError.classList.add("error");
        vPasswordField.classList.add("errors");
        pError.textContent = " ! Veuillez confirmer votre mot de passe.";
        div.appendChild(pError);
    } else if (passwordV.length < 8 || passwordV.length > 16) {
        hasError = true;
        const div = document.getElementsByClassName("colonne1")[1];
        const pError = document.createElement("p");
        pError.classList.add("error");
        vPasswordField.classList.add("errors");
        pError.textContent = " ! Le mot de passe de confirmation doit contenir entre 8 et 16 caractères.";
        div.appendChild(pError);
    }

    if (!lpassword) {
        hasError = true;
        const div = document.getElementsByClassName("colonne2")[0];
        const pError = document.createElement("p");
        pError.classList.add("error");
        lPasswordField.classList.add("errors");
        pError.textContent = " ! Veuillez entrer votre mot de passe actuel";
        div.appendChild(pError);
    } else if (lpassword.length < 8 || lpassword.length > 16) {
        hasError = true;
        const div = document.getElementsByClassName("colonne2")[0];
        const pError = document.createElement("p");
        pError.classList.add("error");
        lPasswordField.classList.add("errors");
        pError.textContent = " ! Le mot de passe doit contenir entre 8 et 16 caractères.";
        div.appendChild(pError);
    }

    if (password !== passwordV) {
        hasError = true;
        const div = document.getElementsByClassName("colonne1")[0];
        const pError = document.createElement("p");
        pError.classList.add("error");
        passwordField.classList.add("errors");
        vPasswordField.classList.add("errors");
        pError.textContent = "! Les mots de passe doivent être identiques.";
        div.appendChild(pError);
    }

    if (lpassword !== lpassword) {
        hasError = true;
        const div = document.getElementsByClassName("colonne2")[0];
        const pError = document.createElement("p");
        pError.classList.add("error");
        lPasswordField.classList.add("errors");
        pError.textContent = "! Le mot de passe doit être identique à celui existant.";
        div.appendChild(pError);
    }

    if (!hasError) {
        alert("Mot de Passe Modifié avec succés");
        window.location.href = "../pages/Profile.html";
    }
});

// const form = document.querySelector('form');
// const nameField = document.getElementById("Nom");
// const fnField = document.getElementById("Prenom");
// const addField = document.getElementById("Adresse");
// const emailField = document.getElementById('email');
// const birthField = document.getElementById("Naissance");
// const telField = document.getElementById("Tel");


// function validateEmail(email) {
//     const emailField = (/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
//     return emailField.test(email);
// }

// // function valideName(){
// //     const nameField = -;
// //     return nameField.test
// // }

// form.addEventListener('submit', (event) => {
//     event.preventDefault();

//     const existingErrors = document.querySelectorAll(".error");
//     existingErrors.forEach(error => error.remove());


//     const email = emailField.value.trim();

//     let hasError = false;

//     if (!email) {
//         hasError = true;
//         const div = document.getElementById("email");
//         const pError = document.createElement("p");
//         const input = document.getElementById("email")
//         pError.classList.add("error");
//         input.classList.add("errors");
//         pError.textContent = " ! Veuillez saisir une adresse mail valide.";
//         div.appendChild(pError);
//     } else if (!validateEmail(email)){
//         hasError = true;
//         const div = document.getElementById("email");
//         const pError = document.createElement("p");
//         const input = document.getElementById("email")
//         pError.classList.add("error");
//         input.classList.add("errors");
//         pError.textContent = " ! Veuillez saisir une adresse mail valide.";
//         div.appendChild(pError);
//     }

//     if (!hasError){
//         alert("Connexion réussie !");
//         window.location.href = "../pages/dashboardV2.html";
//     }


//     if (!password){
//         hasError = true;
//         const div = document.getElementById("colonne1");
//         const pError = document.createElement("p");
//         const input = document.getElementById("npassword")
//         const input2 = document.getElementById("v_password")
//         pError.classList.add("error");
//         input.classList.add("errors");
//         input2.classList.add("errors");
//         pError.textContent = " ! Veuillez entrer un mot de passe."
//         div.appendChild(pError)
//     }else if (password.length < 8 || password.length > 16) {
//         hasError = true;
//         const div = document.getElementById("password");
//         const pError = document.createElement("p");
//         const input = document.getElementById("password1")
//         pError.classList.add("error");
//         input.classList.add("errors");
//         pError.textContent = " ! Le mot de passe doit contenir entre 8 et 16 caractères.";
//         div.appendChild(pError)
//     }
// });
