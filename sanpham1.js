document.querySelectorAll('.phone-card').forEach(card => {
    card.addEventListener('click', () => {
        alert(`Bạn đã chọn ${card.querySelector('h2').innerText}`);
    });
});