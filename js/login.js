document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const email = document.getElementById("loginEmail");
    const password = document.getElementById("loginPassword");

    function validarCampo(input, condicion) {
        if (condicion) {
            input.classList.add("is-valid");
            input.classList.remove("is-invalid");
        } else {
            input.classList.add("is-invalid");
            input.classList.remove("is-valid");
        }
    }

    email.addEventListener("input", () => {
        const regex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|duoc\.cl|profesor\.duoc\.cl)$/;
        const esValido = regex.test(email.value) && email.value.length <= 100;
        validarCampo(email, esValido);
    });

    password.addEventListener("input", () => {
        const esValida = password.value.length >= 4 && password.value.length <= 10;
        validarCampo(password, esValida);
    });

    // Validamos al enviar el formulario
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const user = usuarios.find(
            (u) => u.email === email.value.trim() && u.password === password.value.trim()
        );

        if (!user) {
            alert("Correo o contraseña incorrectos");
            return;
        }

        localStorage.setItem("usuarioLogueado", JSON.stringify(user));

        // Redireccionamos
        if (user.tipoUsuario === "Administrador") {
            window.location.href = "../../views/admin/adminHome.html";
        } else if (user.tipoUsuario === "Vendedor") {
            window.location.href = "../../views/admin/adminHome.html";
        } else {
            window.location.href = "../index.html";
        }

        // TODO: Falta hacer logout
        // TODO: Falta hacer que en cada .html se tenga que validar si está el usuario respectivo

    });
});
