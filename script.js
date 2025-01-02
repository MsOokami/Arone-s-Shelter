/* Sélectionne le bouton */
    const scrollToTopButton = document.querySelector('.scroll-to-top');

    /* Affiche ou cache le bouton en fonction du défilement */
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            scrollToTopButton.classList.add('show');
        } else {
            scrollToTopButton.classList.remove('show');
        }
    });

    /* Ajoute l'événement de clic pour revenir en haut */
    scrollToTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Défilement fluide
        });
    });