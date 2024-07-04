// java.js

document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Product 1', price: 20.00, image: 'gambar/jual1.jpeg' },
        { id: 2, name: 'Product 2', price: 25.00, image: 'gambar/jual2.jpeg' },
        { id: 3, name: 'Product 3', price: 30.00, image: 'gambar/jual3.jpeg' },
        { id: 4, name: 'Product 4', price: 35.00, image: 'gambar/jual4.jpeg' },
        { id: 5, name: 'Product 5', price: 20.00, image: 'gambar/jual5.jpeg' },
        { id: 6, name: 'Product 6', price: 20.00, image: 'gambar/jual6.jpeg' },
        { id: 7, name: 'Product 7', price: 20.00, image: 'gambar/jual7.jpeg' },
        { id: 8, name: 'Product 8', price: 20.00, image: 'gambar/jual8.jpeg' },
        { id: 9, name: 'Product 9', price: 20.00, image: 'gambar/jual9.jpeg' },
        { id: 10, name: 'Product 10', price: 20.00, image: 'gambar/jual10.jpeg' },
        { id: 11, name: 'Product 11', price: 20.00, image: 'gambar/jual11.jpeg' },
        { id: 12, name: 'Product 12', price: 20.00, image: 'gambar/jual12.jpeg' },
        { id: 13, name: 'Product 13', price: 20.00, image: 'gambar/jual13.jpeg' },
        { id: 14, name: 'Product 14', price: 20.00, image: 'gambar/jual14.jpeg' },
        { id: 15, name: 'Product 15', price: 20.00, image: 'gambar/jual15.jpeg' },
        { id: 16, name: 'Product 16', price: 20.00, image: 'gambar/jual16.jpeg' },
        { id: 17, name: 'Product 17', price: 20.00, image: 'gambar/jual17.jpeg' },
        { id: 18, name: 'Product 18', price: 20.00, image: 'gambar/jual18.jpeg' },
        { id: 19, name: 'Product 19', price: 20.00, image: 'gambar/jual19.jpeg' },
        { id: 20, name: 'Product 20', price: 20.00, image: 'gambar/jual20.jpeg' }
    ];

    let cartItems = [];

    const cartItemsContainer = document.querySelector('.cart-items');

    function renderCartItems() {
        cartItemsContainer.innerHTML = '';
        cartItems.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');

            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>$${item.price.toFixed(2)}</p>
                </div>
                <div class="cart-item-controls">
                    <button class="decrease" data-id="${item.id}">-</button>
                    <span class="cart-item-quantity">${item.quantity}</span>
                    <button class="increase" data-id="${item.id}">+</button>
                    <button class="remove" data-id="${item.id}">Remove</button>
                </div>
            `;

            cartItemsContainer.appendChild(cartItem);
        });
    }

    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        const cartItem = cartItems.find(item => item.id === productId);
        if (cartItem) {
            cartItem.quantity++;
        } else {
            cartItems.push({ ...product, quantity: 1 });
        }
        renderCartItems();
    }

    function updateCartItemQuantity(id, action) {
        const item = cartItems.find(item => item.id === parseInt(id));
        if (item) {
            if (action === 'increase') {
                item.quantity++;
            } else if (action === 'decrease' && item.quantity > 1) {
                item.quantity--;
            }
            renderCartItems();
        }
    }

    function removeCartItem(id) {
        cartItems = cartItems.filter(item => item.id !== parseInt(id));
        renderCartItems();
    }

    document.body.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart')) {
            const productId = parseInt(e.target.getAttribute('data-product-id'));
            addToCart(productId);
        } else if (e.target.classList.contains('increase')) {
            const id = e.target.getAttribute('data-id');
            updateCartItemQuantity(id, 'increase');
        } else if (e.target.classList.contains('decrease')) {
            const id = e.target.getAttribute('data-id');
            updateCartItemQuantity(id, 'decrease');
        } else if (e.target.classList.contains('remove')) {
            const id = e.target.getAttribute('data-id');
            removeCartItem(id);
        }
    });

    renderCartItems();
});
