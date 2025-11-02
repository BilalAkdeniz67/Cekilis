document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.signup-btn');
    button.addEventListener('click', function() {
        const email = document.querySelector('input[name="email"]').value.trim();
        const password = document.querySelector('input[name="password"]').value;
        // Basit e-posta kontrolü
        const emailValid = email.length > 0 && email.includes('@');
        const passwordValid = password.length >= 6;
        if (!emailValid) {
            alert("Lütfen geçerli bir e-posta girin.");
            return;
        }
        if (!passwordValid) {
            alert("Şifre en az 6 karakter olmalı.");
            return;
        }
        // Şartlar sağlanıyorsa oturum açma sayfasına yönlendir
        window.location.href = "index.html";
    });
});

document.addEventListener('DOMContentLoaded', function() 
{ 
    const button = document.querySelector('.login-btn');
    button.addEventListener('click', function(){
        window.location.href = "index.html";
    });
});