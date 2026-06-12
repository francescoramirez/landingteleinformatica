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
const fechaObjetivo = new Date("2026-6-17 23:59:59").getTime();

    function actualizarContador() {
        const ahora = new Date().getTime();
        const diferencia = fechaObjetivo - ahora;

        if (diferencia <= 0) {
            document.getElementById("contador").innerHTML = "¡Tiempo terminado!";
            clearInterval(intervalo);
            return;
        }

        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        document.getElementById("contador").innerHTML =
            `${dias}d ${horas}h ${minutos}m ${segundos}s`;
    }

    actualizarContador();
    const intervalo = setInterval(actualizarContador, 1000);


