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