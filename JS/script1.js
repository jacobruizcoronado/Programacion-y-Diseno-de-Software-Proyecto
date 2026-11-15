document.addEventListener("DOMContentLoaded", () => {
    const btnCapitulos = document.getElementById("btnCapitulos");
    const listaCapitulos = document.getElementById("listaCapitulos");

    if (btnCapitulos && listaCapitulos) {
        btnCapitulos.addEventListener("click", (e) => {
            e.stopPropagation();
            listaCapitulos.classList.toggle("mostrar");
        });

        document.addEventListener("click", (e) => {
            if (!listaCapitulos.contains(e.target)) {
                listaCapitulos.classList.remove("mostrar");
            }
        });
    }
});