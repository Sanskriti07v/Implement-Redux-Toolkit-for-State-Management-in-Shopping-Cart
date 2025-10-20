let cart = [];

function addItem(name, price) {
  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  renderCart();
}

function removeItem(name) {
  cart = cart.filter(item => item.name !== name);
  renderCart();
}

function increaseQuantity(name) {
  const item = cart.find(i => i.name === name);
  if (item) item.quantity++;
  renderCart();
}

function decreaseQuantity(name) {
  const item = cart.find(i => i.name === name);
  if (item && item.quantity > 1) item.quantity--;
  renderCart();
}

function renderCart() {
  const cartDiv = document.getElementById('cart');
  const totalEl = document.getElementById('total');
  cartDiv.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.style.border = '1px solid #555';
    itemDiv.style.margin = '10px';
    itemDiv.style.padding = '10px';
    itemDiv.style.borderRadius = '10px';

    itemDiv.innerHTML = `
      <h3>${item.name}</h3>
      <p>Price: $${item.price}</p>
      <p>Quantity: ${item.quantity}</p>
      <button onclick="increaseQuantity('${item.name}')">+</button>
      <button onclick="decreaseQuantity('${item.name}')">-</button>
      <button onclick="removeItem('${item.name}')" style="color:red;">Remove</button>
    `;
    cartDiv.appendChild(itemDiv);

    total += item.price * item.quantity;
  });

  totalEl.textContent = `Total: $${total}`;
}
