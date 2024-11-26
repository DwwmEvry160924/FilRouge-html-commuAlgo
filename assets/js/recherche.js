const tasks = [

    {"id": 1,"task-name": "Task 1","status": "En cours","project-name": "Projet 1",},
    {"id": 2,"task-name": "Task 2","status": "En cours","project-name": "Projet 1",},
    {"id": 3,"task-name": "Task 1","status": "Terminé","project-name": "Projet 2",},
    {"id": 4,"task-name": "Task 2","status": "Terminé","project-name": "Projet 2",},
    {"id": 5,"task-name": "Task 3","status": "A Faire","project-name": "Projet 3",},
    {"id": 6,"task-name": "Task 2","status": "A Faire","project-name": "Projet 3",},
]

const inputFiltre = document.getElementById("maRecherche");
let filtre = inputFiltre.value.toUpperCase();
let tachefiltre = tasks

const rows = document.getElementById("rows")

inputFiltre.addEventListener("keyup", (e) => {
filtre = e.target.value.toUpperCase();
    if (filtre) {


        tachefiltre = tasks.filter(task =>
            task["task-name"].toUpperCase().includes(filtre) || task["project-name"].toUpperCase().includes(filtre) || task["status"].toUpperCase().includes(filtre)
        )}

    else {
        tachefiltre = tasks;}
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

afficherTache ()

document.querySelector('.dropdown-menu li:nth-child(1)').addEventListener('click', () => {
    filteredTasks.sort((a, b) => a["task-name"].localeCompare(b["task-name"]));
    afficherTache();
});


document.querySelector('.dropdown-menu li:nth-child(2)').addEventListener('click', () => {
    const statusFilter = prompt("Entrez un statut (A Faire, En cours, Terminé) :");
    filteredTasks = tasks.filter(task => task.status.toUpperCase() === statusFilter.toUpperCase());
    afficherTache();
});


document.querySelector('.dropdown-menu li:nth-child(3)').addEventListener('click', () => {
    filteredTasks.sort((a, b) => new Date(a["date"]) - new Date(b["date"]));
    afficherTache();
});


