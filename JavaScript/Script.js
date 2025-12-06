function utilisateur(event){
    event.preventDefault(); // bloque le rechargement

    let input = document.getElementById("name").value; // stoque l'identifiant

    if(input == ""){
        alert("Merci de rentrer votre nom !");
    }
    else {
        localStorage.setItem("spotypasfyUser", input);
        window.location.href = "accueil.html";
    }
}

function nameutilisateur() {
    // Récupère le nom stocke
    const username = localStorage.getItem("spotypasfyUser");

    if (username) {
        document.getElementById("welcome").textContent = `Bienvenue, ${username} 🎧`;
    } else {
        document.getElementById("welcome").textContent = "Bienvenue sur SpotiPasFy 🎶";
    }
}

// charge des que la page est open
window.onload = nameutilisateur;

