let divVacio = document.createElement("div");
document.body.appendChild(divVacio);

let divConParrafo = document.createElement("div");
let parrafo1 = document.createElement("p");
divConParrafo.appendChild(parrafo1);
document.body.appendChild(divConParrafo);

let divParaSeis = document.createElement("div");
for (let i = 0; i < 6; i++) {
  let nuevoParrafo = document.createElement("p");
  divParaSeis.appendChild(nuevoParrafo);
}
document.body.appendChild(divParaSeis);

let parrafoDinamico = document.createElement("p");
parrafoDinamico.textContent = "Soy dinámico!";
document.body.appendChild(parrafoDinamico);

let tituloH2 = document.querySelector(".fn-insert-here");
tituloH2.textContent = "Wubba Lubba dub dub";

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
let lista = document.createElement("ul");
for (let i = 0; i < apps.length; i++) {
  let elementoLista = document.createElement("li");
  elementoLista.textContent = apps[i];
  lista.appendChild(elementoLista);
}
document.body.appendChild(lista);

let elementosParaBorrar = document.querySelectorAll(".fn-remove-me");
for (let i = 0; i < elementosParaBorrar.length; i++) {
  elementosParaBorrar[i].remove();
}

let todosLosDivs = document.querySelectorAll("div");
let parrafoEnMedio = document.createElement("p");
parrafoEnMedio.textContent = "Voy en medio!";
document.body.insertBefore(parrafoEnMedio, todosLosDivs[1]);

let divsParaInsertar = document.querySelectorAll("div.fn-insert-here");
for (let i = 0; i < divsParaInsertar.length; i++) {
  let parrafoDentro = document.createElement("p");
  parrafoDentro.textContent = "Voy dentro!";
  divsParaInsertar[i].appendChild(parrafoDentro);
}