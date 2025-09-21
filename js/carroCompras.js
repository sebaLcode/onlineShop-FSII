// const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
// console.log(carrito);

document.addEventListener("DOMContentLoaded", () => {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    
    const carritoItems = document.getElementById("carritoItems");
    const carritoTotal = document.getElementById("total");

    // Cargamos los productos
    function renderCarrito() {
        carritoItems.innerHTML = ""; 
        let total = 0;

        carrito.forEach(producto => {
            total += producto.precio * producto.cantidad;

            const item = document.createElement("div");
            item.classList.add("d-flex", "align-items-center", "mb-3", "border-bottom", "pb-2");

            item.innerHTML = `
                <img src="${producto.img}" alt="${producto.nombre}" width="80" height="80" class="me-3" style="object-fit:cover;">
                <div class="flex-grow-1">
                    <h5 class="m-0">${producto.nombre}</h5>
                    <small class="text-muted">$${producto.precio.toLocaleString("es-CL")}</small>
                </div>
                <div class="text-center me-3">
                    <div class="fw-bold mb-2">$${(producto.precio * producto.cantidad).toLocaleString("es-CL")}</div>
                    <div class="d-flex align-items-center justify-content-center">
                        <button class="btn btn-sm btn-outline-secondary me-2 restar">-</button>
                        <span class="fw-bold">${producto.cantidad}</span>
                        <button class="btn btn-sm btn-outline-secondary ms-2 sumar">+</button>
                    </div>
                </div>
                `;

            const btnSumar = item.querySelector(".sumar");
            const btnRestar = item.querySelector(".restar");

            btnSumar.addEventListener("click", () => {
                producto.cantidad++;
                guardarYRender();
            });

            btnRestar.addEventListener("click", () => {
                if (producto.cantidad > 1) {
                    producto.cantidad--;
                } else {
                    
                    const index = carrito.findIndex(p => p.id === producto.id);
                    carrito.splice(index, 1);
                }
                guardarYRender();
            });

            carritoItems.appendChild(item);
        });

        carritoTotal.textContent = `$${total.toLocaleString("es-CL")}`;
    }

    // Guardar en localStorage y volver a renderizar
    function guardarYRender() {
        localStorage.setItem("carrito", JSON.stringify(carrito));
        renderCarrito();
    }

    // Render inicial
    renderCarrito();
});
