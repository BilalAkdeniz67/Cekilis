document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.btn');
    button.addEventListener('click', function(e) {
        const username = document.querySelector('input[name="username"]').value;
        const password = document.querySelector('input[name="password"]').value;
        const modal = document.getElementById('success-modal');
        const modalMessage = modal.querySelector('.modal-message');
        if(username === "Bilalakdeniz" && password === "12345") {
            modalMessage.textContent = "Giriş başarılı!";
            modal.classList.add('show');
            setTimeout(() => {
                modal.classList.remove('show');
            }, 2000);
        } else {
            modalMessage.textContent = "Kullanıcı adı veya şifre yanlış!";
            modal.classList.add('show');
            setTimeout(() => {
                modal.classList.remove('show');
            }, 2000);
        }
    });
});
document.addEventListener('DOMContentLoaded', function() 
{ 
    const button = document.querySelector('.signup-btn');
    button.addEventListener('click', function(e) 
    {
        window.location.href = "kayit.html";
    });
});