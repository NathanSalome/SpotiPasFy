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
        document.getElementById("welcome").textContent = username;
    } else {
        document.getElementById("welcome").textContent = "SpotiPasFy";
    }
}

// charge des que la page est open
window.onload = nameutilisateur;

function searchMusic() {
    let input = document.getElementById("search").value;
    let url = "https://api.jamendo.com/v3.0/tracks/?client_id=f8ac19b7&format=jsonpost&namesearch= " + input;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let search = document.getElementById("contenu");

            search.innerHTML = `
                
            `;
        })
}

function PlayAlbum(lienAlbum) {
    let audio = document.getElementById("audio");
    audio.src = lienAlbum;
    audio.play();
}

/* FILM INFO
function searchMovie() {
    let input = document.getElementById("search").value;

    let url = "https://www.omdbapi.com/?t=" + input + "&apikey=ad8d9532";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            let search = document.getElementById("contenu");

            search.innerHTML = `
                <div class="img-film">
                    <img class="img-film" src="${data.Poster}" alt="Affiche du film ${data.Title}">
                </div>
                <div class="info">
                    <h1>Titre : ${data.Title}</h1>
                    <p><strong>Genre :</strong> ${data.Genre}</p>
                    <p><strong>Réalisé :</strong> ${data.Released}</p>
                    <p><strong>Directeur :</strong> ${data.Director}</p>
                    <p><strong>Acteurs :</strong> ${data.Actors}</p>
                    <p><strong>Langue :</strong> ${data.Language}</p>
                    <p><strong>Awards :</strong> ${data.Awards}</p>
                    <p><strong>durée :</strong> ${data.Runtime}ute</p>
                </div>
                <div class="Plot">
                    <h2>Résumée : </h2>
                    <p>${data.Plot}</p>
                </div>
                `

        })
        .catch(error => {
            console.error("Erreur :", error);
        });
}
*/
