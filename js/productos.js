const cartas = document.querySelectorAll(".carta-producto");

// console.log(cartas);

let contador = 0
// Cargando los productos
cartas.forEach(carta => {
    // const titulo = carta.querySelector(".card-title").textContent;
    // console.log(titulo);

    carta.querySelector(".card-title").textContent = productos[contador].name

    carta.querySelector(".card-price").textContent = "$" + productos[contador].price.toLocaleString("es-CL")

    carta.querySelector(".card-img-top").src = productos[contador].image;
    contador += 1;
});

// console.log(productos[0])

// TODO: Falta agregar que cuando doy click en el boton, se me agregué +1 en el Cart superior
document.addEventListener("DOMContentLoaded", () => {
    // Seleccionamos todos los botones "Añadir"
    const botones = document.querySelectorAll(".carta-producto .btn");

    botones.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            const carta = btn.closest(".carta-producto");
            const titulo = carta.querySelector(".card-title").textContent;
            const precio = carta.querySelector(".card-price").textContent.replace("$", "").replace(".", "");
            const img = carta.querySelector("img").src;

            const producto = {
                id: index + 1,
                nombre: titulo,
                precio: parseInt(precio),
                img: img,
                cantidad: 1
            };

            console.log(producto);

            let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

            const productoExistente = carrito.find(p => p.id === producto.id);
            if (productoExistente) {
                productoExistente.cantidad += 1;
            } else {
                carrito.push(producto);
            }

            localStorage.setItem("carrito", JSON.stringify(carrito));

            console.log(`${producto.nombre} agregado al carrito}`);
            // alert(`${producto.nombre} agregado al carrito`);
        });
    });
});
