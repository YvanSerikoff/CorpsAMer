const upgrades = [
    { description: 'Increase click value +2', price: 100 },
    { description: 'Increase click value +5', price: 1000 },
    { description: 'Auto-clicker', price: 500 },
    { description: 'Double click', price: 2500 },
    { description: 'Increase click value +10', price: 10000 },
];

function renderUpgrades() {
    const shopTable = document.querySelector('#shop table');
    shopTable.innerHTML = `

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
        score -= upgrade.price
        scoreDisplay.textContent = score
        upgrades.splice(index,1)
        // Handle the purchase logic here (e.g., deduct points, apply upgrade effect)
        console.log(`Purchased: ${upgrade.description}`);
        renderUpgrades();
    }else {
        console.log('Pas assez de score pour acheter cette upgrade');
    }
}

// Add this script to your existing JavaScript file
document.getElementById('toggleShopButton').addEventListener('click', function() {
    const shop = document.getElementById('shop');
    if (shop.style.display === 'none' || shop.style.display === '') {
        shop.style.display = 'block';
    } else {
        shop.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', renderUpgrades);