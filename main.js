const menuButton = document.createElement("div");
menuButton.innerHTML = "&#9776;"
menuButton.className = "menu-button";
const div = document.getElementById("page-wrapper2");
div.appendChild(menuButton);

function menu() {
    const menu = document.getElementById("aside");
    if (menu.style.display === "block") {
        menu.style.display = "none";    
    } else {
        menu.style.display = "block";
    }
}


menuButton.addEventListener("click", menu);