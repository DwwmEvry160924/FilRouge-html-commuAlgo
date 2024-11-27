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
