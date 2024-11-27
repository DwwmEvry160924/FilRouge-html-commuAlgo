const tasks = [

    { "id": 1, "task-name": "Task 1", "status": "En cours", "project-name": "Projet 1", "date": "27/11/2024"},
    { "id": 2, "task-name": "Task 2", "status": "En cours", "project-name": "Projet 1", "date": "27/11/2023"},
    { "id": 3, "task-name": "Task 1", "status": "Terminé", "project-name": "Projet 2", "date": "27/10/2022"},
    { "id": 4, "task-name": "Task 2", "status": "Terminé", "project-name": "Projet 2", "date": "27/09/2023"},
    { "id": 5, "task-name": "Task 3", "status": "A Faire", "project-name": "Projet 3", "date": "22/07/2024"},
    { "id": 6, "task-name": "Task 2", "status": "A Faire", "project-name": "Projet 3", "date": "20/06/2024"},
]

const inputFiltre = document.getElementById("maRecherche");
let filtre = inputFiltre.value.toUpperCase();
let tachefiltre = tasks

const rows = document.getElementById("rows")

function convertirDate(dateString) {
    const [jour, mois, annee] = dateString.split('/'); // Sépare JJ, MM, AAAA
    return new Date(`${annee}-${mois}-${jour}`); // Recompose en format ISO
}


inputFiltre.addEventListener("keyup", (e) => {
    filtre = e.target.value.toUpperCase();
    if (filtre) {


        tachefiltre = tasks.filter(task =>
            task["task-name"].toUpperCase().includes(filtre) || task["project-name"].toUpperCase().includes(filtre) || task["status"].toUpperCase().includes(filtre)
        )
    }

    else {
        tachefiltre = tasks;
    }
    console.log(tachefiltre)
    afficherTache()
}
)

function afficherTache() {
    rows.innerHTML = "";
    if (tachefiltre.length === 0) {
        const emptyRow = document.createElement("tr");
        const emptyCell = document.createElement("td");
        emptyCell.textContent = "Aucun résultat trouvé";

        emptyRow.classList.add("emptyRow")

        emptyRow.appendChild(emptyCell);
        rows.appendChild(emptyRow);
    } else {
        tachefiltre.forEach(task => {
            const row = document.createElement("tr");
            const status = document.createElement("td");
            const taskName = document.createElement("td");
            const projectName = document.createElement("td");

            if (task.status === "Terminé") {
                row.classList.add("finished");
            } else if (task.status === "En cours") {
                row.classList.add("progress");
            } else if (task.status === "A Faire") {
                row.classList.add("todo");
            }

            status.textContent = task.status;
            taskName.textContent = task["task-name"];
            projectName.textContent = task["project-name"];

            row.appendChild(status);
            row.appendChild(taskName);
            row.appendChild(projectName);
            rows.appendChild(row);
        });
    }
}

const toggleCheckbox = document.getElementById("toggle-dropdown");
const dropdownMenu = document.querySelector(".dropdown-menu")
dropdownMenu.addEventListener("click", (event)=>{

    const filter = event.target.textContent.trim();

    if (filter === "A-Z"){

        tachefiltre.sort((a, b) => a["task-name"].localeCompare(b["task-name"]));
    }

    else if (filter === "Etat" ) {

    const stateOrder = { "A Faire": 1, "En cours": 2, "Terminé": 3 };

    tachefiltre.sort((a, b) => a["status"].localeCompare(b["status"]));


    }

    else if  (filter === "Date") {

        tachefiltre.sort((a, b) => new Date(convertirDate(a["date"]))  - new Date(convertirDate(b["date"])));

    }

    
    afficherTache();
})

afficherTache();