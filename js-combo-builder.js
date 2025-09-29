// Combo Builder functionality

function initializeComboBuilder() {
    // Combo Builder Quantity Controls
    document.querySelectorAll('.quantity-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const item = this.dataset.item;
            const quantityElement = document.querySelector(`.quantity[data-item="${item}"]`);
            let quantity = parseInt(quantityElement.textContent);
            
            if (this.classList.contains('plus')) {
                quantity++;
            } else if (this.classList.contains('minus') && quantity > 0) {
                quantity--;
            }
            
            quantityElement.textContent = quantity;
            updateComboSummary();
        });
    });

    // Initialize combo summary
    updateComboSummary();
}

// Update Combo Summary Function
function updateComboSummary() {
    const tacoQuantity = parseInt(document.querySelector('.quantity[data-item="taco"]').textContent) || 0;
    const burritoQuantity = parseInt(document.querySelector('.quantity[data-item="burrito"]').textContent) || 0;
    const drinkQuantity = parseInt(document.querySelector('.quantity[data-item="drink"]').textContent) || 0;
    
    const tacoPrice = 3.50;
    const burritoPrice = 8.50;
    const drinkPrice = 2.50;
    
    const tacoTotal = tacoQuantity * tacoPrice;
    const burritoTotal = burritoQuantity * burritoPrice;
    const drinkTotal = drinkQuantity * drinkPrice;
    
    const subtotal = tacoTotal + burritoTotal + drinkTotal;
    const tax = subtotal * 0.08;
    const total = subtotal + tax;
    
    // Update summary rows
    const summaryRows = document.querySelectorAll('.summary-row');
    summaryRows[0].innerHTML = `
        <span class="language-en">Tacos (x${tacoQuantity})</span>
        <span class="language-es">Tacos (x${tacoQuantity})</span>
        <span>$${tacoTotal.toFixed(2)}</span>
    `;
    
    summaryRows[1].innerHTML = `
        <span class="language-en">Burritos (x${burritoQuantity})</span>
        <span class="language-es">Burritos (x${burritoQuantity})</span>
        <span>$${burritoTotal.toFixed(2)}</span>
    `;
    
    summaryRows[2].innerHTML = `
        <span class="language-en">Drinks (x${drinkQuantity})</span>
        <span class="language-es">Bebidas (x${drinkQuantity})</span>
        <span>$${drinkTotal.toFixed(2)}</span>
    `;
    
    summaryRows[3].innerHTML = `
        <span class="language-en">Subtotal</span>
        <span class="language-es">Subtotal</span>
        <span>$${subtotal.toFixed(2)}</span>
    `;
    
    summaryRows[4].innerHTML = `
        <span class="language-en">Tax (8%)</span>
        <span class="language-es">Impuesto (8%)</span>
        <span>$${tax.toFixed(2)}</span>
    `;
    
    summaryRows[5].innerHTML = `
        <span class="language-en">Total</span>
        <span class="language-es">Total</span>
        <span>$${total.toFixed(2)}</span>
    `;
}