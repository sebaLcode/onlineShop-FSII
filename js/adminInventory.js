document.addEventListener("DOMContentLoaded", () => {
    const tbody = document.querySelector("table tbody");
    const pagination = document.querySelector(".pagination");

    let productosGuardados = JSON.parse(localStorage.getItem("productos")) || productos;

    const productosPorPagina = 10;
    let paginaActual = 1;
    const totalPaginas = Math.ceil(productosGuardados.length / productosPorPagina);

    function renderTabla(pagina) {
        tbody.innerHTML = "";

        const inicio = (pagina - 1) * productosPorPagina;
        const fin = inicio + productosPorPagina;
        const productosPagina = productosGuardados.slice(inicio, fin);

        productosPagina.forEach(prod => {
            const fila = document.createElement("tr");

            fila.innerHTML = `
                <td>${prod.id}</td>
                <td>${prod.cod_prod}</td>
                <td>${prod.name}</td>
                <td>$${prod.price.toLocaleString("es-CL")}</td>
                <td>
                    <span class="d-inline-block text-truncate" style="max-width: 200px;" title="${prod.desc}">
                        ${prod.desc}
                    </span>
                </td>
                <td>${prod.short_desc}</td>
                <td>${prod.stock_actual}</td>
                <td>${prod.stock_min}</td>
                <td><img src="${prod.image}" alt="${prod.name}" width="50"></td>
            `;
            tbody.appendChild(fila);
        });
    }

    function renderPaginacion() {
        pagination.innerHTML = "";

        const prev = document.createElement("li");
        prev.classList.add("page-item");
        if (paginaActual === 1) prev.classList.add("disabled");
        prev.innerHTML = `<a class="page-link" href="#">Previous</a>`;
        prev.addEventListener("click", () => {
            if (paginaActual > 1) {
                paginaActual--;
                renderTabla(paginaActual);
                renderPaginacion();
            }
        });

        pagination.appendChild(prev);

        for (let i = 1; i <= totalPaginas; i++) {
            const li = document.createElement("li");
            li.classList.add("page-item");
            if (i === paginaActual) li.classList.add("active");
            li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
            li.addEventListener("click", () => {
                paginaActual = i;
                renderTabla(paginaActual);
                renderPaginacion();
            });
            pagination.appendChild(li);
        }

        const next = document.createElement("li");
        next.classList.add("page-item");
        if (paginaActual === totalPaginas) next.classList.add("disabled");
        next.innerHTML = `<a class="page-link" href="#">Next</a>`;
        next.addEventListener("click", () => {
            if (paginaActual < totalPaginas) {
                paginaActual++;
                renderTabla(paginaActual);
                renderPaginacion();
            }
        });
        pagination.appendChild(next);
    }

    renderTabla(paginaActual);
    renderPaginacion();
});
