const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

let cajaDestino = document.getElementById("caja-lista");
let lista = document.createElement("ul");

for (let i = 0; i < albums.length; i++) {
  let elementoLista = document.createElement("li");
  elementoLista.textContent = albums[i];
  lista.appendChild(elementoLista);
}

cajaDestino.appendChild(lista);