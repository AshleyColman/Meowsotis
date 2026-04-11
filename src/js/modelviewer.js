document.addEventListener('DOMContentLoaded', () => {

    const modelViewer = document.getElementById('modelviewer');
    const sketchfabIframe = document.getElementById('sketchfab-embed-iframe');
    const grid = document.getElementById('portfolio-grid');
    const gridItems = grid.getElementsByClassName('grid-item');
    const closeButton = document.getElementById('modelviewer-close-button');
    
    if (modelViewer == null || sketchfabIframe == null || gridItems == null || gridItems.length <= 0 || closeButton == null) {
        return;
    }

    addGridItemClickEvents()

    function addGridItemClickEvents() {
        Array.from(gridItems).forEach((el) => {
            el.addEventListener('click', () => {
                const sketchfabId = el.getAttribute('data-sketchfabid');

                if (sketchfabId == null) return;

                fadeInModelViewer(sketchfabId);
            });
        });
    }

    const fadeInClass = 'fadeIn';
    const fadeOutClass = 'fadeOut';
    
    function fadeInModelViewer(sketchfabId) {
        modelViewer.style.display = 'flex';
        modelViewer.classList.remove(fadeOutClass);
        modelViewer.classList.add(fadeInClass);

        const sketchFabModelUrl = `https://sketchfab.com/models/${sketchfabId}/embed?ui_theme=dark&dnt=1&transparent=1&autospin=1&autostart=1`;

        sketchfabIframe.setAttribute('src', sketchFabModelUrl);
    }

    closeButton.addEventListener('click', () => {
        sketchfabIframe.removeAttribute('src');
        modelViewer.classList.remove(fadeInClass);
        modelViewer.classList.add(fadeOutClass);
    });

    modelViewer.addEventListener('animationend', (event) => {
        if (event.animationName === 'fadeOut' && modelViewer.classList.contains(fadeOutClass)) {
            modelViewer.style.display = 'none';
            modelViewer.classList.remove(fadeOutClass);
        }
    });
});