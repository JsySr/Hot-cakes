document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const showRegisterForm = document.getElementById("showRegisterForm");
    const showLoginForm = document.getElementById("showLoginForm");
    const loginContainer = document.querySelector(".login-container");
    const registerContainer = document.querySelector(".register-container");

    showRegisterForm.addEventListener("click", function(e) {
        e.preventDefault();
        loginContainer.style.display = "none";
        registerContainer.style.display = "block";
    });

    showLoginForm.addEventListener("click", function(e) {
        e.preventDefault();
        registerContainer.style.display = "none";
        loginContainer.style.display = "block";
    });

    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();
        // Aquí puedes agregar la validación del formulario si es necesario
        // Redirigir a la nueva página HTML
        window.location.href = "productos.html"; // Asegúrate de que esta ruta sea correcta
    });

    registerForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const newPassword = document.getElementById("newPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (newPassword !== confirmPassword) {
            document.getElementById("registerErrorMessage").innerText = "Las contraseñas no coinciden.";
        } else {
            // Aquí puedes agregar el código para registrar el usuario
            document.getElementById("registerErrorMessage").innerText = "";
            alert("Registro exitoso");
            registerContainer.style.display = "none";
            loginContainer.style.display = "block";
        }
    });
});
