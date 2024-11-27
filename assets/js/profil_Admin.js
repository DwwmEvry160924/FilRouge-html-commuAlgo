let modalEdit = document.getElementById("modal_edit");
let btnEdit = document.getElementById("S_edit");
let spanEdit = modalEdit.getElementsByClassName("close")[0];
let confirmEdit = document.getElementById("confirm_edit");
let cancelEdit = document.getElementById("cancel_edit");
let message = document.querySelector(".message");



btnEdit.addEventListener('click', function (e) {
    e.preventDefault();
    modalEdit.style.display = "block";
});


spanEdit.addEventListener("click", function (e) {
    e.preventDefault();
    modalEdit.style.display = "none";
});


window.addEventListener('click', function (e) {
    if (e.target == modalEdit) {
        modalEdit.style.display = "none";
    }
});


confirmEdit.addEventListener('click', function (e) {
    e.preventDefault();
    modalEdit.style.display = "none";
   message.textContent = "Les informations du compte ont été modifiées.";
});

cancelEdit.addEventListener('click', function (e) {
    e.preventDefault();
    modalEdit.style.display = "none";
    message.textContent ="";
});


let modalDelete = document.getElementById("modal_delete");
let btnDelete = document.getElementById("S_delete");
let spanDelete = modalDelete.getElementsByClassName("close")[0];
let confirmDelete = document.getElementById("confirm_delete");
let cancelDelete = document.getElementById("cancel_delete");
let messageContainer = document.querySelector(".message-container");


btnDelete.addEventListener('click', function (e) {
    e.preventDefault();
    modalDelete.style.display = "block";
});


spanDelete.addEventListener("click", function (e) {
    e.preventDefault();
    modalDelete.style.display = "none";
});


window.addEventListener('click', function (e) {
    if (e.target == modalDelete) {
        modalDelete.style.display = "none";
    }
});


confirmDelete.addEventListener('click', function (e) {
    e.preventDefault();
    modalDelete.style.display = "none";
    messageContainer.textContent ="Le compte a été supprimé.";
});


cancelDelete.addEventListener('click', function (e) {
    e.preventDefault();
    modalDelete.style.display = "none";
    messageContainer.textContent ="";
});


