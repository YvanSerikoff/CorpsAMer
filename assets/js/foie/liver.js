document.addEventListener('DOMContentLoaded', () => {
    const platformGame = document.querySelector('.platform-game');
    const modal = document.getElementById('modal');
    const modalOverlay = document.getElementById('modal-overlay');
    const sprite = document.getElementById('sprite');
    const scoreElement = document.getElementById('score');
    const maxScoreElement = document.getElementById('max-score');
    const timeElement = document.getElementById('time');
    const pauseBtn = document.getElementById('pause-btn');
    const instructionModal = document.getElementById('instruction-modal');
    const startGameBtn = document.getElementById('start-game-btn');
    const endGameBox = document.getElementById('end-game-box');
    const endGameMessage = document.getElementById('end-game-message');
    const finalScore = document.getElementById('final-score');
    const restartGameBtn = document.getElementById('restart-game-btn');
    const continueGameBtn = document.getElementById('continue-game-btn');
    const pauseGameBox = document.getElementById('pause-game-box');
    const resumeGameBtn = document.getElementById('resume-game-btn');
    const restartGameFromPauseBtn = document.getElementById('restart-game-from-pause-btn');
    const progressBar = document.getElementById('progress-bar');
    let fallSpeed = 2; // Vitesse initiale de descente
    let spawnInterval = 1500; // Intervalle initial de 1.5 secondes
    const dechetColors = ['#778ca3', '#a5b1c2', '#4b6584', '#2f3640', '#353b48', '#1e272e']; // Couleurs aléatoires pour les déchets
    const fauneColors = ['#fc5c65', '#eb3b5a', '#fd9644', '#fed330', '#fa8231', '#f7b731', '#26de81', '#20bf6b', '#a55eea', '#8854d0', '#0fb9b1', '#2bcbba']; // Couleurs aléatoires pour la faune
    let gamePaused = true;
    let gameEnded = false;
    let spawnTimeout;
    let mouseX = 0;
    let mouseY = 0;
    let spriteX = 0;
    let spriteY = 0;
    let isDragging = false;
    let score = 0;
    let maxScore = 0;
    let fauneRate = 0.2; // Taux initial de faune
    let gameTime = 60; // Temps de jeu en secondes
    let gameInterval;
    let totalFaune = 0;
    let totalDechet = 0;
    let fauneSaved = 0;
    let dechetRecovered = 0;
    let dechetLost = 0;
    let fauneLost = 0;

    pauseBtn.disabled = true; // Désactiver le bouton pause au début

    function getRandomSpeed(min, max, bias) {
        return Math.random() * (max - min) + min + bias;
    }

    function getRandomSize(min, max, bias) {
        return Math.random() * (max - min) + min + bias;
    }

    function createFallingObject(type) {
        const fallingObject = document.createElement('div');
        fallingObject.classList.add(type);
        const randomX = Math.random() * (platformGame.offsetWidth - 40); // 40 est la taille du cercle
        let randomColor;
        let speedBias;
        let sizeBias;
        if (type === 'dechet') {
            randomColor = dechetColors[Math.floor(Math.random() * dechetColors.length)];
            speedBias = 0; // Les déchets ont tendance à être plus lents
            sizeBias = 0; // Les déchets ont une taille normale
            totalDechet++;
        } else {
            randomColor = fauneColors[Math.floor(Math.random() * fauneColors.length)];
            speedBias = 2; // La faune a tendance à être plus rapide
            sizeBias = 10; // La faune a tendance à être plus grande
            totalFaune++;
        }
        const size = getRandomSize(20, 60, sizeBias); // Taille aléatoire avec biais
        fallingObject.style.width = `${size}px`;
        fallingObject.style.height = `${size}px`;
        fallingObject.style.left = `${randomX}px`;
        fallingObject.style.top = `-20px`; // Faire apparaître les cercles un peu plus haut
        fallingObject.style.backgroundColor = randomColor;
        fallingObject.dataset.speed = getRandomSpeed(1, 5, speedBias); // Vitesse aléatoire avec biais
        platformGame.appendChild(fallingObject);
        return fallingObject;
    }

    function updateFallingObject(fallingObject) {
        if (gamePaused) return;
        const objectTop = parseFloat(fallingObject.style.top);
        const speed = parseFloat(fallingObject.dataset.speed);
        if (objectTop + parseFloat(fallingObject.style.height) < platformGame.offsetHeight) {
            fallingObject.style.top = `${objectTop + speed}px`;
            requestAnimationFrame(() => updateFallingObject(fallingObject));
        } else {
            platformGame.removeChild(fallingObject);
            if (fallingObject.classList.contains('dechet')) {
                score -= 2; // Perdre 2 points si un déchet touche le fond
                dechetLost++;
            } else if (fallingObject.classList.contains('faune')) {
                score += 1; // Gagner 1 point si la faune touche le fond
                fauneSaved++;
            }
            scoreElement.textContent = score;
        }
    }

    function spawnFallingObjects() {
        if (gamePaused) return;
        if (score < 0) {
            fauneRate = Math.max(0.1, fauneRate - 0.05); // Diminuer le taux de faune, minimum 10%
        }
        const type = gameTime > 0 ? (Math.random() < fauneRate ? 'faune' : 'dechet') : 'faune'; // Utiliser le taux de faune actuel
        const fallingObject = createFallingObject(type);
        updateFallingObject(fallingObject);
        spawnTimeout = setTimeout(spawnFallingObjects, spawnInterval);
    }

    function increaseDifficulty() {
        if (gamePaused) return;
        fallSpeed += 0.5; // Augmenter légèrement la vitesse de descente
        spawnInterval = Math.max(500, spawnInterval - 200); // Réduire l'intervalle de spawn, minimum 500ms
        if (score > 0) {
            const gainRatio = dechetRecovered / totalDechet;
            if (gainRatio > 0.5) {
                fauneRate = Math.min(0.5, fauneRate + 0.05); // Augmenter le taux de faune, maximum 50%
            } else if (gainRatio < 0.2) {
                fauneRate = Math.max(0.1, fauneRate - 0.05); // Diminuer le taux de faune, minimum 10%
            }
        }
        setTimeout(increaseDifficulty, 5000); // Augmenter la difficulté toutes les 5 secondes
    }

    function updateTime() {
        if (gamePaused) return;
        gameTime--;
        timeElement.textContent = `00:${gameTime < 10 ? '0' : ''}${gameTime}`;
        if (gameTime <= 0) {
            clearInterval(gameInterval);
            fauneRate = 1; // Plus de déchets après 60 secondes
            gamePaused = true; // Arrêter le jeu après le timer
            gameEnded = true;
            maxScore = Math.max(maxScore, score);
            maxScoreElement.textContent = maxScore;
            removeAllObjects();
            showEndGameBox();
        }
    }

    function removeAllObjects() {
        const objects = document.querySelectorAll('.dechet, .faune');
        objects.forEach(object => platformGame.removeChild(object));
    }

    function updateProgressBar() {
        const totalDechets = dechetRecovered + dechetLost;
        const percentage = totalDechets > 0 ? (dechetRecovered / totalDechets) * 100 : 0;
        progressBar.style.width = `${percentage}%`;
    }

    function showEndGameBox() {
        endGameBox.style.display = 'block';
        finalScore.textContent = score;
        updateProgressBar();
        if (score < 0) {
            endGameMessage.textContent = "Vous avez perdu !";
        } else {
            endGameMessage.textContent = "Vous avez gagné !";
        }
    }

    function showPauseGameBox() {
        pauseGameBox.style.display = 'block';
    }

    function hidePauseGameBox() {
        pauseGameBox.style.display = 'none';
    }

    function pauseGame() {
        if (gameEnded) return; // Ne pas permettre de mettre en pause si le jeu est terminé
        gamePaused = true;
        clearTimeout(spawnTimeout);
        clearInterval(gameInterval);
        showPauseGameBox();
    }

    function resumeGame() {
        gamePaused = false;
        hidePauseGameBox();
        clearTimeout(spawnTimeout); // Annuler tout timeout existant
        gameInterval = setInterval(updateTime, 1000);
        const fallingObjects = document.querySelectorAll('.dechet, .faune');
        fallingObjects.forEach(fallingObject => updateFallingObject(fallingObject));
        spawnTimeout = setTimeout(() => {
            spawnFallingObjects();
        }, 1000); // Attendre 1 seconde avant de relancer le spawn des cercles
    }

    function startGame() {
        gamePaused = false;
        gameEnded = false;
        gameTime = 60;
        score = 0;
        fauneSaved = 0;
        dechetRecovered = 0;
        dechetLost = 0;
        fauneLost = 0;
        scoreElement.textContent = score;
        timeElement.textContent = `01:00`;
        removeAllObjects(); // Supprimer tous les cercles présents
        spriteX = platformGame.offsetWidth / 2 - sprite.offsetWidth / 2; // Initialiser le sprite au centre horizontalement
        spriteY = platformGame.offsetHeight / 2 - sprite.offsetHeight / 2; // Initialiser le sprite au centre verticalement
        sprite.style.left = `${spriteX}px`;
        sprite.style.top = `${spriteY}px`;
        gameInterval = setInterval(updateTime, 1000);
        spawnFallingObjects();
        increaseDifficulty();
        pauseBtn.disabled = false; // Activer le bouton pause lorsque le jeu commence
    }

    function checkCollision() {
        const dechets = document.querySelectorAll('.dechet, .faune');
        dechets.forEach(dechet => {
            const dechetRect = dechet.getBoundingClientRect();
            const spriteRect = sprite.getBoundingClientRect();
            const rocksRect = document.getElementById('rocks').getBoundingClientRect();

            if (
                spriteRect.left < dechetRect.left + dechetRect.width &&
                spriteRect.left + spriteRect.width > dechetRect.left &&
                spriteRect.top < dechetRect.top + dechetRect.height &&
                spriteRect.top + spriteRect.height > dechetRect.top
            ) {
                platformGame.removeChild(dechet);
                if (dechet.classList.contains('faune')) {
                    score -= 5; // Perdre 5 points si c'est la faune
                    fauneLost++;
                } else {
                    score++; // Gagner 1 point si c'est un déchet
                    dechetRecovered++;
                }
                scoreElement.textContent = score;
                updateProgressBar();
            }

            // Vérifier la collision avec les rochers
            if (dechetRect.bottom > rocksRect.top) {
                platformGame.removeChild(dechet);
                if (dechet.classList.contains('dechet')) {
                    score -= 2; // Perdre 2 points si un déchet touche les rochers
                    dechetLost++;
                } else if (dechet.classList.contains('faune')) {
                    score += 1; // Gagner 1 point si la faune touche les rochers
                    fauneSaved++;
                }
                scoreElement.textContent = score;
            }
        });
    }

    function togglePauseResume() {
        if (gamePaused) {
            resumeGame();
        } else {
            pauseGame();
        }
    }

    startGameBtn.addEventListener('click', () => {
        instructionModal.style.display = 'none';
        startGame();
    });

    restartGameBtn.addEventListener('click', () => {
        endGameBox.style.display = 'none';
        startGame();
    });

    continueGameBtn.addEventListener('click', () => {
        endGameBox.style.display = 'none';
        modal.style.display = 'none';
        modalOverlay.style.display = 'none';
    });

    resumeGameBtn.addEventListener('click', () => {
        resumeGame();
    });

    restartGameFromPauseBtn.addEventListener('click', () => {
        hidePauseGameBox();
        startGame();
    });

    pauseBtn.addEventListener('click', () => {
        if (!pauseBtn.disabled) {
            togglePauseResume();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space' && !pauseBtn.disabled) {
            e.preventDefault(); // Empêcher le défilement de la page
            togglePauseResume();
        }
    });

    platformGame.addEventListener('mousemove', (e) => {
        if (!isDragging) {
            const rect = platformGame.getBoundingClientRect();
            mouseX = e.clientX - rect.left - 25; // Ajuster pour centrer le sprite
            mouseY = e.clientY - rect.top - 25; // Ajuster pour centrer le sprite
        }
    });

    platformGame.addEventListener('mousedown', (e) => {
        isDragging = true;
    });

    platformGame.addEventListener('mouseup', (e) => {
        isDragging = false;
    });

    platformGame.addEventListener('touchmove', (e) => {
        const touch = e.touches[0];
        const rect = platformGame.getBoundingClientRect();
        mouseX = touch.clientX - rect.left - 25; // Ajuster pour centrer le sprite
        mouseY = touch.clientY - rect.top - 25; // Ajuster pour centrer le sprite
    });

    function animateSprite() {
        if (!gamePaused) {
            spriteX += (mouseX - spriteX) * 0.2; // Réduire la résistance pour suivre plus rapidement
            spriteY += (mouseY - spriteY) * 0.2; // Réduire la résistance pour suivre plus rapidement
            sprite.style.left = `${spriteX}px`;
            sprite.style.top = `${spriteY}px`;
            checkCollision();
        }
        requestAnimationFrame(animateSprite);
    }

    animateSprite();

    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            pauseGame();
        }
    });
});