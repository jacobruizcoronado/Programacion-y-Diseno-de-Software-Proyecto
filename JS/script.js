const abrir = document.getElementById("abrirPopup");
const popup = document.getElementById("popup");

const cerrar = document.getElementById("cerrarPopup");
const aceptar = document.getElementById("aceptar");

// Abrir ventana
abrir.addEventListener("click", function() {
    popup.style.display = "flex";
});

// Cerrar con la X
cerrar.addEventListener("click", function() {
    popup.style.display = "none";
});

// Cerrar con el botón Aceptar
aceptar.addEventListener("click", function() {
    popup.style.display = "none";
});