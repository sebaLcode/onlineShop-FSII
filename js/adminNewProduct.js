document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("productoForm");

    const codProducto = document.getElementById("codProducto");
    const nombreProducto = document.getElementById("nombreProducto");
    const descripcionProducto = document.getElementById("descripcionProducto");
    const descripcionCortaProducto = document.getElementById("descripcionCortaProducto");
    const precioProducto = document.getElementById("precioProducto");
    const stockProducto = document.getElementById("stockActualProducto");
    const stockCriticoProducto = document.getElementById("stockMinimoProducto");
    const categoria = document.getElementById("categoria");
    const imagenProducto = document.getElementById("imagenProducto"); // opcional

    // función genérica
    function validarCampo(input, condicion) {
        if (condicion) {
            input.classList.add("is-valid");
            input.classList.remove("is-invalid");
        } else {
            input.classList.add("is-invalid");
            input.classList.remove("is-valid");
        }
    }

    codProducto.addEventListener("input", () => {
        const esValido = codProducto.value.trim().length >= 3;
        validarCampo(codProducto, esValido);
    });

    nombreProducto.addEventListener("input", () => {
        const esValido = nombreProducto.value.trim().length > 0 && nombreProducto.value.length <= 100;
        validarCampo(nombreProducto, esValido);
    });

    descripcionProducto.addEventListener("input", () => {
        const esValido = descripcionProducto.value.length <= 500;
        validarCampo(descripcionProducto, esValido);
    });

    descripcionCortaProducto.addEventListener("input", () => {
        const esValido = descripcionCortaProducto.value.length <= 200;
        validarCampo(descripcionCortaProducto, esValido);
    });

    precioProducto.addEventListener("input", () => {
        const value = parseFloat(precioProducto.value);
        const esValido = !isNaN(value) && value >= 0;
        validarCampo(precioProducto, esValido);
    });

    stockProducto.addEventListener("input", () => {
        const value = parseInt(stockProducto.value);
        const esValido = !isNaN(value) && value >= 0;
        validarCampo(stockProducto, esValido);
    });

    stockCriticoProducto.addEventListener("input", () => {
        if (stockCriticoProducto.value.trim() === "") {
            stockCriticoProducto.classList.remove("is-valid", "is-invalid");
            return;
        }
        const value = parseInt(stockCriticoProducto.value);
        const esValido = !isNaN(value) && value >= 0;
        validarCampo(stockCriticoProducto, esValido);
    });

    // Validación al enviar
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const codValido = codProducto.value.trim().length >= 3;
        const nombreValido = nombreProducto.value.trim().length > 0 && nombreProducto.value.length <= 100;
        const descValida = descripcionProducto.value.length <= 500;
        const precioValido = !isNaN(parseFloat(precioProducto.value)) && parseFloat(precioProducto.value) >= 0;
        const stockValido = !isNaN(parseInt(stockProducto.value)) && parseInt(stockProducto.value) >= 0;
        const stockCriticoValido = stockCriticoProducto.value.trim() === "" || (!isNaN(parseInt(stockCriticoProducto.value)) && parseInt(stockCriticoProducto.value) >= 0);
        const categoriaValida = categoria.value !== "";

        if (codValido && nombreValido && descValida && precioValido && stockValido && stockCriticoValido && categoriaValida) {
            const nuevoProducto = {
                id: String(productos.length + 1),
                cod_prod: codProducto.value.trim(),
                name: nombreProducto.value.trim(),
                desc: descripcionProducto.value.trim(),
                short_desc: descripcionCortaProducto.value.trim(),
                price: parseFloat(precioProducto.value),
                stock_actual: parseInt(stockProducto.value),
                stock_min: stockCriticoProducto.value.trim() === "" ? 0 : parseInt(stockCriticoProducto.value),
                image: imagenProducto.value.trim(),
                other_images: []
            };

            productos.push(nuevoProducto);

            localStorage.setItem("productos", JSON.stringify(productos));

            console.log("Producto agregado:", nuevoProducto);
            console.log("Lista actualizada:", productos);

            alert("Producto añadido correctamente");

            form.reset();
            document.querySelectorAll(".form-control").forEach(i => i.classList.remove("is-valid", "is-invalid"));
        } else {
            alert("Error en el formulario");
        }
    });
});
