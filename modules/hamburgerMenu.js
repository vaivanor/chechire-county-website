export const hamburgerOpenClose = () => {
    const navMeniu = document.querySelector('nav');
    const navMeniuLinks = document.querySelectorAll('nav a');
    const hamburgerMeniu = document.querySelector('.hamburger');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const main = document.querySelector('main');

    hamburgerMeniu.addEventListener('click', () => {
        navMeniu.classList.toggle('show');

        if (navMeniu.classList.contains('show')) {
            hamburgerIcon.src = './assets/menu-close.svg';
            hamburgerMeniu.setAttribute('aria-expanded', true);
            main.style.filter = 'blur(5px)';
        } else {
            hamburgerIcon.src = './assets/menu.svg';
            hamburgerMeniu.setAttribute('aria-expanded', false);
            main.style.filter = '';
        }
        
    });

    navMeniuLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMeniu.classList.remove('show');
            main.style.filter = '';
            hamburgerIcon.src = './assets/menu.svg';
            hamburgerMeniu.setAttribute('aria-expanded', false);
        });
    })
}