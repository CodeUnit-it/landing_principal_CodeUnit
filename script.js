document.addEventListener("DOMContentLoaded", () => {
    // --- LÓGICA DEL CARRUSEL INFINITO ---
    const track = document.getElementById("track");

    if (track) {
        const items = Array.from(track.children);
        items.forEach((item) => {
            const clone = item.cloneNode(true);
            track.appendChild(clone);
        });
    }

    // --- LÓGICA DEL MENÚ HAMBURGUESA (MÓVIL) ---
    const menuToggle = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });

        document.querySelectorAll(".nav-links a").forEach((link) => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
            });
        });
    }

    // --- MODAL PARA SOLO LAS IMÁGENES DE CANCHAS ---
    const imgModal = document.getElementById("imgModal");
    const imgModalContent = document.getElementById("imgModalContent");
    const closeModal = document.getElementById("closeModal");

    // Delegación de eventos: funciona también con elementos clonados
    document.addEventListener("click", (e) => {
        const clickedImage = e.target.closest(".zoomable-img");

        if (clickedImage) {
            imgModal.style.display = "flex";
            imgModalContent.src = clickedImage.src;
            imgModalContent.alt = clickedImage.alt || "Imagen ampliada";
            document.body.style.overflow = "hidden";
            return;
        }

        if (e.target === imgModal || e.target === closeModal) {
            imgModal.style.display = "none";
            imgModalContent.src = "";
            document.body.style.overflow = "";
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && imgModal.style.display === "flex") {
            imgModal.style.display = "none";
            imgModalContent.src = "";
            document.body.style.overflow = "";
        }
    });

    console.log("Nodo Sur: Carrusel + Responsive Menu + Modal activos.");
});
