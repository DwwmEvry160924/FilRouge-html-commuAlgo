
let editIcons = document.querySelectorAll(".edit-icon");

editIcons.forEach((icon) => {
    icon.addEventListener('click', (e) => { 
        e.preventDefault();
        
        let titleElement = icon.closest('h4').querySelector('.title-text');
        let inputElement = icon.closest('h4').querySelector('.title-input');
        
        titleElement.style.display = "none";
        inputElement.style.display = "block";
        
        inputElement.value = titleElement.textContent;
    });
});

let saveButtons = document.querySelectorAll(".title-input");

saveButtons.forEach((input) => {
    input.addEventListener('blur', (e) => { 
        let titleElement = input.closest('h4').querySelector('.title-text');
        let inputElement = input.closest('h4').querySelector('.title-input');
        

        titleElement.textContent = inputElement.value;
        titleElement.style.display = "block";
        inputElement.style.display = "none";
    });
});

const hideIcon = document.querySelector(".icon-left");
const section = document.getElementById("projectManager");

hideIcon.addEventListener('click', ()=> {
    if(section.style.display === "none") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
});

