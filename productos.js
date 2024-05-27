// script.js

let cart = [];

// Función para agregar productos al carrito
function addToCart(id, name, price) {
    const existingProduct = cart.find(item => item.id === id);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }
    updateCart();
}

// Función para actualizar el carrito en la interfaz
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="text-center">El carrito está vacío</p>';
    } else {
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item row';
            cartItem.innerHTML = `
                <div class="col-md-6">${item.name}</div>
                <div class="col-md-2">${item.quantity}</div>
                <div class="col-md-2">$${item.price.toFixed(2)}</div>
                <div class="col-md-2">$${(item.price * item.quantity).toFixed(2)}</div>
            `;
            cartItems.appendChild(cartItem);
        });

        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const totalElement = document.createElement('div');
        totalElement.className = 'text-right';
        totalElement.innerHTML = `<strong>Total: $${total.toFixed(2)}</strong>`;
        cartItems.appendChild(totalElement);
    }
}

// Evento para agregar productos al carrito
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', event => {
        const id = parseInt(event.target.getAttribute('data-id'));
        const name = event.target.getAttribute('data-name');
        const price = parseFloat(event.target.getAttribute('data-price'));
        addToCart(id, name, price);
    });
});

// Evento para el botón de realizar compra
document.getElementById('checkout').addEventListener('click', () => {
    alert('Compra realizada con éxito!');
    cart = [];
    updateCart();
});

// Inicializar el carrito vacío
updateCart();
