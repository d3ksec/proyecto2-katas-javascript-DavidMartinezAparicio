let boton = document.getElementById("btnToClick");

boton.addEventListener("click", function(evento) {
  console.log(evento);
});

let inputFoco = document.querySelector(".focus");

inputFoco.addEventListener("focus", function(evento) {
  console.log(evento.target.value);
});

let inputValor = document.querySelector(".value");

inputValor.addEventListener("input", function(evento) {
  console.log(evento.target.value);
});