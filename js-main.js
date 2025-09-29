// Main application functionality - language toggle, tabs, modal

document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    initializeLanguageToggle();
    initializeTabs();
    initializeModal();
    loadTabContent('calculator');
}

// Language Toggle
function initializeLanguageToggle() {
    document.querySelector('.language-toggle').addEventListener('click', function() {
        const enElements = document.querySelectorAll('.language-en');
        const esElements = document.querySelectorAll('.language-es');
        
        enElements.forEach(el => {
            el.style.display = el.style.display === 'none' ? 'block' : 'none';
        });
        
        esElements.forEach(el => {
            el.style.display = el.style.display === 'none' ? 'block' : 'none';
        });
    });
}

// Tab Switching
function initializeTabs() {
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs and contents
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            const tabId = this.dataset.tab;
            document.getElementById(tabId).classList.add('active');
            
            // Load content for the tab
            loadTabContent(tabId);
        });
    });
}

// Load tab content dynamically
function loadTabContent(tabId) {
    const tabContent = document.getElementById(tabId);
    
    if (tabId === 'calculator' && !tabContent.querySelector('.card')) {
        tabContent.innerHTML = getCalculatorHTML();
        initializeCalculator();
    } else if (tabId === 'combo' && !tabContent.querySelector('.combo-builder')) {
        tabContent.innerHTML = getComboBuilderHTML();
        initializeComboBuilder();
    }
}

// Help Modal
function initializeModal() {
    document.querySelector('.help-btn').addEventListener('click', function() {
        document.getElementById('help-modal').classList.add('active');
    });
    
    document.querySelector('.modal-close').addEventListener('click', function() {
        document.getElementById('help-modal').classList.remove('active');
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === document.getElementById('help-modal')) {
            document.getElementById('help-modal').classList.remove('active');
        }
    });
}

// Get HTML for calculator tab
function getCalculatorHTML() {
    return `
        <div class="card">
            <h2 class="card-title">
                <i>📊</i>
                <span class="language-en">Calculate Cost & Yield</span>
                <span class="language-es">Calcular Costo y Rendimiento</span>
            </h2>
            
            <div class="form-group">
                <label for="meat-type" class="language-en">Select Meat Type</label>
                <label for="meat-type" class="language-es">Seleccionar Tipo de Carne</label>
                <div class="meat-options">
                    <div class="meat-option selected" data-meat="asada">
                        <div class="meat-icon">🥩</div>
                        <div class="meat-name language-en">Carne Asada</div>
                        <div class="meat-name language-es">Carne Asada</div>
                        <div class="meat-description language-en">Grilled beef</div>
                        <div class="meat-description language-es">Carne de res a la parrilla</div>
                    </div>
                    <div class="meat-option" data-meat="carnitas">
                        <div class="meat-icon">🐖</div>
                        <div class="meat-name language-en">Carnitas</div>
                        <div class="meat-name language-es">Carnitas</div>
                        <div class="meat-description language-en">Slow-cooked pork</div>
                        <div class="meat-description language-es">Cerdo cocido a fuego lento</div>
                    </div>
                    <div class="meat-option" data-meat="pastor">
                        <div class="meat-icon">🍍</div>
                        <div class="meat-name language-en">Al Pastor</div>
                        <div class="meat-name language-es">Al Pastor</div>
                        <div class="meat-description language-en">Marinated pork with pineapple</div>
                        <div class="meat-description language-es">Cerdo marinado con piña</div>
                    </div>
                </div>
            </div>
            
            <div class="form-group">
                <label for="meat-weight" class="language-en">Meat Weight (lbs)</label>
                <label for="meat-weight" class="language-es">Peso de Carne (lbs)</label>
                <input type="number" id="meat-weight" class="form-control" value="5" min="1">
            </div>
            
            <div class="form-group">
                <label for="meat-price" class="language-en">Price per Pound ($)</label>
                <label for="meat-price" class="language-es">Precio por Libra ($)</label>
                <input type="number" id="meat-price" class="form-control" value="8.99" min="0" step="0.01">
            </div>
            
            <div class="form-group">
                <label for="tacos-per-pound" class="language-en">Tacos per Pound</label>
                <label for="tacos-per-pound" class="language-es">Tacos por Libra</label>
                <input type="number" id="tacos-per-pound" class="form-control" value="8" min="1">
            </div>
            
            <div class="form-group">
                <label for="taco-price" class="language-en">Price per Taco ($)</label>
                <label for="taco-price" class="language-es">Precio por Taco ($)</label>
                <input type="number" id="taco-price" class="form-control" value="3.50" min="0" step="0.01">
            </div>
        </div>
        
        <div class="results">
            <div class="result-card">
                <div class="result-label language-en">Total Cost</div>
                <div class="result-label language-es">Costo Total</div>
                <div class="result-value" id="total-cost">$44.95</div>
            </div>
            
            <div class="result-card">
                <div class="result-label language-en">Total Tacos</div>
                <div class="result-label language-es">Total de Tacos</div>
                <div class="result-value" id="total-tacos">40</div>
            </div>
            
            <div class="result-card">
                <div class="result-label language-en">Total Revenue</div>
                <div class="result-label language-es">Ingresos Totales</div>
                <div class="result-value" id="total-revenue">$140.00</div>
            </div>
            
            <div class="result-card">
                <div class="result-label language-en">Profit</div>
                <div class="result-label language-es">Ganancia</div>
                <div class="result-value" id="profit">$95.05</div>
            </div>
        </div>
    `;
}

// Get HTML for combo builder tab
function getComboBuilderHTML() {
    return `
        <div class="combo-builder">
            <div class="combo-items">
                <div class="card">
                    <h2 class="card-title">
                        <i>🍽️</i>
                        <span class="language-en">Build Your Combo</span>
                        <span class="language-es">Construye Tu Combo</span>
                    </h2>
                    
                    <div class="combo-item">
                        <div class="combo-item-icon">🌮</div>
                        <div class="combo-item-details">
                            <div class="combo-item-name language-en">Taco</div>
                            <div class="combo-item-name language-es">Taco</div>
                            <div class="combo-item-price">$3.50</div>
                        </div>
                        <div class="combo-item-controls">
                            <button class="quantity-btn minus" data-item="taco">-</button>
                            <span class="quantity" data-item="taco">0</span>
                            <button class="quantity-btn plus" data-item="taco">+</button>
                        </div>
                    </div>
                    
                    <div class="combo-item">
                        <div class="combo-item-icon">🌯</div>
                        <div class="combo-item-details">
                            <div class="combo-item-name language-en">Burrito</div>
                            <div class="combo-item-name language-es">Burrito</div>
                            <div class="combo-item-price">$8.50</div>
                        </div>
                        <div class="combo-item-controls">
                            <button class="quantity-btn minus" data-item="burrito">-</button>
                            <span class="quantity" data-item="burrito">0</span>
                            <button class="quantity-btn plus" data-item="burrito">+</button>
                        </div>
                    </div>
                    
                    <div class="combo-item">
                        <div class="combo-item-icon">🥤</div>
                        <div class="combo-item-details">
                            <div class="combo-item-name language-en">Drink</div>
                            <div class="combo-item-name language-es">Bebida</div>
                            <div class="combo-item-price">$2.50</div>
                        </div>
                        <div class="combo-item-controls">
                            <button class="quantity-btn minus" data-item="drink">-</button>
                            <span class="quantity" data-item="drink">0</span>
                            <button class="quantity-btn plus" data-item="drink">+</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="combo-summary card">
                <h2 class="card-title">
                    <i>🧾</i>
                    <span class="language-en">Order Summary</span>
                    <span class="language-es">Resumen del Pedido</span>
                </h2>
                
                <div class="summary-row">
                    <span class="language-en">Tacos (x0)</span>
                    <span class="language-es">Tacos (x0)</span>
                    <span>$0.00</span>
                </div>
                
                <div class="summary-row">
                    <span class="language-en">Burritos (x0)</span>
                    <span class="language-es">Burritos (x0)</span>
                    <span>$0.00</span>
                </div>
                
                <div class="summary-row">
                    <span class="language-en">Drinks (x0)</span>
                    <span class="language-es">Bebidas (x0)</span>
                    <span>$0.00</span>
                </div>
                
                <div class="summary-row">
                    <span class="language-en">Subtotal</span>
                    <span class="language-es">Subtotal</span>
                    <span>$0.00</span>
                </div>
                
                <div class="summary-row">
                    <span class="language-en">Tax (8%)</span>
                    <span class="language-es">Impuesto (8%)</span>
                    <span>$0.00</span>
                </div>
                
                <div class="summary-row summary-total">
                    <span class="language-en">Total</span>
                    <span class="language-es">Total</span>
                    <span>$0.00</span>
                </div>
                
                <button class="btn btn-primary" style="width: 100%; margin-top: 20px;">
                    <span class="language-en">Place Order</span>
                    <span class="language-es">Hacer Pedido</span>
                </button>
            </div>
        </div>
    `;
}