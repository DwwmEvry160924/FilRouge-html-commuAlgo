

const tasks = [

    {
        "id": 1,
        "task-name": "Task 1",
        "status": "En cours",
        "project-name": "Projet 1",

    },
    {
        "id": 2,
        "task-name": "Task 2",
        "status": "En cours",
        "project-name": "Projet 1",

    },
    {
        "id": 3,
        "task-name": "Task 1",
        "status": "Terminé",
        "project-name": "Projet 2",

    },
    {
        "id": 4,
        "task-name": "Task 2",
        "status": "Terminé",
        "project-name": "Projet 2",

    },
    {
        "id": 5,
        "task-name": "Task 3",
        "status": "A Faire",
        "project-name": "Projet 3",

    },
    {
        "id": 6,
        "task-name": "Task 2",
        "status": "A Faire",
        "project-name": "Projet 3",

    },
]



const rows = document.getElementById("rows")





document.addEventListener('DOMContentLoaded', () => {
    // const rows = document.querySelectorAll('table tbody tr');
    tasks.forEach(task => {
        const row = document.createElement("tr");
        const status = document.createElement("td");
        const taskName = document.createElement("td");
        const projectName = document.createElement("td");

        if (task.status === "Terminé") {
            row.classList.add("finished")
        }

        else if (task.status === "En cours") {
            row.classList.add("progress")
        }
        else if(task.status === "A Faire") {
            row.classList.add("todo")
        }




        status.textContent = task.status;
        projectName.textContent = task["project-name"];
        taskName.textContent = task["task-name"];

        row.appendChild(status);
        row.appendChild(taskName)
        row.appendChild(projectName)
        rows.appendChild(row)
    })
});


let values = "2"


const result = tasks.filter((task) => task['task-name'].includes (values));

console.log(result);





