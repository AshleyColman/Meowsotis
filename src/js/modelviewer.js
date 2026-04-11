document.addEventListener('DOMContentLoaded', () => {
    
    const modelViewer = document.getElementById('modelviewer');
    const sketchfabIframe = document.getElementById('sketchfab-embed-iframe');
    const grid = document.getElementById('portfolio-grid');
    const gridItems = grid.getElementsByClassName('grid-item');
    const closeButton = document.getElementById('modelviewer-close-button');
    
    if (modelViewer == null || 
        sketchfabIframe == null ||
        gridItems == null || gridItems.length <= 0
        || closeButton == null)
    {
        console.log("1 is null")
        return;
        
    }
    
    // gridItems.forEach((el) => {
    //     el.addEventListener('click', () => {
    //        
    //     });
    // });











    const fadeInClass = 'fadeIn';
    const fadeOutClass = 'fadeOut';

    closeButton.addEventListener('click', () => {
        const isHidden = getComputedStyle(modelViewer).display === 'none';

        if (isHidden) {
            modelViewer.style.display = 'block';
            modelViewer.classList.remove(fadeOutClass);
            modelViewer.classList.add(fadeInClass);
        } else {
            sketchfabIframe.removeAttribute('src');
            modelViewer.classList.remove(fadeInClass);
            modelViewer.classList.add(fadeOutClass);
        }
    });

    modelViewer.addEventListener('animationend', (event) => {
        if (event.animationName === 'fadeOut' && modelViewer.classList.contains(fadeOutClass)) {
            modelViewer.style.display = 'none';
            modelViewer.classList.remove(fadeOutClass);
        }
    });
});