document.addEventListener("DOMContentLoaded", () => {
    const phrases = [
        "O.O You've found me!",
        "weeeeeeeeeeeeeeeeeee",
        "I like 3D models too!",
        "Fun fact: I make 3D models!",
        "MIKU MIKU BEEEEEEEEEEEAM",
        "Summoning Hatsune Miku... please wait!",
        "But I'm just a lil grublin...",
        "Welcome to my grublin lair",
        "Summoning the loading gods...",
        "Oh to be an old ghibli lady...",
        "Flying with Totoro... please wait!",
        "Sailing with Ponyo... just a moment!"
    ];

    const loadingText = document.querySelector(".loading-text");
    const loadingOverlay = document.getElementById("loading-overlay");
    const typingSpeed = 40; // Speed of typing each character
    const fadeOutDelay = 500; // Delay before fade-out starts (in milliseconds)

    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];

    let charIndex = 0;

    function type() {
        if (charIndex < randomPhrase.length) {
            loadingText.textContent += randomPhrase.charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            // Once typing is complete, wait for a short delay and then fade out
            setTimeout(() => {
                loadingOverlay.classList.add("fade-out");
            }, fadeOutDelay);
        }
    }

    type();
});
