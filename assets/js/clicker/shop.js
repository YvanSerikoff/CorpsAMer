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
    const upgrade = upgrades.splice(index, 1)[0];
    // Handle the purchase logic here (e.g., deduct points, apply upgrade effect)
    console.log(`Purchased: ${upgrade.description}`);
    renderUpgrades();
}

document.addEventListener('DOMContentLoaded', renderUpgrades);