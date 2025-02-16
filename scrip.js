document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.product button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Cảm ơn bạn đã mua hàng!');
        });
    });
});