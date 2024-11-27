// window.onbeforeunload = function (event) {
//     event.returnValue = "message par défaut du navigateur"; // pas possible de choisir le msg affiché avec cette méthode //
// };

let editIcons = document.querySelectorAll(".edit-icon");

editIcons.forEach((icon) => {
    icon.addEventListener('click', (e) => {
        e.preventDefault();

        let titleElement = icon.closest('.Title').querySelector('#title-text');
        let inputElement = icon.closest('.Title').querySelector('.title-input');

        titleElement.style.display = "none";
        inputElement.style.display = "block";
        inputElement.value = titleElement.textContent;

        inputElement.addEventListener('blur', () => {
            titleElement.textContent = inputElement.value;
            titleElement.style.display = "block";
            inputElement.style.display = "none";
        });
    });
});

const form = document.querySelector("form");
const titre = document.getElementById('titre');
const dateL = document.getElementById('date');
const description = document.getElementById('description');

const titreError = document.getElementById('titreError');
const dateError = document.getElementById('dateError');
const descriptionE = document.getElementById('descriptionError');
const valid = document.getElementsByClassName('valid');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    titreError.textContent = "";
    dateError.textContent = "";
    descriptionE.textContent = "";
    valid.textContent = "";
    
    let isValid = true

    if(!titre || titre.value.trim() === ''){
        titreError.textContent = "Entrer le nom de projet. 🐱‍💻"
        isValid = false;
    }

    if(!dateL || dateL.value.trim() === '' ){
        dateError.textContent = "Entrer une date valide. 👨‍🔧 "
        isValid = false;
    }
    if(!description || description.value.trim() === ''){
        descriptionE.textContent = "Entrer une description pour le projet. 📃"
        isValid = false;
    }

    if (isValid) {
        valid.textContent = "Le projet à bien été enregistré. 🔐"
    }
});

const titreLabel = document.getElementById('title-text');
const titreInput = document.getElementById('title-input');

titreLabel.addEventListener('click', () => {

    titreInput.style.display = 'block'; 
})


