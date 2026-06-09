document.addEventListener("DOMContentLoaded", () => {

    const header = document.querySelector("header");

    if (header) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 80) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        });
    }

    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");

                // Deja de observar la card una vez mostrada
                observer.unobserve(entry.target);
            }

        });
    }, {
        threshold: 0.2
    });

    cards.forEach((card) => {
        observer.observe(card);
    });

});

// Seleccionamos los elementos
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.botones');

// Evento para abrir y cerrar el menú al hacer clic en la hamburguesa
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active'); // Transforma la hamburguesa en "X"
    navMenu.classList.toggle('active');   // Desliza el menú hacia adentro
});

// Opcional y recomendado: Cerrar el menú cuando el usuario hace clic en un enlace
document.querySelectorAll('.botones a').forEach(enlace => {
    enlace.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});