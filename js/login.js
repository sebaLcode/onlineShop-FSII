
document.addEventListener("DOMContentLoaded", () => {
    const email = document.getElementById("loginEmail");
    const password = document.getElementById("loginPassword");
    const btnLogin = document.getElementById("btnLogin");

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

    // Validaciones para el Email
    email.addEventListener("input", () => {

        const regex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|duoc\.cl|profesor\.duoc\.cl)$/;
        console.log(email.value.lenght)
        const esValido = regex.test(email.value) && email.value.length <= 100

        validarCampo(email, esValido);
    });


    // Validaciones para la contraseña y confirmar contraseña
    password.addEventListener("input", () => {
        const esValida = password.value.length >= 4 && password.value.length <= 10
        validarCampo(password, esValida);
    });

    //Validación al enviar el formulario
    btnLogin.addEventListener("click", () =>{
        // TODO: Falta agregar la validación si existe el usuario
        // TODO: Falta que diferencie entre quien se loguea ADMIN, CLIENTE, VENDEDOR
    });
});
