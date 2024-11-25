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
span.onclick = function() { // Utilisez addEventListener plutot que directement onclick car onclick s affichera dans notre html
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }


let btnConfirm = querySelector(".btnConfirm");
let btnCancel = querySelector(".btnCancel");
/*
window.onclick = function(event) {
    if (event.target == btnCancel) {
      modal.style.display = "none";
    }
    else if (event.target == btnConfirm) {
        window.location.href = "../pages/Connexion.html"; // Remplacez par l'URL de votre page
    }
  }
    */