document.addEventListener("DOMContentLoaded", () => {
    const botonTema = document.getElementById("btn-tema");
    const htmlElement = document.documentElement;

    /* Carga el tema guardado al abrir cualquier paginaa */
    const temaGuardado = localStorage.getItem("tema-cybercity");
    if (temaGuardado === "dark") {
        htmlElement.setAttribute("data-bs-theme", "dark");
        if (botonTema) {
            botonTema.textContent = "☀️ Modo Claro";
            botonTema.classList.replace("btn-dark", "btn-light");
        }
    }

    /* Cambia el tema al hacer clic en el botón */
    if (botonTema) {
        botonTema.addEventListener("click", () => {
            const temaActual = htmlElement.getAttribute("data-bs-theme");

            if (temaActual === "dark") {
                htmlElement.setAttribute("data-bs-theme", "light");
                localStorage.setItem("tema-cybercity", "light");
                botonTema.textContent = "🌙 Modo Oscuro";
                botonTema.classList.replace("btn-light", "btn-dark");
            } else {
                htmlElement.setAttribute("data-bs-theme", "dark");
                localStorage.setItem("tema-cybercity", "dark");
                botonTema.textContent = "☀️ Modo Claro";
                botonTema.classList.replace("btn-dark", "btn-light");
            }
        });
    }
});