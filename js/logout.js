document.addEventListener("DOMContentLoaded", () => {
    const btnLogout = document.getElementById("btnLogout");

    if (btnLogout) {
        btnLogout.addEventListener("click", (e) => {
            e.preventDefault();

            localStorage.removeItem("usuarioLogueado");

            window.location.href = "../../index.html";
        });
    }
});