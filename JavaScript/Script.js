function utilisateur(event){
    event.preventDefault(); // bloque le rechargement

    let input = document.getElementById("name").value; // stoque l'identifiant

    if(input == ""){
        alert("Merci de rentrer votre nom !");
    }
    else {
        localStorage.setItem("spotypasfyUser", input);
        window.location.href = "main.html";
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

// Search

function searchMusic() {
    let input = document.getElementById("search").value;
    let url = "https://api.jamendo.com/v3.0/tracks?client_id=f8ac19b7&format=json&fuzzytags=" + input;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let search = document.getElementById("container-Search");
            search.innerHTML = "";

            data.results.forEach(track => {
                search.innerHTML += `
                <div class="container-result-search">
                    <div class="result-search" onclick="PlayAlbum('${track.audio}')">
                        <img src="${track.album_image}" width="15%">
                        <p>${track.name}</p>
                    </div>
                </div>
                `
            })
        })
}

// Lancer audio
function PlayAlbum(lienAlbum) {
    let audio = document.getElementById("audio");
    audio.src = lienAlbum;
    audio.play();
}
