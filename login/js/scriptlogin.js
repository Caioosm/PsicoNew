document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".login form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = loginForm.email.value;
        const password = loginForm.senha.value;

        // Simulação de autenticação (substitua esta lógica por uma chamada ao servidor)
        if (email === "admin@admin.com" && password === "admin") {
            location.href = '/home/PagHome.html'
        
        } else {
            Swal.fire("Erro", "Login ou senha inválidos!", "error");
        }
    });
});