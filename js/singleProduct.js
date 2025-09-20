const params = new URLSearchParams(window.location.search);
const productId = params.get("id"); //Obtenemos el id del URL

console.log(productId);

const product = productos.find(p => p.id ==productId);

console.log(product);

// const titulo = document.querySelector("#producto-nombre");
// const elemento2 = document.querySelector(".miClase");

console.log(product.name)

document.getElementById("producto-nombre").textContent = product.name;

document.getElementById("producto-precio").textContent = "$"+product.price.toLocaleString("es-CL");

document.getElementById("producto-descripcion").textContent = product.desc
