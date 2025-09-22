
document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get("id"); //Obtenemos el id del URL

    console.log(productId);

    const product = productos.find(p => p.id == productId);

    console.log(product);

    // const titulo = document.querySelector("#producto-nombre");
    // const elemento2 = document.querySelector(".miClase");

    console.log(product.name)

    document.getElementById("producto-nombre").textContent = product.name;

    document.getElementById("producto-precio").textContent = "$" + product.price.toLocaleString("es-CL");

    document.getElementById("producto-descripcion").textContent = product.desc;

    document.getElementById("producto-imagen").src = product.image;

    document.getElementById("producto-imagen-sm1").src = product.other_images[0];

    document.getElementById("producto-imagen-sm2").src = product.other_images[1];

    document.getElementById("producto-imagen-sm3").src = product.other_images[2];

    // Acá es el botón de añadir al carrito
    const btnAdd = document.querySelector("button.btn-primary");
    const inputCantidad = document.getElementById("cantidad");

    btnAdd.addEventListener("click", () => {
        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

        const cantidadSeleccionada = parseInt(inputCantidad.value) || 1;

        // Buscar si ya existe en el carrito
        const productoExistente = carrito.find(p => p.id === product.id);

        if (productoExistente) {
            productoExistente.cantidad += cantidadSeleccionada;
        } else {
            carrito.push({
                id: product.id,
                nombre: product.name,
                precio: product.price,
                img: product.image,
                cantidad: cantidadSeleccionada
            });
        }

        localStorage.setItem("carrito", JSON.stringify(carrito));
        

        alert(`(${cantidadSeleccionada}) - ${product.name} agregado/s al carrito.`);
    });
});