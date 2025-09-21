document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactoForm");
    const nombre = document.getElementById("nombreContacto");
    const email = document.getElementById("emailContacto");
    const contenido = document.getElementById("contenido");

    const validarCampo = (input, ok) => {
        input.classList.toggle("is-valid", ok);
        input.classList.toggle("is-invalid", !ok);
    };

    // Validación al enviar
    form.addEventListener("submit", (e) => {
        console.log(contenido)
        e.preventDefault(); // evita enviar si hay errores
        const nombreValido = nombre.value.trim().length > 0 && nombre.value.length <= 100;
        const regex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|duoc\.cl|profesor\.duoc\.cl)$/;
        const emailValido = regex.test(email.value) && email.value.length <= 100;
        const contenidoValido = contenido.value.trim().length > 0 && contenido.value.length <= 500
        
        validarCampo(nombre, nombreValido);
        validarCampo(email, emailValido);
        validarCampo(contenido, contenidoValido);

        if (nombreValido && emailValido && contenidoValido) {
            alert("Mensaje enviado correctamente");
            // TODO: acá falta agregar el mensaje a una lista, localStorage o BD
            form.reset();
            document.querySelectorAll(".form-control").forEach(i => i.classList.remove("is-valid", "is-invalid"));
        } else {
            alert("Errores en los campos");
        }
    });
});