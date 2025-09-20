document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registroForm");


    const nombre = document.getElementById("nombreRegistro");
    const email = document.getElementById("emailRegistro");
    const password = document.getElementById("passwordRegistro");
    const passwordConfirm = document.getElementById("passwordConfirmRegistro");

    // Se marca si es valida o no
    function validarCampo(input, condicion) {
        if (condicion) {
            input.classList.add("is-valid");
            input.classList.remove("is-invalid");
        } else {
            input.classList.add("is-invalid");
            input.classList.remove("is-valid");
        }
    }

    // Validaciones en tiempo real
    nombre.addEventListener("input", () => {
        esValido = nombre.value.trim().length > 0 && nombre.value.length<=150;
        validarCampo(nombre, esValido);
    });

    // Validaciones para el Email
    email.addEventListener("input", () => {
        
        const regex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|duoc\.cl|profesor\.duoc\.cl)$/;
        console.log(email.value.lenght)
        const esValido = regex.test(email.value) && email.value.length <= 100

        validarCampo(email, esValido);
    });
    

    // Validaciones para la contraseña y confirmar contraseña
    password.addEventListener("input", () => {
        const esValida = password.value.length >= 4 && password.value.length <=10
        validarCampo(password, esValida);
        validarCampo(passwordConfirm, password.value === passwordConfirm.value && passwordConfirm.value.length > 0);
    });

    // Validación para confirmar contraseña
    passwordConfirm.addEventListener("input", () => {
        validarCampo(passwordConfirm, password.value === passwordConfirm.value && passwordConfirm.value.length > 0);
    });

});
