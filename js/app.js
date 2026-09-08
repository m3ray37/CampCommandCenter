// ============================================
// DEFAULT DATA WITH ALL USER TWEAKS
// ============================================
const DEFAULT_DATA = {
    categories: [
        {
            id: "cat_maintenance",
            title: "🔧 Pre-Trip Maintenance & Systems Check",
            subtitle: "Perform 7–10 days before departure to catch repairs early.",
            badge: "7-10 Days Before",
            items: [
                { id: "m1", text: "Truck: Check oil and gas up", checked: false },
                { id: "m3", text: "Tires: Check tire pressure (including the spare) to cold PSI specs; check tread & side walls.", checked: false },
                { id: "m4", text: "Canvas & Roof: Open to inspect for damage and for pre-trip cleaning.", checked: false },
                { id: "m5", text: "Lights & Brakes: Test brake lights, turn signals, running lights, and electric brake controller connection.", checked: false },
                { id: "m6", text: "Water System: Sanitize fresh water tank (if using onboard water) and check for plumbing leaks.", checked: false },
                { id: "m7", text: "Fill fresh water tank", checked: false },
                { id: "m8", text: "Check and clean portable toilet", checked: false }
            ]
        },
        {
            id: "cat_kitchen",
            title: "🍳 Kitchen & Dining Essentials",
            subtitle: "Cooking gear, cleaning supplies, and dining table setups.",
            badge: "Kitchen",
            items: [
                { id: "k1", text: "Mini Grill and gas canisters", checked: false },
                { id: "k2", text: "Long-stem lighter", checked: false },
                { id: "k3", text: "Marshmallow roasting sticks", checked: false },
                { id: "k4", text: "Paper towels", checked: false },
                { id: "k5", text: "Heavy-duty aluminum foil", checked: false },
                { id: "k6", text: "Ziplock bags", checked: false },
                { id: "k7", text: "Trash bags & grocery bags", checked: false },
                { id: "k8", text: "Biodegradable dish soap & hand towels", checked: false },
                { id: "k9", text: "Tablecloth & folding table", checked: false },
                { id: "k10", text: "Mini fridge / cooler", checked: false },
                { id: "k11", text: "Water dispenser jug", checked: false },
                { id: "k12", text: "Toilet Paper and wipes", checked: false }
            ]
        },
        {
            id: "cat_sleep",
            title: "😴 Sleep & Interior Comfort",
            subtitle: "Bunk bedding, thermal insulation, and climate control.",
            badge: "Cabin Comfort",
            items: [
                { id: "s1", text: "Bed sheets", checked: false },
                { id: "s2", text: "Quilts or Comforters", checked: false },
                { id: "s3", text: "Pillows", checked: false },
                { id: "s4", text: "Space heater", checked: false },
                { id: "s5", text: "Box fan", checked: false }
            ]
        },
        {
            id: "cat_campsite",
            title: "🛠️ Campsite Setup & Utility Gear",
            subtitle: "Leveling, stabilizer pads, electrical hookups, and freshwater hoses.",
            badge: "Setup & Hookups",
            items: [
                { id: "cs1", text: "Wheel chocks", checked: false },
                { id: "cs2", text: "Curved Leveler", checked: false },
                { id: "cs3", text: "Small bubble level", checked: false },
                { id: "cs4", text: "Wood blocks or pads for stabilizer jack feet", checked: false },
                { id: "cs5", text: "Exterior outdoor rug / ground mat", checked: false },
                { id: "cs6", text: "Extension cords & 30A/20A adapter plug", checked: false },
                { id: "cs7", text: "Food-grade drinking water hose", checked: false },
                { id: "cs8", text: "Grey water collection tote and drain hose", checked: false }
            ]
        },
        {
            id: "cat_emergency",
            title: "🚨 Emergency, Tools & Repair Kit",
            subtitle: "Essential roadside emergency gear and pop-up specific repair tools.",
            badge: "Safety & Repair",
            items: [
                { id: "e1", text: "Lug wrench / Torque wrench", checked: false },
                { id: "e2", text: "Tire pressure gauge", checked: false },
                { id: "e3", text: "Canvas/vinyl repair tape", checked: false },
                { id: "e4", text: "Seam Sealer", checked: false },
                { id: "e5", text: "Assorted 12V ATC blade fuses", checked: false },
                { id: "e6", text: "Zip ties", checked: false },
                { id: "e7", text: "Bungee cords", checked: false },
                { id: "e8", text: "Duct tape", checked: false },
                { id: "e9", text: "Silicone spray / dry lube", checked: false },
                { id: "e10", text: "LED emergency flares/beacons", checked: false },
                { id: "e11", text: "Work gloves", checked: false },
                { id: "e12", text: "Headlamp", checked: false }
            ]
        },
        {
            id: "cat_outdoor",
            title: "🌲 Outdoor, Gear & Recreation",
            subtitle: "Chairs, lighting, firewood, water sports, and camp games.",
            badge: "Recreation",
            items: [
                { id: "o1", text: "Camp chairs (one for each person)", checked: false },
                { id: "o2", text: "Kayaks, paddles & life jackets", checked: false },
                { id: "o3", text: "Headlamps", checked: false },
                { id: "o4", text: "Extra batteries", checked: false },
                { id: "o5", text: "Thermacell & bug spray", checked: false },
                { id: "o6", text: "Sunscreen & aloe vera", checked: false },
                { id: "o7", text: "Portable Bluetooth speaker", checked: false },
                { id: "o8", text: "Cornhole boards and bags", checked: false },
                { id: "o9", text: "Adventure backpack", checked: false },
                { id: "o10", text: "Ren fest garb (optional)", checked: false },
                { id: "o11", text: "Fire starters", checked: false },
                { id: "o12", text: "Fire tool", checked: false },
                { id: "o13", text: "Camp ax", checked: false },
                { id: "o14", text: "Water bottles", checked: false },
                { id: "o15", text: "Travel mugs", checked: false },
                { id: "o16", text: "Beach wagon", checked: false }
            ]
        },
        {
            id: "cat_clothing",
            title: "👕 Clothing & Personal Items",
            subtitle: "Weather-appropriate apparel, footwear, toiletries, and first aid.",
            badge: "Personal",
            items: [
                { id: "cl1", text: "Weather-appropriate clothes", checked: false },
                { id: "cl2", text: "Layers", checked: false },
                { id: "cl3", text: "Rain jackets / hoodies", checked: false },
                { id: "cl4", text: "Hiking shoes", checked: false },
                { id: "cl5", text: "Slip-on camp shoes", checked: false },
                { id: "cl6", text: "Socks", checked: false },
                { id: "cl7", text: "Underwear", checked: false },
                { id: "cl8", text: "Swimsuits", checked: false },
                { id: "cl9", text: "Beach towels", checked: false },
                { id: "cl10", text: "Sleepwear", checked: false },
                { id: "cl11", text: "Thermals", checked: false },
                { id: "cl12", text: "Soap", checked: false },
                { id: "cl13", text: "Shampoo", checked: false },
                { id: "cl14", text: "Quick-dry towels", checked: false },
                { id: "cl15", text: "Toothbrushes", checked: false },
                { id: "cl16", text: "Toothpaste", checked: false },
                { id: "cl17", text: "Period supplies (if needed)", checked: false },
                { id: "cl18", text: "First Aid Kit (bandages, antiseptic, pain relievers, tweezers, allergy meds, Gas-X)", checked: false }
            ]
        },
        {
            id: "cat_house",
            title: "🏠 House Prep & Pet Security",
            subtitle: "Home safety checklist and cat auto-feeder/litter prep before departure.",
            badge: "Home & Pets",
            items: [
                { id: "hp1", text: "Empty refrigerator of perishables", checked: false },
                { id: "hp2", text: "Take out trash", checked: false },
                { id: "hp3", text: "Take out recycling (if needed)", checked: false },
                { id: "hp4", text: "Check/change security camera batteries", checked: false },
                { id: "hp5", text: "Water indoor plants", checked: false },
                { id: "hp6", text: "Water outdoor plants", checked: false },
                { id: "hp7", text: "Mow the lawn before leaving", checked: false },
                { id: "hp8", text: "Fill and set automatic feeders", checked: false },
                { id: "hp9", text: "Clean all litter boxes", checked: false },
                { id: "hp10", text: "Clean and fill cat water fountain", checked: false },
                { id: "hp11", text: "Close bedroom doors and secure pet gates", checked: false },
                { id: "hp12", text: "Empty basement trash", checked: false },
                { id: "hp13", text: "Leave checklist for pet sitter", checked: false }
            ]
        },
        {
            id: "cat_hitch",
            title: "🚗 Final Hitch-Up & Departure Protocol",
            subtitle: "Final hitching, electrical plug test, and safety pin checks immediately before pulling out.",
            badge: "Departure Safety",
            items: [
                { id: "h1", text: "Trailer coupler latch locked with hitch lock", checked: false },
                { id: "h2", text: "Tow vehicle hitch receiver pin/lock secured", checked: false },
                { id: "h3", text: "Safety chains crossed underneath the trailer tongue and attached", checked: false },
                { id: "h4", text: "7-pin electrical plug connected tightly; test tail lights, brake lights, turn signals", checked: false },
                { id: "h5", text: "Check side mirrors on tow vehicle for visibility", checked: false },
                { id: "h6", text: "Test brakes and brake controller connection (Echo)", checked: false },
                { id: "h7", text: "Check ratchet straps on bikes, kayaks, and truck bed", checked: false },
                { id: "h8", text: "Check all camper doors locked", checked: false },
                { id: "h9", text: "Stabilizer feet raised", checked: false }
            ]
        }
    ],
    groceries: [
        "Beverages",
        "Ice packs for fridge",
        "S'mores ingredients (Graham crackers, chocolate, marshmallows)",
        "Cooking oil / butter",
        "Coffee & creamer",
        "Tea",
        "Tea kettle"
    ],
    mealDays: [
        { dayNumber: 1, dayTitle: "Travel & Arrival" },
        { dayNumber: 2, dayTitle: "Full Campground Day" },
        { dayNumber: 3, dayTitle: "Pack-Up & Departure" }
    ]
};

// ============================================
// APPLICATION STATE
// ============================================
let appData = null;
let activeTab = 'checklist';
let collapsedCategories = {};
let chartDoughnutInstance = null;
let chartBarInstance = null;

const STORAGE_KEY = 'popup_camper_planner_v2';

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    loadState();
    populateCategoryDropdown();
    renderAll();
});

// ============================================
// STATE MANAGEMENT
// ============================================
function loadState() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            appData = JSON.parse(stored);
        } else {
            appData = JSON.parse(JSON.stringify(DEFAULT_DATA));
        }
    } catch (e) {
        console.error("Failed loading saved state:", e);
        appData = JSON.parse(JSON.stringify(DEFAULT_DATA));
    }
}

function saveState() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
    } catch (e) {
        console.error("Failed saving state:", e);
    }
    updateHeaderStats();
}

function resetChecklistData() {
    if (confirm("Are you sure you want to reset all checklists and progress back to defaults?")) {
        appData = JSON.parse(JSON.stringify(DEFAULT_DATA));
        collapsedCategories = {};
        saveState();
        renderAll();
    }
}

// ============================================
// TAB NAVIGATION
// ============================================
function switchTab(tabId) {
    activeTab = tabId;
    document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('bg-amber-500', 'text-stone-900', 'shadow');
        btn.classList.add('text-emerald-100', 'hover:bg-emerald-800/60');
    });

    const activeContent = document.getElementById(`tab-${tabId}`);
    if (activeContent) activeContent.classList.remove('hidden');

    const activeBtn = document.getElementById(`tab-btn-${tabId}`);
    if (activeBtn) {
        activeBtn.classList.add('bg-amber-500', 'text-stone-900', 'shadow');
        activeBtn.classList.remove('text-emerald-100', 'hover:bg-emerald-800/60');
    }

    if (tabId === 'analytics') {
        setTimeout(() => renderAnalyticsCharts(), 100);
    }
}

// ============================================
// MAIN RENDER COORDINATOR
// ============================================
function renderAll() {
    updateHeaderStats();
    renderChecklist();
    renderMealPlanner();
    renderHitchWizard();
    if (activeTab === 'analytics') renderAnalyticsCharts();
}

// ============================================
// HEADER STATS
// ============================================
function updateHeaderStats() {
    let total = 0;
    let checked = 0;

    appData.categories.forEach(cat => {
        cat.items.forEach(item => {
            total++;
            if (item.checked) checked++;
        });
    });

    const percent = total > 0 ? Math.round((checked / total) * 100) : 0;

    document.getElementById('header-percent').innerText = `${percent}%`;
    document.getElementById('header-progress-bar').style.width = `${percent}%`;
    document.getElementById('header-completed-count').innerText = checked;
    document.getElementById('header-total-count').innerText = total;
}

// ============================================
// POPULATE CATEGORY DROPDOWN
// ============================================
function populateCategoryDropdown() {
    const select = document.getElementById('new-item-category');
    if (!select) return;
    select.innerHTML = '';
    appData.categories.forEach(cat => {
        const opt = document.createElement('option');
        opt.value = cat.id;
        opt.innerText = cat.title;
        select.appendChild(opt);
    });
}

// ============================================
// TAB 1: MASTER CHECKLIST
// ============================================
function handleSearch() {
    renderChecklist();
}

function expandAllCategories() {
    collapsedCategories = {};
    renderChecklist();
}

function collapseAllCategories() {
    appData.categories.forEach(cat => {
        collapsedCategories[cat.id] = true;
    });
    renderChecklist();
}

function toggleCategoryCollapse(catId) {
    collapsedCategories[catId] = !collapsedCategories[catId];
    renderChecklist();
}

function toggleItem(catId, itemId) {
    const cat = appData.categories.find(c => c.id === catId);
    if (!cat) return;
    const item = cat.items.find(i => i.id === itemId);
    if (item) {
        item.checked = !item.checked;
        saveState();
        renderAll();
    }
}

function addCustomItem() {
    const catId = document.getElementById('new-item-category').value;
    const input = document.getElementById('new-item-text');
    const text = input.value.trim();

    if (!text) return;

    const cat = appData.categories.find(c => c.id === catId);
    if (cat) {
        const newId = `custom_${Date.now()}`;
        cat.items.push({ id: newId, text: text, checked: false });
        input.value = '';
        saveState();
        renderAll();
    }
}

function deleteItem(catId, itemId) {
    const cat = appData.categories.find(c => c.id === catId);
    if (cat) {
        cat.items = cat.items.filter(i => i.id !== itemId);
        saveState();
        renderAll();
    }
}

function renderChecklist() {
    const container = document.getElementById('checklist-categories-container');
    if (!container) return;

    const searchTerm = (document.getElementById('checklist-search')?.value || '').toLowerCase();
    const statusFilter = document.getElementById('status-filter')?.value || 'all';

    container.innerHTML = '';

    appData.categories.forEach(cat => {
        const totalCount = cat.items.length;
        const checkedCount = cat.items.filter(i => i.checked).length;
        const catPercent = totalCount > 0 ? Math.round((checkedCount / totalCount) * 100) : 0;

        const filteredItems = cat.items.filter(item => {
            const matchesSearch = item.text.toLowerCase().includes(searchTerm);
            const matchesStatus = (statusFilter === 'all') ||
                (statusFilter === 'completed' && item.checked) ||
                (statusFilter === 'uncompleted' && !item.checked);
            return matchesSearch && matchesStatus;
        });

        if (searchTerm && filteredItems.length === 0) return;

        const isCollapsed = !!collapsedCategories[cat.id];

        const card = document.createElement('div');
        card.className = "bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden transition-all";

        card.innerHTML = `
            <div class="p-4 bg-stone-50 border-b border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer" onclick="toggleCategoryCollapse('${cat.id}')">
                <div class="flex items-start sm:items-center space-x-3">
                    <span class="text-xl shrink-0" aria-hidden="true">${isCollapsed ? '➕' : '➖'}</span>
                    <div>
                        <div class="flex items-center space-x-2">
                            <h3 class="font-bold text-stone-800 text-sm sm:text-base">${cat.title}</h3>
                            <span class="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-stone-200 text-stone-700">${cat.badge}</span>
                        </div>
                        <p class="text-xs text-stone-500">${cat.subtitle}</p>
                    </div>
                </div>

                <div class="flex items-center space-x-3 shrink-0 self-end sm:self-center">
                    <div class="text-right">
                        <span class="text-xs font-bold ${catPercent === 100 ? 'text-emerald-700' : 'text-stone-700'}">${checkedCount}/${totalCount} Done</span>
                        <span class="text-[11px] text-stone-400 block">${catPercent}%</span>
                    </div>
                    <div class="w-16 bg-stone-200 rounded-full h-2 overflow-hidden">
                        <div class="bg-emerald-600 h-2 rounded-full transition-all duration-300" style="width: ${catPercent}%"></div>
                    </div>
                </div>
            </div>
        `;

        if (!isCollapsed) {
            const body = document.createElement('div');
            body.className = "p-4 space-y-2 bg-white";

            if (filteredItems.length === 0) {
                body.innerHTML = `<div class="text-xs text-stone-400 italic py-2">No matching items found in this section.</div>`;
            } else {
                filteredItems.forEach(item => {
                    const itemRow = document.createElement('div');
                    itemRow.className = `flex items-center justify-between p-2.5 rounded-lg border transition ${item.checked ? 'bg-stone-50/70 border-stone-200 text-stone-400' : 'bg-white border-stone-200 hover:border-amber-300 text-stone-800'}`;
                    
                    itemRow.innerHTML = `
                        <label class="flex items-start space-x-3 cursor-pointer flex-grow pr-2">
                            <input type="checkbox" ${item.checked ? 'checked' : ''} onchange="toggleItem('${cat.id}', '${item.id}')" class="mt-0.5 h-4 w-4 rounded border-stone-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer">
                            <span class="text-xs sm:text-sm font-medium leading-tight ${item.checked ? 'line-through text-stone-400' : 'text-stone-800'}">${item.text}</span>
                        </label>
                        <button onclick="deleteItem('${cat.id}', '${item.id}')" title="Delete item" class="text-xs text-stone-300 hover:text-rose-600 px-2 py-1 rounded transition">
                            🗑️
                        </button>
                    `;
                    body.appendChild(itemRow);
                });
            }
            card.appendChild(body);
        }

        container.appendChild(card);
    });
}

// ============================================
// TAB 2: 3-DAY MEAL PLANNER
// ============================================
function renderMealPlanner() {
    if (appData.meals) {
        for (const key in appData.meals) {
            const el = document.getElementById(key);
            if (el) el.value = appData.meals[key];
        }
    }

    // Render Snacks & Desserts
    const snacksEl = document.getElementById('meal-snacks-desserts');
    if (snacksEl && appData.meals && appData.meals['meal-snacks-desserts']) {
        snacksEl.value = appData.meals['meal-snacks-desserts'];
    }

    // Render Grocery Items
    const groceryContainer = document.getElementById('grocery-items-list');
    if (groceryContainer) {
        groceryContainer.innerHTML = '';
        (appData.groceries || []).forEach((gItem, idx) => {
            const div = document.createElement('div');
            div.className = "flex items-center space-x-2 bg-stone-50 p-2 rounded-lg border border-stone-200";
            div.innerHTML = `
                <span class="text-emerald-700 text-xs">•</span>
                <input type="text" value="${gItem}" onchange="updateGroceryItem(${idx}, this.value)" class="w-full text-xs bg-transparent focus:outline-none focus:ring-1 focus:ring-emerald-500 text-stone-800">
                <button onclick="deleteGroceryItem(${idx})" class="text-xs text-stone-300 hover:text-rose-600 px-1">✕</button>
            `;
            groceryContainer.appendChild(div);
        });
    }

    // Render Meal Day Cards
    const mealsContainer = document.getElementById('meal-cards-container');
    if (mealsContainer) {
        mealsContainer.innerHTML = '';
        (appData.mealDays || []).forEach((day, idx) => {
            const colors = ['emerald', 'amber', 'stone'];
            const colorScheme = colors[idx % 3];
            const bgColor = colorScheme === 'emerald' ? 'bg-emerald-800' : colorScheme === 'amber' ? 'bg-amber-700' : 'bg-stone-800';
            const textColor = colorScheme === 'emerald' ? 'text-emerald-200' : colorScheme === 'amber' ? 'text-amber-200' : 'text-stone-300';
            const ringColor = colorScheme === 'emerald' ? 'focus:ring-emerald-600' : colorScheme === 'amber' ? 'focus:ring-amber-600' : 'focus:ring-stone-600';

            const card = document.createElement('div');
            card.className = "bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden flex flex-col";
            card.innerHTML = `
                <div class="${bgColor} text-white p-4">
                    <div class="text-xs uppercase tracking-wider ${textColor} font-bold">Day ${day.dayNumber}</div>
                    <div class="flex justify-between items-center">
                        <h3 class="text-lg font-bold">${day.dayTitle}</h3>
                        ${idx >= 3 ? `<button onclick="removeMealDay(${idx})" class="text-xs bg-rose-500 hover:bg-rose-600 px-2 py-1 rounded font-semibold transition">Remove</button>` : ''}
                    </div>
                </div>
                <div class="p-4 space-y-4 flex-grow bg-stone-50/50">
                    <div>
                        <label class="block text-xs font-bold text-stone-700 uppercase mb-1">🍳 Breakfast</label>
                        <textarea id="meal-d${day.dayNumber}-breakfast" onchange="saveMealPlan()" rows="2" class="w-full text-xs p-2.5 bg-white border border-stone-300 rounded-lg ${ringColor} focus:outline-none" placeholder="E.g., Pancakes, bacon, fresh fruit..."></textarea>
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-stone-700 uppercase mb-1">🥪 Lunch</label>
                        <textarea id="meal-d${day.dayNumber}-lunch" onchange="saveMealPlan()" rows="2" class="w-full text-xs p-2.5 bg-white border border-stone-300 rounded-lg ${ringColor} focus:outline-none" placeholder="E.g., Sandwiches, salad, snacks..."></textarea>
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-stone-700 uppercase mb-1">🔥 Dinner</label>
                        <textarea id="meal-d${day.dayNumber}-dinner" onchange="saveMealPlan()" rows="3" class="w-full text-xs p-2.5 bg-white border border-stone-300 rounded-lg ${ringColor} focus:outline-none" placeholder="E.g., Grilled meats, pasta, veggies..."></textarea>
                    </div>
                </div>
            `;
            mealsContainer.appendChild(card);
        });

        // Add button to add more meal days (only show if not too many)
        if ((appData.mealDays || []).length < 7) {
            const addBtn = document.createElement('div');
            addBtn.className = "flex items-center justify-center";
            addBtn.innerHTML = `<button onclick="addMealDay()" class="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg transition">+ Add Meal Day</button>`;
            mealsContainer.appendChild(addBtn);
        }
    }
}

function saveMealPlan() {
    if (!appData.meals) appData.meals = {};
    
    // Save meal day inputs
    (appData.mealDays || []).forEach((day) => {
        const breakfastEl = document.getElementById(`meal-d${day.dayNumber}-breakfast`);
        const lunchEl = document.getElementById(`meal-d${day.dayNumber}-lunch`);
        const dinnerEl = document.getElementById(`meal-d${day.dayNumber}-dinner`);
        
        if (breakfastEl) appData.meals[`meal-d${day.dayNumber}-breakfast`] = breakfastEl.value;
        if (lunchEl) appData.meals[`meal-d${day.dayNumber}-lunch`] = lunchEl.value;
        if (dinnerEl) appData.meals[`meal-d${day.dayNumber}-dinner`] = dinnerEl.value;
    });

    // Save snacks & desserts
    const snacksEl = document.getElementById('meal-snacks-desserts');
    if (snacksEl) appData.meals['meal-snacks-desserts'] = snacksEl.value;
    
    saveState();
}

function addMealDay() {
    const nextDay = (appData.mealDays || []).length + 1;
    if (!appData.mealDays) appData.mealDays = [];
    appData.mealDays.push({ dayNumber: nextDay, dayTitle: `Camping Day ${nextDay}` });
    saveState();
    renderMealPlanner();
}

function removeMealDay(idx) {
    if ((appData.mealDays || []).length > 3) {
        if (confirm(`Remove Day ${appData.mealDays[idx].dayNumber}?`)) {
            appData.mealDays.splice(idx, 1);
            saveState();
            renderMealPlanner();
        }
    }
}

function addGroceryItem() {
    if (!appData.groceries) appData.groceries = [];
    appData.groceries.push("New grocery item...");
    saveState();
    renderMealPlanner();
}

function updateGroceryItem(idx, val) {
    if (appData.groceries && appData.groceries[idx] !== undefined) {
        appData.groceries[idx] = val;
        saveState();
    }
}

function deleteGroceryItem(idx) {
    if (appData.groceries) {
        appData.groceries.splice(idx, 1);
        saveState();
        renderMealPlanner();
    }
}

function printGroceryList() {
    const printWindow = window.open('', '_blank');
    const groceryHTML = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Grocery List - Camping Trip</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; line-height: 1.8; }
                h1 { margin-top: 0; }
                .item { padding: 8px 0; border-bottom: 1px solid #ddd; }
                .item:last-child { border-bottom: none; }
                .checkbox { margin-right: 10px; }
            </style>
        </head>
        <body>
            <h1>🛒 Camping Trip Grocery List</h1>
            <div>
                ${(appData.groceries || []).map(item => `<div class="item"><input type="checkbox" class="checkbox"> ${item}</div>`).join('')}
            </div>
        </body>
        </html>
    `;
    printWindow.document.write(groceryHTML);
    printWindow.document.close();
    setTimeout(() => printWindow.print(), 250);
}

// ============================================
// TAB 3: HITCH & DEPARTURE WIZARD
// ============================================
function renderHitchWizard() {
    const hitchCat = appData.categories.find(c => c.id === 'cat_hitch');
    const maintenanceCat = appData.categories.find(c => c.id === 'cat_maintenance');
    const campsiteCat = appData.categories.find(c => c.id === 'cat_campsite');
    const emergencyCat = appData.categories.find(c => c.id === 'cat_emergency');

    const container = document.getElementById('hitch-wizard-steps');
    if (!container) return;
    container.innerHTML = '';

    // Step 1: Interior Cabin & Roof prep
    const step1Items = [
        { catId: 'cat_maintenance', id: 'm4', label: 'Canvas & Roof lowered & clean' },
        { catId: 'cat_campsite', id: 'cs1', label: 'Chocks in place before hitching' },
        { catId: 'cat_campsite', id: 'cs4', label: 'Stabilizer jacks fully retracted' },
        { catId: 'cat_maintenance', id: 'm1', label: 'Tow vehicle gas & oil checked' },
        { catId: 'cat_campsite', id: 'cs8', label: 'Grey water tote & hoses disconnected' }
    ];

    // Step 2: Exterior Breakdown
    const step2Items = [
        { catId: 'cat_campsite', id: 'cs5', label: 'Outdoor rug and camp chairs packed' },
        { catId: 'cat_campsite', id: 'cs6', label: '30A Power cord disconnected & stowed' },
        { catId: 'cat_campsite', id: 'cs7', label: 'Freshwater hose disconnected & drained' },
        { catId: 'cat_campsite', id: 'cs2', label: 'Leveling blocks pulled & stowed' },
        { catId: 'cat_emergency', id: 'e1', label: 'Wheel lug nut torque checked' },
        { catId: 'cat_emergency', id: 'e2', label: 'Trailer tire cold PSI checked' }
    ];

    // Step 3: Hitch & Safety (from cat_hitch directly)
    const step3Items = hitchCat ? hitchCat.items.map(i => ({ catId: 'cat_hitch', id: i.id, label: i.text })) : [];

    const steps = [
        { num: 1, title: '🏠 Interior & Roof Prep', items: step1Items, color: 'amber' },
        { num: 2, title: '🏕️ Exterior Breakdown', items: step2Items, color: 'amber' },
        { num: 3, title: '🔗 Hitch & Safety Connections', items: step3Items, color: 'amber' }
    ];

    steps.forEach(step => {
        let checkedCount = 0;
        const stepCard = document.createElement('div');
        stepCard.className = "bg-white p-5 rounded-2xl shadow-sm border-2 border-stone-200 hover:border-amber-500 transition";
        stepCard.innerHTML = `
            <div class="flex items-center justify-between mb-3 border-b border-stone-100 pb-2">
                <span class="text-xs font-bold bg-amber-100 text-amber-900 px-2.5 py-1 rounded-md">STEP ${step.num}</span>
                <span class="text-xs font-semibold text-stone-500" id="wizard-step${step.num}-count">0 / ${step.items.length}</span>
            </div>
            <h3 class="font-bold text-stone-800 mb-2">${step.title}</h3>
            <div class="space-y-2 text-xs" id="wizard-step${step.num}-items"></div>
        `;

        const itemsContainer = stepCard.querySelector(`#wizard-step${step.num}-items`);
        step.items.forEach(def => {
            const cat = appData.categories.find(c => c.id === def.catId);
            const item = cat ? cat.items.find(i => i.id === def.id) : null;
            const isChecked = item ? item.checked : false;

            if (isChecked) checkedCount++;

            const row = document.createElement('label');
            row.className = `flex items-start space-x-2.5 p-2 rounded-lg cursor-pointer border transition ${isChecked ? 'bg-emerald-50 border-emerald-200 text-emerald-900 font-medium' : 'bg-stone-50 border-stone-200 text-stone-700'}`;
            row.innerHTML = `
                <input type="checkbox" ${isChecked ? 'checked' : ''} onchange="toggleItem('${def.catId}', '${def.id}')" class="mt-0.5 h-4 w-4 rounded text-emerald-600 focus:ring-emerald-500">
                <span class="${isChecked ? 'line-through text-emerald-700' : 'text-stone-800'}">${def.label}</span>
            `;
            itemsContainer.appendChild(row);
        });

        const countEl = stepCard.querySelector(`#wizard-step${step.num}-count`);
        if (countEl) countEl.innerText = `${checkedCount} / ${step.items.length}`;

        container.appendChild(stepCard);
    });

    // Show clearance banner if all hitch items done
    if (hitchCat) {
        const allDone = hitchCat.items.every(i => i.checked);
        const banner = document.getElementById('departure-clearance-banner');
        if (banner) {
            if (allDone) banner.classList.remove('hidden');
            else banner.classList.add('hidden');
        }
    }
}

// ============================================
// TAB 4: READINESS ANALYTICS
// ============================================
function renderAnalyticsCharts() {
    const tbody = document.getElementById('analytics-table-body');
    if (tbody) {
        tbody.innerHTML = '';
        appData.categories.forEach(cat => {
            const total = cat.items.length;
            const done = cat.items.filter(i => i.checked).length;
            const remain = total - done;
            const pct = total > 0 ? Math.round((done / total) * 100) : 0;

            const tr = document.createElement('tr');
            tr.className = "hover:bg-stone-50";
            tr.innerHTML = `
                <td class="p-3 font-semibold text-stone-800">${cat.title}</td>
                <td class="p-3">${total}</td>
                <td class="p-3 text-emerald-700 font-bold">${done}</td>
                <td class="p-3 text-amber-700 font-bold">${remain}</td>
                <td class="p-3">
                    <div class="flex items-center space-x-2">
                        <span class="text-xs font-bold">${pct}%</span>
                        <div class="w-16 bg-stone-200 rounded-full h-2 overflow-hidden">
                            <div class="bg-emerald-600 h-2 rounded-full" style="width: ${pct}%"></div>
                        </div>
                    </div>
                </td>
            `;
            tbody.appendChild(tr);
        });
    }

    let totalChecked = 0;
    let totalUnchecked = 0;
    const categoryLabels = [];
    const categoryPercentages = [];

    appData.categories.forEach(cat => {
        const total = cat.items.length;
        const done = cat.items.filter(i => i.checked).length;
        totalChecked += done;
        totalUnchecked += (total - done);

        const shortLabel = cat.title.split(' ').slice(1, 3).join(' ');
        categoryLabels.push(shortLabel);
        categoryPercentages.push(total > 0 ? Math.round((done / total) * 100) : 0);
    });

    // Doughnut Chart
    const ctxDoughnut = document.getElementById('chart-overall-doughnut')?.getContext('2d');
    if (ctxDoughnut) {
        if (chartDoughnutInstance) chartDoughnutInstance.destroy();
        chartDoughnutInstance = new Chart(ctxDoughnut, {
            type: 'doughnut',
            data: {
                labels: ['Completed Items', 'Remaining Prep'],
                datasets: [{
                    data: [totalChecked, totalUnchecked],
                    backgroundColor: ['#059669', '#d97706'],
                    borderWidth: 2,
                    borderColor: '#ffffff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'bottom' }
                }
            }
        });
    }

    // Bar Chart
    const ctxBar = document.getElementById('chart-category-bar')?.getContext('2d');
    if (ctxBar) {
        if (chartBarInstance) chartBarInstance.destroy();
        chartBarInstance = new Chart(ctxBar, {
            type: 'bar',
            data: {
                labels: categoryLabels,
                datasets: [{
                    label: '% Ready',
                    data: categoryPercentages,
                    backgroundColor: '#047857',
                    borderRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: { callback: v => v + '%' }
                    }
                },
                plugins: {
                    legend: { display: false }
                }
            }
        });
    }
}
