function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = 0.8; // Opacité fixe
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

function colorDifference(color1, color2) {
    const [r1, g1, b1] = color1.match(/\d+/g).map(Number);
    const [r2, g2, b2] = color2.match(/\d+/g).map(Number);
    return Math.sqrt((r1 - r2) ** 2 + (g1 - g2) ** 2 + (b1 - b2) ** 2);
}

function generateGradient() {
    let color1 = getRandomColor();
    let color2 = getRandomColor();
    while (colorDifference(color1, color2) < 100) {
        color2 = getRandomColor();
    }
    let color3 = getRandomColor();
    while (colorDifference(color1, color3) < 100 || colorDifference(color2, color3) < 100) {
        color3 = getRandomColor();
    }

    return `linear-gradient(
        217deg,
        ${color1},
        ${color1.replace('0.8', '0')} 70.71%
      ),
      linear-gradient(127deg, ${color2}, ${color2.replace('0.8', '0')} 70.71%),
      linear-gradient(336deg, ${color3}, ${color3.replace('0.8', '0')} 70.71%)`;
}

function isOverlapping(newFish, existingFishes, margin = 20) {
    const newRect = newFish.getBoundingClientRect();
    for (const fish of existingFishes) {
        const rect = fish.getBoundingClientRect();
        if (!(newRect.right + margin < rect.left || 
              newRect.left - margin > rect.right || 
              newRect.bottom + margin < rect.top || 
              newRect.top - margin > rect.bottom)) {
            return true;
        }
    }
    return false;
}

const foreground = document.querySelector('.foreground');
const numFish = 500; // Augmenter le nombre de poissons
const existingFishes = [];
let pinnedFish = null;

for (let i = 1; i <= numFish; i++) {
    const fishContainer = document.createElement('div');
    fishContainer.className = 'fish-container';
    fishContainer.style.width = `${Math.random() * 100 + 50}px`; // Taille aléatoire entre 50px et 150px
    fishContainer.style.height = 'auto';
    fishContainer.style.setProperty('--gradient', generateGradient());

    const img = document.createElement('img');
    img.src = `poissons/poisson${(i % 23) + 1}.png`; // Utiliser les images de manière cyclique

    fishContainer.appendChild(img);
    foreground.appendChild(fishContainer);

    // Positionnement aléatoire sans superposition
    let attempts = 0;
    do {
        fishContainer.style.top = `${Math.random() * (3253 - 150) + 50}px`; // Ajuster pour la nouvelle hauteur
        fishContainer.style.left = `${Math.random() * (6500 - 150) + 50}px`; // Ajuster pour la nouvelle largeur
        fishContainer.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`;
        attempts++;
    } while (isOverlapping(fishContainer, existingFishes) && attempts < 100);

    existingFishes.push(fishContainer);

    // Ajouter un gestionnaire d'événements pour vérifier si le poisson cliqué est identique à celui épinglé
    fishContainer.addEventListener('click', function() {
        if (pinnedFish && fishContainer !== pinnedFish && img.src === pinnedFish.querySelector('img').src) {
            alert('Bravo');
        }
    });
}

// Sélectionner un poisson aléatoire parmi ceux générés et l'afficher en haut à gauche de la page en épinglé
const randomIndex = Math.floor(Math.random() * existingFishes.length);
const originalPinnedFish = existingFishes[randomIndex];
pinnedFish = originalPinnedFish.cloneNode(true);
pinnedFish.style.position = 'fixed';
pinnedFish.style.top = '100px'; // Ajouter un espace de 50px du bord supérieur
pinnedFish.style.left = '100px'; // Ajouter un espace de 20px du bord gauche
pinnedFish.style.zIndex = '1000';
pinnedFish.style.setProperty('--gradient', originalPinnedFish.style.getPropertyValue('--gradient'));
document.body.appendChild(pinnedFish);

// Fonction pour afficher une phrase aléatoire dans un popup
function showRandomFishPhrase() {
    const randomIndex = Math.floor(Math.random() * fishPhrases.length);
    const randomPhrase = fishPhrases[randomIndex];

    // Créer le conteneur du popup
    const popup = document.createElement('div');
    popup.className = 'popup';

    // Ajouter le texte
    const text = document.createElement('p');
    text.textContent = randomPhrase;
    popup.appendChild(text);

    // Ajouter un bouton pour fermer le popup
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Fermer';
    closeButton.addEventListener('click', () => {
        popup.remove(); // Supprimer le popup lorsqu'on clique sur "Fermer"
    });
    popup.appendChild(closeButton);

    // Ajouter le popup au document
    document.body.appendChild(popup);
}

// Appeler la fonction au chargement de la page
document.addEventListener('DOMContentLoaded', showRandomFishPhrase);
