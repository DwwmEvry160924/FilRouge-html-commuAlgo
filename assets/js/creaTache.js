window.onbeforeunload = function(event) {
    event.returnValue = "message par défaut du navigateur"; // pas possible de choisir le msg affiché avec cette méthode //
  };

// création modal "Etes-vous sûr de vouloir vous déconnecter ?" //

// recup modal
let modal = document.getElementById("dcModal");

//recup l'icone qui ouvre la modal
let dc = document.getElementById("dcIcone");

// recup le <span> qui ferme la modal
let span = document.querySelector(".close");

// qd user clique sur icone => ouvre la modal
dc.addEventListener( "click", function(e) { 
    e.preventDefault();
    modal.style.display = "block";
})

// When the user clicks on <span> (x), close the modal
span.addEventListener( "click", function() { // Utilisez addEventListener plutot que directement onclick car onclick s affichera dans notre html
    modal.style.display = "none";
})

// When the user clicks anywhere outside of the modal, close it

window.addEventListener( "click", function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  })

let modalContent = document.querySelector(".modal-content"); // j'avais oublié le document. avant le querySelector (bien faire attention à ca)
let cancelBtn = document.querySelector(".cancelBtn");

modalContent.addEventListener("click", function(e) {
  if (e.target == cancelBtn) {
    modal.style.display = "none";
  }
})

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


