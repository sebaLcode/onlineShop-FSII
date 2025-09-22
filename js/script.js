const cartas = document.querySelectorAll(".carta-producto");

// console.log(cartas);

let contador = 0
// Cargando los productos
cartas.forEach(carta => {
    // const titulo = carta.querySelector(".card-title").textContent;
    // console.log(titulo);

    carta.querySelector(".card-title").textContent = productos[contador].name

    carta.querySelector(".card-price").textContent = "$" + productos[contador].price.toLocaleString("es-CL")

    carta.querySelector(".card-text").textContent = productos[contador].short_desc

    carta.querySelector(".card-img-top").src = productos[contador].image;
    contador += 1;
});
