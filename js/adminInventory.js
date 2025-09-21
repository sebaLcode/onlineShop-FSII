document.addEventListener("DOMContentLoaded", () => {
    const tbody = document.querySelector("table tbody");

    tbody.innerHTML = "";

    let productosGuardados = JSON.parse(localStorage.getItem("productos")) || productos;
    
    productosGuardados.forEach(prod => {
        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${prod.id}</td>
            <td>${prod.cod_prod}</td>
            <td>${prod.name}</td>
            <td>$${prod.price.toLocaleString("es-CL")}</td>
            <td>${prod.desc}</td>
            <td>${prod.short_desc}</td>
            <td>${prod.stock_actual}</td>
            <td>${prod.stock_min}</td>
            <td><img src="${prod.image}" alt="${prod.name}" width="50"></td>
            <td>${prod.other_images.join(", ")}</td>
        `;

        tbody.appendChild(fila);
    });
});
