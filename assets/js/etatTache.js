function start(e) {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text", e.target.getAttribute("id"));
}

function over(e) {
    return false; // peut aussi écrire e.preventDefault()
}

function drop(e) {
    object = e.dataTransfer.getData("text");
    e.currentTarget.appendChild(document.getElementById(object));
    e.stopPropagation();
    return false;
}

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

let modalContent = document.querySelector(".modal-content"); 
let cancelBtn = document.querySelector(".cancelBtn");

modalContent.addEventListener("click", function(e) {
  if (e.target == cancelBtn) {
    modal.style.display = "none";
  }
})