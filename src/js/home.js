document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;

    function getImageSet() {
        const modelsContainer = document.getElementById('models-container');
        return modelsContainer.querySelectorAll('.models-image');
    }

    function animateNext() {
        const modelImages = getImageSet();

        if (!modelImages.length)
            return;

        // Hide all images first
        modelImages.forEach(image => image.style.display = 'none');

        // Show the current image
        const current = modelImages[currentIndex];
        current.style.display = 'block';

        // Increment the index and reset if it exceeds the number of images
        currentIndex = (currentIndex + 1) % modelImages.length;

        // Call animateNext again after 1000ms
        setTimeout(animateNext, 5000);
    }

    animateNext();
});
