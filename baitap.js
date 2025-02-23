document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn chặn load lại trang

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    // Giả lập tài khoản hợp lệ
    const validUser = "admin";
    const validPass = "123456";

    if (username === validUser && password === validPass) {
        message.style.color = "green";
        message.textContent = "Đăng nhập thành công!";
        setTimeout(() => {
            window.location.href = "dashboard.html"; // Chuyển hướng sau khi đăng nhập
        }, 1000);
    } else {
        message.textContent = "Sai tên đăng nhập hoặc mật khẩu!";
    }
});