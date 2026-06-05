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