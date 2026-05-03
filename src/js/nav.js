document.addEventListener('DOMContentLoaded', () => {
    const navSwitch = document.querySelector('#nav-switch');
    const header = document.querySelector('#header');

    if (!navSwitch || !header) return;

    const fadeInClass = 'fadeIn';
    const fadeOutClass = 'fadeOut';
    let isAnimating = false;

    navSwitch.addEventListener('click', () => {
        if (isAnimating) return;

        navSwitch.classList.toggle('active');
        const isHidden = getComputedStyle(header).display === 'none';

        if (isHidden) {
            header.style.display = 'block';
            header.classList.remove(fadeOutClass);
            header.classList.add(fadeInClass);
        } else {
            header.classList.remove(fadeInClass);
            header.classList.add(fadeOutClass);
        }

        isAnimating = true;
    });

    header.addEventListener('animationend', (event) => {
        if (event.animationName === 'fadeOut' && header.classList.contains(fadeOutClass)) {
            header.style.display = 'none';
            header.classList.remove(fadeOutClass);
        }
        isAnimating = false;
    });
});
