const originalUpgrades = [
    { id: 1, description: 'Increase click value +2', price: 100, effect: () => clickValue += 2 },
    { id: 2, description: 'Increase click value +5', price: 1000, effect: () => clickValue += 5 },
    { id: 3, description: 'Auto-clicker', price: 500, effect: () => startAutoClicker() },
    { id: 4, description: 'Double click', price: 2500, effect: () => clickValue *= 2 },
    { id: 5, description: 'Increase click value +10', price: 10000, effect: () => clickValue += 10 },
];

let upgrades = [...originalUpgrades];
let clickValue = 1;
let autoClickerInterval = null;

function applyUpgradeEffect(upgrade) {
    upgrade.effect();
}

function resetUpgrades() {
    upgrades = [...originalUpgrades];
    clickValue = 1;

    if (autoClickerInterval !== null) {
        clearInterval(autoClickerInterval);
        autoClickerInterval = null;
    }
    renderUpgrades();
}

function renderUpgrades() {
    const shopTable = document.querySelector('#shop table');
    shopTable.innerHTML = `
        <tr>
            <th>Description</th>
            <th>Price</th>
            <th>Purchase</th>
        </tr>
    `;

    upgrades.slice(0, 3).forEach((upgrade, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${upgrade.description}</td>
            <td>${upgrade.price} points</td>
            <td><button onclick="buyUpgrade(${index})">Buy</button></td>
        `;
        shopTable.appendChild(row);
    });
}

function buyUpgrade(index) {
    const upgrade = upgrades[index];
    if(score >= upgrade.price){
        score -= upgrade.price;
        scoreDisplay.textContent = score;
        upgrades.splice(index,1);
        console.log(`Purchased: ${upgrade.description}`);
        applyUpgradeEffect(upgrade);
        renderUpgrades();
    }else {
        console.log('Pas assez de score pour acheter cette upgrade');
    }
}

const toggleButton = document.getElementById('toggleButton');
const shop = document.getElementById('shop');

toggleButton.addEventListener('click', () => {
    if (shop.style.display === 'none' || shop.style.display === '') {
        shop.style.display = 'block';
        applyGravityEffect(); // Appliquer l'effet de gravité
    } else {
        shop.style.display = 'none';
    }
});

function startAutoClicker() {
    if (autoClickerInterval !== null) return;

    autoClickerInterval = setInterval(() => {
        score += clickValue;
        scoreDisplay.textContent = score;
        localStorage.setItem('score', score);
    }, 1000);
}

function applyGravityEffect() {
    const elements = document.querySelectorAll('#shop h2, #shop td, #shop button');
    elements.forEach(element => {
        // Ajout de la classe de chute
        element.classList.add('falling');
    });
}

document.addEventListener('DOMContentLoaded', function() {
    renderUpgrades();
    // Appliquer l'effet de gravité dès que le shop devient visible
    toggleButton.addEventListener('click', () => {
        if (shop.style.display === 'block') {
            applyGravityEffect();
        }
    });
});
