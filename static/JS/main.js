
// Agregar imagenes a la página
document.addEventListener("DOMContentLoaded", () => {
    const imagenes = document.getElementById("imagenes");
    const overlay = document.getElementById("overlay");
    const overlayImg = document.getElementById("overlay-img");

    for (let i = 1; i <= 98; i++) {
        const img = document.createElement("img");
        img.src = `/static/IMG/${i}.jpg`;
        img.alt = `Imagen ${i}`;

        // Mostar una imagen
        img.addEventListener("click", () => {
            overlayImg.src = img.src;
            overlay.classList.add("show");
        });

        imagenes.appendChild(img);
    }

    // Quitar el mostrar una imagen
    overlay.addEventListener("click", () => {
        overlay.classList.remove("show");
    });
});