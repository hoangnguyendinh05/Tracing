document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.product button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Cảm ơn bạn đã mua hàng!');
        });
    });
});
let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    renderCart();
}

function renderCart() {
    const cartList = document.getElementById('cart-list');
    const totalPrice = document.getElementById('total-price');
    cartList.innerHTML = '';

    cart.forEach((item, index) => {
        cartList.innerHTML += `<li>${item.name} - ${item.price.toLocaleString()}đ 
        <button onclick="removeItem(${index})">Xóa</button></li>`;
    });

    totalPrice.textContent = total.toLocaleString();
}

function removeItem(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    renderCart();
}