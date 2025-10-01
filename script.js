const i18n = {
    en: {
        title: "Taco Cost Calculator",
        helpBtn: "Help",
        tacoTitle: "Taco Calculator",
        cut_beef: "Beef",
        cut_pork: "Pork",
        cut_chicken: "Chicken",
        cut_seafood: "Seafood",
        cut_shrimp: "Shrimp",
        grade: "Grade/Supplier:",
        rawPrice: "Raw Meat Price per lb ($):",
        batchWeight: "Batch Raw Weight (lbs):",
        trimWaste: "Trim/Waste (%):",
        cookLoss: "Cook Loss (%):",
        marinadeCost: "Marinade Cost for Batch ($):",
        tortillaCost: "Tortilla Cost per Taco ($):",
        toppingsCost: "Toppings Cost per Taco ($):",
        portionOz: "Cooked Portion per Taco (oz):",
        targetFoodCost: "Target Food Cost (%):",
        plannedPrice: "Planned Selling Price per Taco ($):",
        results: "Results",
        cookedYield: "Cooked Yield (lbs):",
        tacosPerBatch: "Tacos per Batch:",
        meatCostPerTaco: "Meat Cost per Taco ($):",
        nonMeatCostPerTaco: "Non-Meat Cost per Taco ($):",
        totalFoodCostPerTaco: "Total Food Cost per Taco ($):",
        suggestedPrice: "Suggested Price at Target % ($):",
        actualFoodCost: "Actual Food Cost %:",
        grossMargin: "Gross Margin per Taco ($):",
        note: "Values are based on your inputs and rounded for readability.",
        comboTitle: "Combo Builder",
        addItem: "Add Item",
        itemName: "Item Name:",
        itemCost: "Cost per Unit ($):",
        itemQty: "Quantity:",
        itemPrice: "Individual Price ($):",
        removeItem: "Remove",
        comboPrice: "Combo Price ($):",
        totalComboCost: "Total Combo Cost ($):",
        alaCartePrice: "A-la-Carte Price ($):",
        comboSavings: "Savings vs A-la-Carte ($):",
        comboMargin: "Combo Gross Margin ($):",
        helpTitle: "How to Use",
        helpText: `
<h3>Taco Calculator</h3>
<p>Enter details for each meat type (Beef, Pork, Chicken, Seafood, Shrimp) in the respective card.</p>
<p>- Grade/Supplier: e.g., Choice or supplier name.</p>
<p>- Raw Meat Price: Cost per pound.</p>
<p>- Batch Weight: Total raw weight in pounds.</p>
<p>- Trim/Waste: Percentage lost during preparation.</p>
<p>- Cook Loss: Percentage lost during cooking.</p>
<p>- Marinade Cost: Total for the batch.</p>
<p>- Tortilla/Toppings Cost: Per taco.</p>
<p>- Portion: Cooked meat per taco (oz).</p>
<p>- Target Food Cost: Desired cost percentage.</p>
<p>- Planned Price: Selling price per taco.</p>
<p>Results update automatically, showing yield, costs, and margins.</p>
<h3>Combo Builder</h3>
<p>Add items (e.g., tacos, drinks) to build a combo.</p>
<p>- Enter item name, cost, quantity, and individual price.</p>
<p>- Set the combo price.</p>
<p>View total cost, a-la-carte price, savings, and margin.</p>
        `
    },
    es: {
        title: "Calculadora de Costos de Tacos",
        helpBtn: "Cómo usar",
        tacoTitle: "Calculadora de Tacos",
        cut_beef: "Carne de res",
        cut_pork: "Carne de puerco",
        cut_chicken: "Carne de gallina",
        cut_seafood: "Mariscos",
        cut_shrimp: "Camarones",
        grade: "Grado/Proveedor:",
        rawPrice: "Precio de Carne Cruda por lb ($):",
        batchWeight: "Peso Crudo del Lote (lbs):",
        trimWaste: "Recorte/Desperdicio (%):",
        cookLoss: "Pérdida por Cocción (%):",
        marinadeCost: "Costo de Marinada por Lote ($):",
        tortillaCost: "Costo de Tortilla por Taco ($):",
        toppingsCost: "Costo de Toppings por Taco ($):",
        portionOz: "Porción Cocida por Taco (oz):",
        targetFoodCost: "Costo de Comida Objetivo (%):",
        plannedPrice: "Precio de Venta Planeado por Taco ($):",
        results: "Resultados",
        cookedYield: "Rendimiento Cocido (lbs):",
        tacosPerBatch: "Tacos por Lote:",
        meatCostPerTaco: "Costo de Carne por Taco ($):",
        nonMeatCostPerTaco: "Costo No Carne por Taco ($):",
        totalFoodCostPerTaco: "Costo Total de Comida por Taco ($):",
        suggestedPrice: "Precio Sugerido al % Objetivo ($):",
        actualFoodCost: "Costo de Comida Actual %:",
        grossMargin: "Margen Bruto por Taco ($):",
        note: "Los valores se basan en tus datos y se redondean para facilitar la lectura.",
        comboTitle: "Constructor de Combo",
        addItem: "Agregar Item",
        itemName: "Nombre del Item:",
        itemCost: "Costo por Unidad ($):",
        itemQty: "Cantidad:",
        itemPrice: "Precio Individual ($):",
        removeItem: "Eliminar",
        comboPrice: "Precio del Combo ($):",
        totalComboCost: "Costo Total del Combo ($):",
        alaCartePrice: "Precio A-la-Carte ($):",
        comboSavings: "Ahorros vs A-la-Carte ($):",
        comboMargin: "Margen Bruto del Combo ($):",
        helpTitle: "Cómo Usar",
        helpText: `
<h3>Calculadora de Tacos</h3>
<p>Ingresa los detalles para cada tipo de carne (Carne de res, Carne de puerco, Carne de gallina, Mariscos, Camarones).</p>
<p>- Grado/Proveedor: Ej., Choice o nombre del proveedor.</p>
<p>- Precio de Carne Cruda: Costo por libra.</p>
<p>- Peso del Lote: Peso crudo total en libras.</p>
<p>- Recorte/Desperdicio: Porcentaje perdido en preparación.</p>
<p>- Pérdida por Cocción: Porcentaje perdido al cocinar.</p>
<p>- Costo de Marinada: Total para el lote.</p>
<p>- Costo de Tortilla/Toppings: Por taco.</p>
<p>- Porción: Carne cocida por taco (oz).</p>
<p>- Costo de Comida Objetivo: Porcentaje deseado.</p>
<p>- Precio Planeado: Precio de venta por taco.</p>
<p>Los resultados se actualizan automáticamente, mostrando rendimiento, costos y márgenes.</p>
<h3>Constructor de Combo</h3>
<p>Agrega ítems (ej., tacos, bebidas) para crear un combo.</p>
<p>- Ingresa nombre, costo, cantidad y precio individual.</p>
<p>- Establece el precio del combo.</p>
<p>Ve el costo total, precio a-la-carte, ahorros y margen.</p>
        `
    }
};

let currentLang = 'en';

function updateLanguage() {
    console.log(`Updating language to: ${currentLang}`);
    try {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (i18n[currentLang][key]) {
                el.textContent = i18n[currentLang][key];
            } else {
                console.warn(`Missing translation for key: ${key} in ${currentLang}`);
            }
        });
        const helpText = document.getElementById('help-text');
        if (helpText) {
            helpText.innerHTML = i18n[currentLang].helpText;
        }
        const tacoTabBtn = document.querySelector('.tab-btn[data-tab="taco"]');
        const comboTabBtn = document.querySelector('.tab-btn[data-tab="combo"]');
        if (tacoTabBtn) tacoTabBtn.textContent = `🥩 ${i18n[currentLang].tacoTitle}`;
        if (comboTabBtn) comboTabBtn.textContent = `🌯 ${i18n[currentLang].comboTitle}`;
        updateComboItemsLang();
    } catch (error) {
        console.error('Language update failed:', error);
    }
}

function updateComboItemsLang() {
    try {
        document.querySelectorAll('.item label').forEach(label => {
            const forAttr = label.getAttribute('for');
            if (forAttr.endsWith('-name')) label.textContent = i18n[currentLang].itemName;
            if (forAttr.endsWith('-cost')) label.textContent = i18n[currentLang].itemCost;
            if (forAttr.endsWith('-qty')) label.textContent = i18n[currentLang].itemQty;
            if (forAttr.endsWith('-price')) label.textContent = i18n[currentLang].itemPrice;
        });
        document.querySelectorAll('.item button').forEach(btn => {
            btn.textContent = i18n[currentLang].removeItem;
        });
    } catch (error) {
        console.error('Combo items language update failed:', error);
    }
}

function setupLanguageToggle() {
    const langEn = document.getElementById('lang-en');
    const langEs = document.getElementById('lang-es');
    if (!langEn || !langEs) {
        console.error('Language buttons not found');
        return;
    }
    langEn.addEventListener('click', () => {
        currentLang = 'en';
        langEn.classList.add('active');
        langEs.classList.remove('active');
        updateLanguage();
    });
    langEs.addEventListener('click', () => {
        currentLang = 'es';
        langEn.classList.remove('active');
        langEs.classList.add('active');
        updateLanguage();
    });
}

function setupTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    if (!tabButtons.length) {
        console.error('No tab buttons found');
        return;
    }
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
            const targetTab = document.getElementById(`${btn.dataset.tab}-tab`);
            if (targetTab) {
                targetTab.classList.add('active');
            } else {
                console.error(`Tab content not found for: ${btn.dataset.tab}`);
            }
        });
    });
}

function setupModal() {
    const modal = document.getElementById('help-modal');
    const helpBtn = document.getElementById('help-btn');
    const closeModal = document.getElementById('close-modal');
    if (!modal || !helpBtn || !closeModal) {
        console.error('Modal elements not found');
        return;
    }
    helpBtn.addEventListener('click', () => {
        modal.classList.add('active');
    });
    closeModal.addEventListener('click', () => {
        modal.classList.remove('active');
    });
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.remove('active');
        }
    });
}

function setupTacoCalculator() {
    const forms = document.querySelectorAll('.taco-form');
    if (!forms.length) {
        console.error('No taco forms found');
        return;
    }
    forms.forEach(form => {
        const meatType = form.dataset.meat;
        form.querySelectorAll('input').forEach(input => {
            input.addEventListener('input', () => calculateTaco(meatType));
        });
        calculateTaco(meatType);
    });
}

function calculateTaco(meatType) {
    const card = document.querySelector(`.card[data-meat="${meatType}"]`);
    if (!card) {
        console.error(`Card for ${meatType} not found`);
        return;
    }
    const inputs = {
        rawPrice: card.querySelector('.rawPrice'),
        batchWeight: card.querySelector('.batchWeight'),
        trimWaste: card.querySelector('.trimWaste'),
        cookLoss: card.querySelector('.cookLoss'),
        marinadeCost: card.querySelector('.marinadeCost'),
        tortillaCost: card.querySelector('.tortillaCost'),
        toppingsCost: card.querySelector('.toppingsCost'),
        portionOz: card.querySelector('.portionOz'),
        targetFoodCost: card.querySelector('.targetFoodCost'),
        plannedPrice: card.querySelector('.plannedPrice')
    };
    if (Object.values(inputs).some(input => !input)) {
        console.error(`Missing inputs for ${meatType}`);
        return;
    }
    const values = {
        rawPrice: parseFloat(inputs.rawPrice.value) || 0,
        batchWeight: parseFloat(inputs.batchWeight.value) || 0,
        trimWaste: parseFloat(inputs.trimWaste.value) / 100 || 0,
        cookLoss: parseFloat(inputs.cookLoss.value) / 100 || 0,
        marinadeCost: parseFloat(inputs.marinadeCost.value) || 0,
        tortillaCost: parseFloat(inputs.tortillaCost.value) || 0,
        toppingsCost: parseFloat(inputs.toppingsCost.value) || 0,
        portionOz: parseFloat(inputs.portionOz.value) || 1,
        targetFoodCost: parseFloat(inputs.targetFoodCost.value) / 100 || 0.3,
        plannedPrice: parseFloat(inputs.plannedPrice.value) || 0
    };
    const cookedYield = values.batchWeight * (1 - values.trimWaste) * (1 - values.cookLoss);
    const tacosPerBatch = Math.floor((cookedYield * 16) / values.portionOz);
    const totalMeatCost = (values.rawPrice * values.batchWeight) + values.marinadeCost;
    const meatCostPerTaco = tacosPerBatch > 0 ? totalMeatCost / tacosPerBatch : 0;
    const nonMeatCostPerTaco = values.tortillaCost + values.toppingsCost;
    const totalFoodCostPerTaco = meatCostPerTaco + nonMeatCostPerTaco;
    const suggestedPrice = totalFoodCostPerTaco / values.targetFoodCost;
    const actualFoodCost = values.plannedPrice > 0 ? (totalFoodCostPerTaco / values.plannedPrice) * 100 : 0;
    const grossMargin = values.plannedPrice - totalFoodCostPerTaco;

    const results = {
        cookedYieldRes: card.querySelector('.cookedYieldRes'),
        tacosPerBatchRes: card.querySelector('.tacosPerBatchRes'),
        meatCostPerTacoRes: card.querySelector('.meatCostPerTacoRes'),
        nonMeatCostPerTacoRes: card.querySelector('.nonMeatCostPerTacoRes'),
        totalFoodCostPerTacoRes: card.querySelector('.totalFoodCostPerTacoRes'),
        suggestedPriceRes: card.querySelector('.suggestedPriceRes'),
        actualFoodCostRes: card.querySelector('.actualFoodCostRes'),
        grossMarginRes: card.querySelector('.grossMarginRes')
    };
    if (Object.values(results).some(result => !result)) {
        console.error(`Missing result elements for ${meatType}`);
        return;
    }
    results.cookedYieldRes.textContent = cookedYield.toFixed(2);
    results.tacosPerBatchRes.textContent = tacosPerBatch;
    results.meatCostPerTacoRes.textContent = meatCostPerTaco.toFixed(2);
    results.nonMeatCostPerTacoRes.textContent = nonMeatCostPerTaco.toFixed(2);
    results.totalFoodCostPerTacoRes.textContent = totalFoodCostPerTaco.toFixed(2);
    results.suggestedPriceRes.textContent = suggestedPrice.toFixed(2);
    results.actualFoodCostRes.textContent = actualFoodCost.toFixed(1) + '%';
    results.grossMarginRes.textContent = grossMargin.toFixed(2);
}

let itemCount = 0;

function setupComboBuilder() {
    const addItemBtn = document.getElementById('add-item');
    const comboPriceInput = document.getElementById('comboPrice');
    if (!addItemBtn || !comboPriceInput) {
        console.error('Combo builder elements not found');
        return;
    }
    addItemBtn.addEventListener('click', addComboItem);
    comboPriceInput.addEventListener('input', calculateCombo);
}

function addComboItem() {
    itemCount++;
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');
    itemDiv.innerHTML = `
        <label for="item${itemCount}-name">${i18n[currentLang].itemName}</label>
        <input type="text" id="item${itemCount}-name" placeholder="e.g., Taco">
        <label for="item${itemCount}-cost">${i18n[currentLang].itemCost}</label>
        <input type="number" id="item${itemCount}-cost" min="0" step="0.01" value="0">
        <label for="item${itemCount}-qty">${i18n[currentLang].itemQty}</label>
        <input type="number" id="item${itemCount}-qty" min="1" step="1" value="1">
        <label for="item${itemCount}-price">${i18n[currentLang].itemPrice}</label>
        <input type="number" id="item${itemCount}-price" min="0" step="0.01" value="0">
        <button class="remove-item">${i18n[currentLang].removeItem}</button>
    `;
    const comboItems = document.getElementById('combo-items');
    if (comboItems) {
        comboItems.appendChild(itemDiv);
        itemDiv.querySelectorAll('input').forEach(input => input.addEventListener('input', calculateCombo));
        itemDiv.querySelector('.remove-item').addEventListener('click', () => {
            itemDiv.remove();
            calculateCombo();
        });
        updateComboItemsLang();
    } else {
        console.error('Combo items container not found');
    }
}

function calculateCombo() {
    let totalCost = 0;
    let alaCarte = 0;
    document.querySelectorAll('.item').forEach(item => {
        const costInput = item.querySelector('input[type="number"]:nth-of-type(1)');
        const qtyInput = item.querySelector('input[type="number"]:nth-of-type(2)');
        const priceInput = item.querySelector('input[type="number"]:nth-of-type(3)');
        if (!costInput || !qtyInput || !priceInput) return;
        const cost = parseFloat(costInput.value) || 0;
        const qty = parseFloat(qtyInput.value) || 1;
        const price = parseFloat(priceInput.value) || 0;
        totalCost += cost * qty;
        alaCarte += price * qty;
    });
    const comboPrice = parseFloat(document.getElementById('comboPrice')?.value) || 0;
    const savings = alaCarte - comboPrice;
    const margin = comboPrice - totalCost;

    const results = {
        totalComboCostRes: document.getElementById('totalComboCostRes'),
        alaCartePriceRes: document.getElementById('alaCartePriceRes'),
        comboSavingsRes: document.getElementById('comboSavingsRes'),
        comboMarginRes: document.getElementById('comboMarginRes')
    };
    if (Object.values(results).some(result => !result)) {
        console.error('Missing combo result elements');
        return;
    }
    results.totalComboCostRes.textContent = totalCost.toFixed(2);
    results.alaCartePriceRes.textContent = alaCarte.toFixed(2);
    results.comboSavingsRes.textContent = savings.toFixed(2);
    results.comboMarginRes.textContent = margin.toFixed(2);
}

function initialize() {
    const loadingMessage = document.getElementById('loading-message');
    if (loadingMessage) loadingMessage.style.display = 'block';
    try {
        updateLanguage();
        setupLanguageToggle();
        setupTabs();
        setupModal();
        setupTacoCalculator();
        setupComboBuilder();
        calculateCombo();
        if (loadingMessage) loadingMessage.style.display = 'none';
    } catch (error) {
        console.error('Initialization failed:', error);
        if (loadingMessage) {
            loadingMessage.textContent = 'Error loading Taco Calculator. Please check console.';
        }
    }
}

document.addEventListener('DOMContentLoaded', initialize);