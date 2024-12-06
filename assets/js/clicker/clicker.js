const plankton = document.getElementById('plankton');
const scoreDisplay = document.getElementById('score');
const totalScoreDisplay = document.getElementById('totalScore');
const progressBar = document.getElementById('progressBar');
const modal = document.getElementById('winModal');
const span = document.getElementsByClassName('close')[0];
const indexButton = document.getElementById('indexButton');
const newClickerButton = document.getElementById('newClickerButton');
const body = document.querySelector('body');

let score = 0;
let totalScore = 0;
const scoreFinal = 10000;

    // Retrieve score and totalScore from localStorage if they exist
    const savedScore = localStorage.getItem('score');
    const savedTotalScore = localStorage.getItem('totalScore');
    if (savedScore !== null) {
        score = parseInt(savedScore, 10); // Convert to number
        scoreDisplay.textContent = score; // Update display
    }

    if (savedTotalScore !== null) {
        totalScore = parseInt(savedTotalScore, 10); // Convert to number
        totalScoreDisplay.textContent = totalScore; // Update display
        progressBar.value = totalScore; // Update progress bar
    }

    if (totalScore !== scoreFinal){
        modal.style.display = 'none';
    }

    plankton.addEventListener('click', function() {
        if (plankton.classList.contains('clicked')) {
            plankton.classList.remove('clicked');
            void plankton.offsetWidth; // Force reflow to restart the animation
        }
        score += clickValue;
        totalScore += clickValue;
        scoreDisplay.textContent = score;
        totalScoreDisplay.textContent = totalScore;
        progressBar.value = totalScore; // Update progress bar
        localStorage.setItem('score', score);
        localStorage.setItem('totalScore', totalScore);

        plankton.classList.add('clicked');

        if (totalScore >= 1500) changeBackground(body, 'assets/images/clicker/bg2.jpg');
        if (totalScore >= 3000) changeBackground(body, 'assets/images/clicker/bg3.jpg');
        if (totalScore >= 4500) changeBackground(body, 'assets/images/clicker/bg4.jpg');
        if (totalScore >= 6000) changeBackground(body, 'assets/images/clicker/bg5.jpg');
        if (totalScore >= 7500) changeBackground(body, 'assets/images/clicker/bg6.jpg');
        if (totalScore >= 9000) changeBackground(body, 'assets/images/clicker/bg7.jpg');

        if (totalScore >= scoreFinal) {
            modal.style.display = 'block';
        }
    });

    span.onclick = function (){
        modal.style.display ='none';
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }

    indexButton.onclick = function() {
        window.location.href = 'index.html';
    }

    newClickerButton.onclick = function() {
        window.location.href = 'newClicker.html'; // Replace with the actual URL of the new clicker version
    }

    function changeBackground(body, jpg) {
        body.style.backgroundImage = `url("${jpg}")`;
    }

    plankton.classList.add('clicked');

    const resetButton = document.getElementById('reset-button');
    resetButton.addEventListener('click', () => {
        score = 0; // Reset score
        totalScore = 0; // Reset totalScore
        scoreDisplay.textContent = score; // Update display

        totalScoreDisplay.textContent = totalScore; // Update display
        progressBar.value = totalScore;
        clickValue = 1 ;
        changeBackground(body, 'assets/images/clicker/bg1.jpg');
        // Reset progress bar
        localStorage.removeItem('score'); // Remove score from localStorage

        localStorage.removeItem('totalScore'); // Remove totalScore from localStorage
        resetUpgrades();
    });
document.getElementById('resetButton').addEventListener('click', resetUpgrades);
