// Simple animación extra para las imágenes de la galería (efecto al aparecer)
document.querySelectorAll('.galeria-img').forEach((img, i) => {
    img.style.opacity = "0";
    setTimeout(() => {
        img.style.opacity = "1";
        img.style.transform = "scale(1.04)";
        setTimeout(() => img.style.transform = "", 400);
    }, 600 + i * 400);
});