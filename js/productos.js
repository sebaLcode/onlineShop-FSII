const cartas = document.querySelectorAll(".carta-producto");

// console.log(cartas);

let contador = 0
cartas.forEach(carta => {
    const titulo = carta.querySelector(".card-title").textContent;
    console.log(titulo);

    carta.querySelector(".card-title").textContent = productos[contador].name

    carta.querySelector(".card-price").textContent = "$" + productos[contador].price.toLocaleString("es-CL")

    if (contador === 0){    //DESPUÉS QUITAR EL IF (CUANDO AGREGUE MÁS IMAGENES EN productosData)
        carta.querySelector(".card-img-top").src=productos[contador].image;     //mantener esta línea
    }
    contador += 1;
});

console.log(productos[0])