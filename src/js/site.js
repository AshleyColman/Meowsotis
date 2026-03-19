document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded');
    let currentIndex = 0;
    const mobileBreakpoint = 'mobile';
    const desktopBreakpoint = 'desktop';

    function getBreakpoint() {
        return window.innerWidth <= 768 ? mobileBreakpoint : desktopBreakpoint;
    }

    function getImageSet() {
        const breakpoint = getBreakpoint();

        const modelsContainer = document.getElementById('models-container');

        const imageQuerySelector = breakpoint === mobileBreakpoint
            ? '.models-image,.mobile-only'
            : '.models-image,.desktop-only';

        return modelsContainer.querySelectorAll(imageQuerySelector);
    }

    function fadeIn(el, duration) {
        return new Promise(resolve => {
            el.style.display = 'block';
            el.style.opacity = '0';
            el.style.transition = `opacity ${duration}ms ease`;
            void el.offsetWidth;
            el.style.opacity = '1';
            setTimeout(resolve, duration);
        });
    }

    function fadeOut(el, duration) {
        return new Promise(resolve => {
            el.style.transition = `opacity ${duration}ms ease`;
            el.style.opacity = '0';
            setTimeout(() => {
                el.style.display = 'none';
                resolve();
            }, duration);
        });
    }

    async function animateNext() {
        const modelImages = getImageSet();

        if (!modelImages.length)
            return;

        const current = modelImages[currentIndex];

        await fadeIn(current, 1000);
        await new Promise(resolve => setTimeout(resolve, 3000));
        await fadeOut(current, 1000);

        currentIndex = (currentIndex + 1) % modelImages.length;
        setTimeout(animateNext, 100);
    }

    animateNext();
});