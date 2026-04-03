document.addEventListener('DOMContentLoaded', () => {
    const navSwitch = document.querySelector('#nav-switch');
    const header = document.querySelector('#header');

    if (!navSwitch || !header) return;

    const fadeInClass = 'fadeIn';
    const fadeOutClass = 'fadeOut';

    navSwitch.addEventListener('click', () => {
        const isHidden = getComputedStyle(header).display === 'none';

        if (isHidden) {
            // Make it render first, then fade in.
            header.style.display = 'block';
            header.classList.remove(fadeOutClass);
            header.classList.add(fadeInClass);
        } else {
            // Fade out, then hide after animation ends.
            header.classList.remove(fadeInClass);
            header.classList.add(fadeOutClass);
        }
    });

    header.addEventListener('animationend', (event) => {
        if (event.animationName === 'fadeOut' && header.classList.contains(fadeOutClass)) {
            header.style.display = 'none';
            header.classList.remove(fadeOutClass);
        }
    });
});
