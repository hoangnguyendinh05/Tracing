document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn chặn form gửi đi

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let message = document.getElementById("message");

    // Kiểm tra mật khẩu khớp nhau
    if (password !== confirmPassword) {
        message.textContent = "Mật khẩu không khớp!";
        message.style.color = "red";
        return;
    }

    // Kiểm tra độ dài mật khẩu
    if (password.length < 6) {
        message.textContent = "Mật khẩu phải có ít nhất 6 ký tự!";
        message.style.color = "red";
        return;
    }

    // Kiểm tra email hợp lệ
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        message.textContent = "Email không hợp lệ!";
        message.style.color = "red";
        return;
    }

    // Nếu hợp lệ
    message.textContent = "Đăng ký thành công!";
    message.style.color = "green";

    // Xóa dữ liệu trong form
    document.getElementById("registerForm").reset();
});