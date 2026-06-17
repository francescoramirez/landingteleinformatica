document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");

    if (header) {
        window.addEventListener("scroll", () => {
            header.classList.toggle("scrolled", window.scrollY > 80);
        });
    }

    const cards = document.querySelectorAll(".card");
    
    if (cards.length > 0 && "IntersectionObserver" in window) {
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
    }

    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".botones");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        document.querySelectorAll(".botones a").forEach((enlace) => {
            enlace.addEventListener("click", () => {
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
            });
        });
    }

    const contador = document.getElementById("contador");

    if (contador) {
        const fechaObjetivo = new Date("2026-06-17T23:59:59").getTime();

        const actualizarContador = () => {
            const ahora = Date.now();
            const diferencia = fechaObjetivo - ahora;

            if (diferencia <= 0) {
                contador.innerHTML = "¡Tiempo terminado!";
                clearInterval(intervalo);
                return;
            }

            const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
            const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
            const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

            contador.innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
        };

        const intervalo = setInterval(actualizarContador, 1000);
        actualizarContador();
    }
});