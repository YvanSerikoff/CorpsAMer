let score = 500;
let totalScore = 0;

const scoreDisplay = document.getElementById('score');
const totalScoreDisplay = document.getElementById('totalScore');
const progressBar = document.getElementById('progressBar');

// Récupérer le score et le totalScore depuis localStorage s'ils existent
const savedScore = localStorage.getItem('score');
const savedTotalScore = localStorage.getItem('totalScore');
if (savedScore !== null) {
    score = parseInt(savedScore, 10); // Convertir la valeur en nombre
    scoreDisplay.textContent = score; // Mettre à jour l'affichage
}
if (savedTotalScore !== null) {
    totalScore = parseInt(savedTotalScore, 10); // Convertir la valeur en nombre
    totalScoreDisplay.textContent = totalScore; // Mettre à jour l'affichage
    progressBar.value = totalScore; // Mettre à jour la barre de progression
}

document.getElementById('plankton').addEventListener('click', function() {
    const plankton = document.getElementById('plankton');
    if (plankton.classList.contains('clicked')) {
        plankton.classList.remove('clicked');
        void plankton.offsetWidth; // Force reflow to restart the animation
    }
    score += clickValue;
    totalScore += clickValue;
    scoreDisplay.textContent = score;
    totalScoreDisplay.textContent = totalScore;
    progressBar.value = totalScore; // Mettre à jour la barre de progression
    localStorage.setItem('score', score);
    localStorage.setItem('totalScore', totalScore);

    plankton.classList.add('clicked');
});

const resetButton = document.getElementById('reset-button');

resetButton.addEventListener('click', () => {
    score = 0; // Réinitialiser le score
    totalScore = 0; // Réinitialiser le totalScore
    scoreDisplay.textContent = score; // Mettre à jour l'affichage
    totalScoreDisplay.textContent = totalScore; // Mettre à jour l'affichage
    progressBar.value = totalScore; // Réinitialiser la barre de progression
    clickValue = 10000; // Réinitialiser la valeur du click
    localStorage.removeItem('score'); // Supprimer le score du localStorage
});