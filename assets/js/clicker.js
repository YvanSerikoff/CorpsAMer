let score = 0 ;

// Récupérer le score depuis localStorage s'il existe
const savedScore = localStorage.getItem('score');
if (savedScore !== null) {
    score = parseInt(savedScore, 10); // Convertir la valeur en nombre
    document.getElementById('score').textContent = score; // Mettre à jour l'affichage
}

document.getElementById('plankton').addEventListener('click', function() {
    const plankton = document.getElementById('plankton');
    if (plankton.classList.contains('clicked')) {
        plankton.classList.remove('clicked');
        void plankton.offsetWidth; // Force reflow to restart the animation
    }
    score++;
    document.getElementById('score').textContent = score;
    localStorage.setItem('score', score);

    plankton.classList.add('clicked');
});