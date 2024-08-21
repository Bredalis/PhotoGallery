
// Agregar imagenes a la pagina
document.addEventListener("DOMContentLoaded", () => {
    const imagenes = document.getElementById("imagenes");
    const overlay = document.getElementById("overlay");
    const overlayImg = document.getElementById("overlayImg");
    const numeroImagenes = 98;

    for (let i = 1; i <= numeroImagenes; i++) {
        const img = document.createElement("img");
        img.src = `/static/IMG/${i}.jpg`;
        img.alt = `Imagen ${i}`;

        img.addEventListener("click", () => {
            overlayImg.src = img.src;
            overlay.classList.add("show");
        });

        imagenes.appendChild(img);
    }

    overlay.addEventListener("click", () => {
        overlay.classList.remove("show");
    });
});