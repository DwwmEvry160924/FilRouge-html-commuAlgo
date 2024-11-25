let modal = document.getElementById("modal");
let btn = document.getElementById("S_comment");
let span = document.getElementsByClassName("close")[0];
let confirm = document.getElementById("confirm");
let annul = document.getElementById("annul")



btn.addEventListener ('click', function(e){
    e.preventDefault();
    modal.style.display = "block"; 
})

span.addEventListener("click", function(e){
    e.preventDefault();
    modal.style.display ="none";
})

window.addEventListener('click', function(e){
    e.preventDefault();
    if (e.target == modal){
        modal.style.display = "none"; 
    }
})

confirm.addEventListener ('click', function(e){
    e.preventDefault();

    modal.style.display = "none"; 
})

annul.addEventListener ('click', function(e){
    e.preventDefault();
    modal.style.display = "none"; 
})


let modal2 = document.getElementById("modal2");
let btn2 = document.getElementById("Account");
let span2 = document.getElementsByClassName("close2")[0];
let valid = document.getElementById("valid")

btn2.addEventListener ('click', function(e){
    e.preventDefault();
    modal2.style.display = "block"; 
})

span2.addEventListener("click", function(e){
    e.preventDefault();
    modal2.style.display ="none";
})

window.addEventListener('click', function(e){
    e.preventDefault();
    if (e.target == modal2){
        modal2.style.display = "none"; 
    }
})

valid.addEventListener ('click', function(e){
    e.preventDefault();
    modal2.style.display = "none"; 
})