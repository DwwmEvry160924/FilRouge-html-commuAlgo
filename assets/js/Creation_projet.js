const form = document.querySelector("form");
const projet = document.getElementById('project');
const dateD = document.getElementById('dateDebut');
const dateF = document.getElementById('dateFin');
const description = document.getElementById('message');

const projectE = document.getElementById('projectError');
const dateDError = document.getElementById ('dateDebutError');
const dateFError = document.getElementById('dateFinError');
const descriptionE = document.getElementById('descriptionError');
const valid = document.getElementById ('valide')


form.addEventListener('submit', (event) => {
    event.preventDefault();

    projectE.textContent = "";
    dateDError.textContent = "";
    dateFError.textContent = "";
    descriptionE.textContent = "";
    valid.textContent = "";

   let isValid = true

    if(projet.value.trim() === '') {
        projectE.textContent = "Entrer le nom de projet. 🐱‍💻"

        isValid = false;

    }if (dateD.value === '') {
        dateDError.textContent = "Entrer une date de début. 👶"
        isValid = false;

    }if (dateF.value === '') {
        dateFError.textContent = "Entrer une date de fin. 👴"
        isValid = false;

    } if (description.value.trim() === '') {
        descriptionE.textContent = "Entrer une description pour le projet. 📃"
        isValid = false;

    } if (isValid) {
        valid.textContent = "Le projet à bien été enregistré. 🔐"
    }

});


