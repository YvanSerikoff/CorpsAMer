const upgrades = [
    { description: 'Increase click value', price: 100 },
    { description: 'Double click speed', price: 200 },
    { description: 'Auto-clicker', price: 500 },
    { description: 'Triple click value', price: 300 },
    { description: 'Quadruple click speed', price: 400 }
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