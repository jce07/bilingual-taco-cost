// Taco Calculator functionality

function initializeCalculator() {
    // Meat Selection
    document.querySelectorAll('.meat-option').forEach(option => {
        option.addEventListener('click', function() {
            document.querySelectorAll('.meat-option').forEach(o => o.classList.remove('selected'));
            this.classList.add('selected');
            calculateResults();
        });
    });

    // Input Change Listeners
    document.getElementById('meat-weight').addEventListener('input', calculateResults);
    document.getElementById('meat-price').addEventListener('input', calculateResults);
    document.getElementById('tacos-per-pound').addEventListener('input', calculateResults);
    document.getElementById('taco-price').addEventListener('input', calculateResults);

    // Initialize calculations
    calculateResults();
}

// Calculate Results Function
function calculateResults() {
    const weight = parseFloat(document.getElementById('meat-weight').value) || 0;
    const pricePerPound = parseFloat(document.getElementById('meat-price').value) || 0;
    const tacosPerPound = parseFloat(document.getElementById('tacos-per-pound').value) || 0;
    const tacoPrice = parseFloat(document.getElementById('taco-price').value) || 0;
    
    const totalCost = weight * pricePerPound;
    const totalTacos = weight * tacosPerPound;
    const totalRevenue = totalTacos * tacoPrice;
    const profit = totalRevenue - totalCost;
    
    document.getElementById('total-cost').textContent = `$${totalCost.toFixed(2)}`;
    document.getElementById('total-tacos').textContent = Math.round(totalTacos);
    document.getElementById('total-revenue').textContent = `$${totalRevenue.toFixed(2)}`;
    document.getElementById('profit').textContent = `$${profit.toFixed(2)}`;
}