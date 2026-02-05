const products = [
    // SMARTWATCH & TECH BUNDLES
    { id: 1, name: "Rock 006", price: 25000, category: "smartwatch", image: "assets/images/rgb_led_pocket_light.jpg" },
    { id: 2, name: "Rock-001", price: 22500, category: "smartwatch", image: "assets/images/rock_001_new.jpg" },
    { id: 3, name: "Rock 460", price: 20000, category: "smartwatch", image: "assets/images/rock_460_new.jpg" },
    { id: 4, name: "D99 Plus", price: 20000, category: "smartwatch", image: "assets/images/d99_plus_new.jpg" },
    { id: 5, name: "BIG 2.3", price: 19000, category: "smartwatch", image: "assets/images/big_2_3_new.jpg" },
    { id: 6, name: "HK9 Smart Watch", price: 12000, category: "smartwatch", image: "assets/images/hk9_smart_watch_real.png" },
    { id: 7, name: "Ace 40 Ultra 3", price: 13000, category: "smartwatch", image: "assets/images/ace_40_ultra_3_new.png" },
    { id: 8, name: "Rock 002 Doubled", price: 21000, category: "smartwatch", image: "assets/images/rock_002_doubled_real.png" },

    // POWER & AUDIO
    { id: 9, name: "Oraimo Powerbank 20,000mAh", price: 17500, category: "power", image: "assets/images/oraimo_powerbank_20000mah_real.png" },
    { id: 10, name: "New Age 33,000mAh Powerbank", price: 27500, category: "power", image: "assets/images/new_age_33000mah_powerbank_real.png" },
    { id: 11, name: "P47 Wireless Headphone", price: 5000, category: "power", image: "assets/images/laptop_stand.jpg" },
    { id: 12, name: "Wired Headset", price: 5500, category: "power", image: "assets/images/wired_headset_new.png" },
    { id: 13, name: "Bluetooth Earpod", price: 4500, category: "power", image: "assets/images/ace_40_ultra_3.jpg" },
    { id: 14, name: "High Quality Earpod", price: 6500, category: "power", image: "assets/images/high_quality_earpod_new.png" },

    // SOLAR & LIGHTING
    { id: 15, name: "Solar Kit", price: 22000, category: "solar", image: "assets/images/solar_kit_real.png" },
    { id: 16, name: "Emergency Solar Rechargeable Light", price: 7000, category: "solar", image: "assets/images/emergency_solar_rechargeable_light.png" },
    { id: 17, name: "3 Bulbs Solar Rechargeable Light", price: 6500, category: "solar", image: "assets/images/3_bulbs_solar_rechargeable_light_real.png" },
    { id: 18, name: "Solar Sensor Light", price: 11000, category: "solar", image: "assets/images/solar_sensor_light_real.png" },
    { id: 19, name: "Live Light Holder", price: 7000, category: "solar", image: "assets/images/live_light_holder.jpg" },
    { id: 20, name: "LED Light", price: 5000, category: "solar", image: "assets/images/led_light_real.png" },
    { id: 21, name: "RGB LED Pocket Light", price: 7000, category: "solar", image: "assets/images/rgb_led_pocket_light_real.png" },
    { id: 22, name: "Light with Remote (6 pcs)", price: 12000, category: "solar", image: "assets/images/light_with_remote_6_pcs_real.png" },

    // HOME & KITCHEN
    { id: 23, name: "SOKANY Air Fryer", price: 80000, category: "home", image: "assets/images/sokany_air_fryer_real.png" },
    { id: 24, name: "SOKANY Digital Kitchen Scale", price: 9000, category: "home", image: "assets/images/sokany_digital_kitchen_scale_real.png" },
    { id: 25, name: "Boscon Electric Jug", price: 9500, category: "home", image: "assets/images/boscon_electric_jug_real.png" },
    { id: 26, name: "Mandoline Slicer", price: 10000, category: "home", image: "assets/images/mandoline_slicer_real_new.png" },
    { id: 27, name: "Hand Blender", price: 8000, category: "home", image: "assets/images/hand_blender_real.png" },
    { id: 28, name: "Fruit Blender", price: 5500, category: "home", image: "assets/images/louis_vuitton_slippers.jpg" },
    { id: 29, name: "Maximus Iron", price: 11000, category: "home", image: "assets/images/mandoline_slicer.jpg" },
    { id: 30, name: "Mini Steam Iron", price: 6000, category: "home", image: "assets/images/mini_steam_iron_real.png" },

    // BEAUTY & PERSONAL CARE
    { id: 31, name: "ALSTOW Hair Clipper", price: 13500, category: "beauty", image: "assets/images/alstow_hair_clipper_real.png" },
    { id: 32, name: "Professional Hair Clipper", price: 7000, category: "beauty", image: "assets/images/professional_hair_clipper_real.png" },
    { id: 33, name: "Sonar 5-in-1 Hair Dryer", price: 13500, category: "beauty", image: "assets/images/sonar_5_in_1_hair_dryer.jpg" },
    { id: 34, name: "Hot Comb", price: 8500, category: "beauty", image: "assets/images/hot_comb_real.png" },
    { id: 35, name: "Mini Straightener", price: 2000, category: "beauty", image: "assets/images/mini_straightener_real.png" },

    { id: 37, name: "Toothbrush Sterilizer", price: 5000, category: "beauty", image: "assets/images/toothbrush_sterilizer_real.png" },

    // PERFUMES (Grouped under Beauty/Other for filter simplicity or separate)
    { id: 38, name: "YILIYA 3-in-1 Perfume", price: 9000, category: "beauty", image: "assets/images/yiliya_3_in_1_perfume.png" },
    { id: 39, name: "CIO Perfumes 4-in-1", price: 10000, category: "beauty", image: "assets/images/cio_perfumes_4_in_1_real.png" },
    { id: 40, name: "ANGEL ELVES 4-in-1", price: 10000, category: "beauty", image: "assets/images/angel_elves_4_in_1_real.png" },

    // FASHION & LIFESTYLE
    { id: 41, name: "Men Pack", price: 21000, category: "fashion", image: "assets/images/men_pack_new.jpg" },
    { id: 42, name: "Louis Vuitton Slippers", price: 12500, category: "fashion", image: "assets/images/louis_vuitton_slippers_new.jpg" },
    { id: 43, name: "Leather Bag (Vintage)", price: 10000, category: "fashion", image: "assets/images/leather_bag_vintage_real.png" },
    { id: 44, name: "Hand Bag", price: 16000, category: "fashion", image: "assets/images/big_2_3.jpg" },

    // COOLING & OUTDOOR
    { id: 45, name: "Double Ended Spray Fan", price: 18500, category: "home", image: "assets/images/double_ended_spray_fan_real.png" },
    { id: 46, name: "Hand Held Spray Fan", price: 6000, category: "home", image: "assets/images/men_pack.jpg" },
    { id: 47, name: "Neck Fan", price: 7000, category: "home", image: "assets/images/neck_fan_real.png" },
    { id: 48, name: "Mini Hand Fan", price: 3000, category: "home", image: "assets/images/mini_hand_fan_real.png" },
    { id: 49, name: "Small Standing Fan", price: 18000, category: "home", image: "assets/images/d99_plus.jpg" },

    // CONTENT CREATION & PHONE ACCESSORIES
    { id: 56, name: "Video Making Kit", price: 8500, category: "accessories", image: "assets/images/video_making_kit_new.png" },
    { id: 57, name: "1.3 Meter Selfie Stick", price: 5000, category: "accessories", image: "assets/images/selfie_stick_1_3m.jpg" },
    { id: 58, name: "F20 Wireless Lavalier Mic", price: 19000, category: "accessories", image: "assets/images/f20_lavalier_mic_new.png" },
    { id: 59, name: "K9 Double Lapel Mic", price: 9000, category: "accessories", image: "assets/images/k9_double_lapel_mic_new.png" },

    // HOME & KITCHEN (ADDITIONAL)
    { id: 60, name: "3in1 Vacuum Flask", price: 8000, category: "home", image: "assets/images/vacuum_flask_3in1.png" },
    { id: 61, name: "Gold Cutlery Set", price: 17000, category: "home", image: "assets/images/gold_cutlery_set_new.png" },
    { id: 62, name: "Stainless Steel Kettle (3 Liters)", price: 7000, category: "home", image: "assets/images/stainless_steel_kettle.png" },
    { id: 63, name: "Foldable Electric Kettle", price: 8500, category: "home", image: "assets/images/foldable_electric_kettle.png" },
    { id: 64, name: "2-Face Sandwich Maker (Rashnik)", price: 13500, category: "home", image: "assets/images/rashnik_sandwich_maker.png" },

    { id: 66, name: "Hot Plate", price: 8500, category: "home", image: "assets/images/hot_plate_real_new.jpg" },
    { id: 67, name: "2L Yam Pounder", price: 12000, category: "home", image: "assets/images/yam_pounder_2l.png" },
    { id: 68, name: "Multifunctional Grinding Machine", price: 11000, category: "home", image: "assets/images/multifunctional_grinding_machine_real.png" },
    { id: 69, name: "Mini Sewing Machine", price: 15000, category: "home", image: "assets/images/mini_sewing_machine_real.png" },

    // SECURITY & LIGHTING
    { id: 70, name: "Mosquito Bat", price: 9000, category: "solar", image: "assets/images/mosquito_bat.png" },
    { id: 71, name: "Smart Security Camera", price: 10000, category: "solar", image: "assets/images/smart_security_camera.png" },
    { id: 72, name: "Rotating Bulb", price: 5000, category: "solar", image: "assets/images/rotating_bulb.png" },

    // HEALTH, BEAUTY & PERSONAL CARE (ADDITIONAL)
    { id: 73, name: "Straight Comb", price: 6000, category: "beauty", image: "assets/images/straight_comb.png" },
    { id: 74, name: "Blue Idea Massage Gun", price: 16500, category: "beauty", image: "assets/images/blue_idea_massage_gun.png" },
    { id: 75, name: "Artic Air Cooler Ultra Pro", price: 11000, category: "beauty", image: "assets/images/artic_air_cooler_ultra_pro.png" },
    { id: 76, name: "Humidifier (DP-7668)", price: 11000, category: "beauty", image: "assets/images/humidifier_dp7668.png" },
    { id: 77, name: "200ml Aromatherapy Humidifier", price: 12500, category: "beauty", image: "assets/images/aromatherapy_humidifier.png" },


    // POWER & ELECTRONICS (ADDITIONAL)
    { id: 78, name: "EQFE 50,000mAh Powerbank", price: 35500, category: "power", image: "assets/images/eqfe_50000mah_powerbank.jpg" },

    // MEN'S FASHION & CLOTHING
    { id: 79, name: "Men's Two-Piece Outfit", price: 15000, category: "fashion", image: "assets/images/mens_two_piece_outfit_new.png" },
    { id: 80, name: "Men's Long Sleeve Polo Shirt", price: 10000, category: "fashion", image: "assets/images/mens_long_sleeve_polo_shirt_new.png" },
    { id: 81, name: "Men's Hoodie", price: 12000, category: "fashion", image: "assets/images/mens_hoodie.png" },
    { id: 82, name: "designers trousers", price: 7000, category: "fashion", image: "assets/images/designers_trousers.png" },
    { id: 83, name: "Men's Shorts (CECNAHS)", price: 5000, category: "fashion", image: "assets/images/mens_shorts_cecnahs_new.png" },
    { id: 84, name: "Men's Shorts (ROMAN CHIC)", price: 5000, category: "fashion", image: "assets/images/roman_chic_shorts.png" },
    { id: 85, name: "3 in 1 laptop bag", price: 10000, category: "fashion", image: "assets/images/laptop_bag_3in1.png" },
    { id: 86, name: "Guys Polo", price: 6000, category: "fashion", image: "assets/images/graphic_tshirt.png" },
    { id: 87, name: "Guys Polo", price: 6000, category: "fashion", image: "assets/images/long_sleeve_graphic_tshirt.jpg" },

    // PERFUMES & FRAGRANCES
    { id: 88, name: "MAN ANGEL ELVES 4 in 1 Perfume", price: 10000, category: "beauty", image: "assets/images/man_angel_elves_4_in_1_perfume.png" },
    { id: 89, name: "Angel Elves 3 in 1 Perfume", price: 9000, category: "beauty", image: "assets/images/angel_elves_3_in_1_perfume.png" },
    { id: 90, name: "COOC Eau De Parfum", price: 3300, category: "beauty", image: "assets/images/cooc_eau_de_parfum.png" },
    { id: 91, name: "COCOSILIYA Rose Garden Perfume", price: 3300, category: "beauty", image: "assets/images/cocosiliya_perfume.png" },
    { id: 92, name: "DIGNIFE 3 in 1 Perfume", price: 9000, category: "beauty", image: "assets/images/dignife_3_in_1_perfume.png" },
    { id: 93, name: "JEAN MISS 3 in 1 Perfume", price: 9000, category: "beauty", image: "assets/images/jean_miss_perfume.png" },

    // WATCHES & GIFT SETS (ADDITIONAL)
    { id: 94, name: "Boxed Wrist Watch Pack", price: 8500, category: "smartwatch", image: "assets/images/boxed_wrist_watch_pack_new.png" },
    { id: 95, name: "A89 Plus Smartwatch Gift Set", price: 18500, category: "smartwatch", image: "assets/images/a89_smartwatch_gift_set.png" },

    // FANS & COOLING DEVICES
    { id: 96, name: "Irwin Rechargeable Fan", price: 8500, category: "home", image: "assets/images/irwin_rechargeable_fan.png" },

    // OTHERS
    { id: 50, name: "Phone Stand", price: 2000, category: "other", image: "assets/images/hand_held_spray_fan.jpg" },
    { id: 51, name: "Laptop Stand", price: 5500, category: "other", image: "assets/images/emergency_solar_rechargeable_light.jpg" },
    { id: 52, name: "Bathroom Absorbing Mat", price: 3500, category: "home", image: "assets/images/bathroom_absorbing_mat_real.png" },
    { id: 53, name: "Tea Cup Set", price: 7500, category: "home", image: "assets/images/tea_cup_set_real.png" },
    { id: 54, name: "RGB 3-in-1 Device", price: 13000, category: "other", image: "assets/images/rgb_3_in_1_device_real.png" },
    { id: 55, name: "Scooters (Ages 3–15)", price: 28500, category: "other", image: "assets/images/scooters_ages_3_15_real.png" }
];
// DOM Elements
const productGrid = document.getElementById('product-grid');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const navLinks = document.querySelectorAll('.nav-links a');
const cartBtn = document.getElementById('cart-tiggle'); // Typo in HTML fixed in logic if I could, but using ID strictly
const cartCount = document.getElementById('cart-count');

// State
let cart = JSON.parse(localStorage.getItem('sharpmart_cart')) || [];

// Intialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products); // products from products.js
    updateCartUI();
    setupEventListeners();
    injectCartModal();
});

// Render Products
function renderProducts(items) {
    productGrid.innerHTML = '';

    if (items.length === 0) {
        productGrid.innerHTML = '<div class="no-results">No products found.</div>';
        return;
    }

    items.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';

        // Placeholder image logic if null
        // Using a neutral SVG placeholder
        const imgSrc = product.image || `data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='14' fill='%23888'%3E${encodeURIComponent(product.name)}%3C/text%3E%3C/svg%3E`;

        const priceDisplay = product.price === 0 ? 'Contact for Price' : `₦${product.price.toLocaleString()}`;
        const addButton = product.price === 0
            ? `<a href="https://wa.me/2347086003041?text=I'm interested in ${encodeURIComponent(product.name)}" target="_blank" class="add-btn">Inquire via WhatsApp</a>`
            : `<button class="add-btn" onclick="addToCart(${product.id})">Add to Cart</button>`;

        card.innerHTML = `
            <div class="product-img">
                <img src="${imgSrc}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">${priceDisplay}</div>
                ${addButton}
            </div>
        `;
        productGrid.appendChild(card);
    });
}

// Filter Logic
function setupEventListeners() {
    // Navigation Categories
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // UI Active State
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            const category = link.getAttribute('data-category');
            if (category === 'all') {
                renderProducts(products);
            } else {
                const filtered = products.filter(p => p.category === category || (category === 'fashion' && ['fashion', 'shoe', 'bag'].includes(p.category)));
                renderProducts(filtered);
            }
        });
    });

    // Search
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSearch();
    });

    // Cart Toggle
    cartBtn.addEventListener('click', toggleCartModal);
}

function handleSearch() {
    const term = searchInput.value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(term));
    renderProducts(filtered);
}

// Cart Logic
window.addToCart = function (id) {
    const product = products.find(p => p.id === id);
    if (product) {
        cart.push(product);
        localStorage.setItem('sharpmart_cart', JSON.stringify(cart));
        updateCartUI();
        showToast(`Added ${product.name} to cart!`);
    }
};

window.removeFromCart = function (index) {
    cart.splice(index, 1);
    localStorage.setItem('sharpmart_cart', JSON.stringify(cart));
    updateCartUI();
    renderCartItems();
}

function updateCartUI() {
    cartCount.textContent = cart.length;
}

// Cart Modal & Checkout
function injectCartModal() {
    const modal = document.createElement('div');
    modal.id = 'cart-modal';
    modal.className = 'cart-modal hidden';
    modal.innerHTML = `
        <div class="cart-content">
            <div class="cart-header">
                <h2>Your Shopping Cart</h2>
                <button onclick="toggleCartModal()" class="close-btn">&times;</button>
            </div>
            <div id="cart-items" class="cart-items-container">
                <!-- Cart items here -->
            </div>
            <div class="cart-footer">
                <div class="cart-total">Total: <span id="cart-total-price">₦0</span></div>
                <button onclick="checkoutWhatsApp()" class="checkout-btn">Order via WhatsApp 💬</button>
            </div>
        </div>
        <div class="modal-overlay" onclick="toggleCartModal()"></div>
    `;
    document.body.appendChild(modal);

    // Add styles for modal dynamically
    const style = document.createElement('style');
    style.textContent = `
        .cart-modal { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 2000; visibility: hidden; opacity: 0; transition: all 0.3s; }
        .cart-modal.active { visibility: visible; opacity: 1; }
        .modal-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 1; }
        .cart-content { position: absolute; right: -100%; top: 0; width: 100%; max-width: 400px; height: 100%; background: white; transition: right 0.3s; display: flex; flex-direction: column; z-index: 10; }
        .cart-modal.active .cart-content { right: 0; }
        .cart-header { padding: 20px; border-bottom: 1px solid #eee; display: flex; justify-content: space-between; align-items: center; }
        .cart-items-container { flex: 1; overflow-y: auto; padding: 20px; }
        .cart-item { display: flex; justify-content: space-between; margin-bottom: 15px; border-bottom: 1px solid #f9f9f9; padding-bottom: 10px; }
        .cart-footer { padding: 20px; border-top: 1px solid #eee; background: #f8f9fa; }
        .checkout-btn { width: 100%; padding: 15px; background: #25D366; color: white; border: none; font-size: 1rem; font-weight: bold; cursor: pointer; border-radius: 8px; transition: background 0.2s; }
        .checkout-btn:hover { background: #1da851; }
        .close-btn { background: none; border: none; font-size: 1.5rem; cursor: pointer; padding: 5px 10px; }
        .close-btn:hover { color: #cc0000; }
        .remove-link { color: red; font-size: 0.8rem; cursor: pointer; text-decoration: underline; display: inline-block; padding: 2px 0; }
        .remove-link:hover { color: #990000; }
        
        .toast { position: fixed; bottom: 80px; left: 50%; transform: translateX(-50%); background: rgba(0,0,0,0.8); color: white; padding: 10px 20px; border-radius: 20px; z-index: 3000; animation: fadeUp 0.3s; }
        @keyframes fadeUp { from { opacity: 0; transform: translate(-50%, 20px); } to { opacity: 1; transform: translate(-50%, 0); } }
    `;
    document.head.appendChild(style);
}

window.toggleCartModal = function () {
    const modal = document.getElementById('cart-modal');
    modal.classList.toggle('active');
    if (modal.classList.contains('active')) {
        renderCartItems();
    }
}

function renderCartItems() {
    const container = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total-price');

    container.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        container.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach((item, index) => {
            total += item.price;
            const div = document.createElement('div');
            div.className = 'cart-item';
            div.innerHTML = `
                <div>
                    <h4>${item.name}</h4>
                    <span class="remove-link" onclick="removeFromCart(${index})">Remove</span>
                </div>
                <div>₦${item.price.toLocaleString()}</div>
            `;
            container.appendChild(div);
        });
    }

    totalEl.textContent = '₦' + total.toLocaleString();
}

window.checkoutWhatsApp = function () {
    if (cart.length === 0) {
        alert('Cart is empty!');
        return;
    }

    let message = "Hello SharpMart, I want to place an order:%0A%0A";
    let total = 0;

    cart.forEach(item => {
        message += `- ${item.name}: ₦${item.price.toLocaleString()}%0A`;
        total += item.price;
    });

    message += `%0A*Total Price: ₦${total.toLocaleString()}*`;
    message += "%0A%0APlease confirm availability. My location is: ";

    const url = `https://wa.me/2347086003041?text=${message}`; // No encoding needed for message var as it's built with %0A, but better to use encodeURIComponent properly on full string if characters were complex. 
    // Re-doing strictly:

    let plainMsg = "Hello SharpMart, I want to place an order:\n\n";
    cart.forEach(item => {
        plainMsg += `- ${item.name}: ₦${item.price.toLocaleString()}\n`;
    });
    plainMsg += `\n*Total Price: ₦${total.toLocaleString()}*`;
    plainMsg += "\n\nPlease confirm availability.";

    window.open(`https://wa.me/2347086003041?text=${encodeURIComponent(plainMsg)}`, '_blank');
}

function showToast(msg) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
}
