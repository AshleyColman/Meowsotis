document.addEventListener('DOMContentLoaded', () => {
    const isMobile = window.innerWidth <= 768; 
    const options = {
        autoplay: true,
        smooth: false,
        particles: {
            number: {
                value: isMobile ? 5 : 20
            },
            move: {
                enable: true,
                speed: isMobile ? { min: 1, max: 3 } : { min: 5, max: 10 },
                direction: "bottom",
                straight: true,
                outModes: { default: "out" }
            },
            size: {
                value: { min: 4, max: 8 }
            },
            shape: {
                type: "star"
            },
            color: {
                value: ["#BF9AD8", "#81C9F7", "#FF8AB0"]
            },
            opacity: {
                value: { min: 0.3, max: 0.7 },
                animation: {
                    enable: true,
                    speed: isMobile ? 0.2 : 0.4,
                    minimumValue: 0.2,
                    sync: false
                }
            },
            rotate: {
                value: 0,
                direction: "random",
                animation: {
                    enable: true,
                    speed: isMobile ? { min: 20, max: 40 } : { min: 50, max: 75 },
                    sync: false
                }
            }
        }
    };

    tsParticles.load("tsparticles", options);
});
