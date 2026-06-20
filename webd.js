// Product Catalog (Added image URLs)
const products = [
    { 
        id: 1, 
        name: "Wireless Noise-Cancelling Headphones", 
        price: 2499.00,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80"
    },
    { 
        id: 2, 
        name: "Motorola 5G Smartphone - 128GB", 
        price: 18500.00,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80"
    },
    { 
        id: 3, 
        name: "Dell G15 Gaming Laptop", 
        price: 75000.00,
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&q=80"
    },
    { 
        id: 4, 
        name: "Red Dead Redemption 2 (PC)", 
        price: 3200.00,
        image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=500&q=80"
    },
    { 
        id: 5, 
        name: "Ergonomic Office Chair", 
        price: 5500.00,
        image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=500&q=80"
    },
    { 
        id: 6, 
        name: "C++ Programming - Complete Guide", 
        price: 1999.00,
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&q=80"
    }
];

// Array to hold cart items
let cart = [];

// Initialize the page by loading products
document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
});

// Function to display products in the grid
function renderProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        
        // Added the <img> tag here
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-img">
            <h3>${product.name}</h3>
            <div class="price">₹${product.price.toFixed(2)}</div>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(card);
    });
}

// Function to handle clicking "Add to Cart"
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartUI();
}

// Function to refresh the cart sidebar display
function updateCartUI() {
    const cartItemsContainer = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const cartTotal = document.getElementById("cart-total");

    // Update the number in the header
    cartCount.innerText = cart.length;

    // Handle empty cart state
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-msg">Your cart is empty.</p>';
        cartTotal.innerText = "₹0.00";
        return;
    }

    // Clear and rebuild cart list
    cartItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach((item) => {
        total += item.price;
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
            <span>${item.name}</span>
            <span>₹${item.price.toFixed(2)}</span>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    // Update final total formatted to 2 decimal places
    cartTotal.innerText = "₹" + total.toFixed(2);
}

// Function to handle the checkout button
function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty! Please add some items before checking out.");
        return;
    }

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    
    // Simulate a successful payment
    alert(`Payment successful!\nYou paid ₹${total.toFixed(2)}.\nYour order will be shipped soon.`);
    
    // Empty the cart and refresh UI
    cart = [];
    updateCartUI();
}