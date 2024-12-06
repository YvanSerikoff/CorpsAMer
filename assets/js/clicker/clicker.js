const plankton = document.getElementById('plankton');

const scoreDisplay = document.getElementById('score');
const totalScoreDisplay = document.getElementById('totalScore');
const scoreFinalDisplay = document.getElementById('scoreFinal')

const progressBar = document.getElementById('progressBar');
const body = document.querySelector('body');
const resetButton = document.getElementById('reset-button');

const savedScore = localStorage.getItem('score');
const savedTotalScore = localStorage.getItem('totalScore');
const savedFinalScore = localStorage.getItem('scoreFinal');

let score = 500;
let totalScore = 0;
let scoreFinal = 1000000;

if (savedScore !== null) {
    score = parseInt(savedScore, 10); // Convert to number
    scoreDisplay.textContent = score; // Update display
}

if (savedTotalScore !== null) {
    totalScore = parseInt(savedTotalScore, 10); // Convert to number
    totalScoreDisplay.textContent = totalScore; // Update display
    progressBar.value = totalScore; // Update progress bar
}

if(savedFinalScore !== null){
    scoreFinal = parseInt(savedFinalScore, 10);
}

if (score >= scoreFinal) {
    alert('Congratulations! You have reached the final score!');
    // Additional logic for when the final score is reached
}

function changeBackground(bElement, bUrl) {
    return bElement.style.backgroundImage = "url("+bUrl+")";
}

plankton.addEventListener('click', function() {
    if (plankton.classList.contains('clicked')) {
        plankton.classList.remove('clicked');
        void plankton.offsetWidth; // Force reflow to restart the animation
    }
    score += 10000;
    totalScore += 10000;
    scoreDisplay.textContent = score;
    totalScoreDisplay.textContent = totalScore;
    progressBar.value = totalScore; // Update progress bar
    localStorage.setItem('score', score);
    localStorage.setItem('totalScore', totalScore);

    if (totalScore >= 20000) changeBackground(body, 'assets/images/clicker/bg2.jpg');
    if (totalScore >= 30000) changeBackground(body, 'assets/images/clicker/bg3.jpg');
    if (totalScore >= 40000) changeBackground(body, 'assets/images/clicker/bg4.jpg');

    plankton.classList.add('clicked');
});



resetButton.addEventListener('click', () => {
    score = 0; // Reset score
    totalScore = 0; // Reset totalScore
    scoreDisplay.textContent = score; // Update display
    totalScoreDisplay.textContent = totalScore; // Update display
    progressBar.value = totalScore; // Reset progress bar
    localStorage.removeItem('score'); // Remove score from localStorage
    localStorage.removeItem('totalScore'); // Remove totalScore from localStorage
    body.style.backgroundImage = 'url(assets/images/clicker/bg1.jpg)'; // Reset to original background
});