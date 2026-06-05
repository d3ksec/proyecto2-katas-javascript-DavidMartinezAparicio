const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
let listaPaises = document.createElement("ul");

for (let i = 0; i < countries.length; i++) {
  let elementoLista = document.createElement("li");
  elementoLista.textContent = countries[i];
  listaPaises.appendChild(elementoLista);
}

document.body.appendChild(listaPaises);

let elementoABorrar = document.querySelector(".fn-remove-me");
elementoABorrar.remove();

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
let divDestino = document.querySelector('[data-function="printHere"]');
let listaCoches = document.createElement("ul");

for (let i = 0; i < cars.length; i++) {
  let cocheLista = document.createElement("li");
  cocheLista.textContent = cars[i];
  listaCoches.appendChild(cocheLista);
}

divDestino.appendChild(listaCoches);

const countriesFotos = [
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for (let i = 0; i < countriesFotos.length; i++) {
  let divTarjeta = document.createElement("div");
  divTarjeta.className = "tarjeta";

  let titulo = document.createElement("h4");
  titulo.textContent = countriesFotos[i].title;

  let imagen = document.createElement("img");
  imagen.src = countriesFotos[i].imgUrl;

  let botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Borrar esta tarjeta";
  
  botonBorrar.addEventListener("click", function() {
    divTarjeta.remove();
  });

  divTarjeta.appendChild(titulo);
  divTarjeta.appendChild(imagen);
  divTarjeta.appendChild(botonBorrar);

  document.body.appendChild(divTarjeta);
}

let botonUltimo = document.createElement("button");
botonUltimo.textContent = "Borrar última tarjeta";

botonUltimo.addEventListener("click", function() {
  let todasLasTarjetas = document.querySelectorAll(".tarjeta");
  let ultimaTarjeta = todasLasTarjetas[todasLasTarjetas.length - 1];
  ultimaTarjeta.remove();
});

document.body.appendChild(botonUltimo);