document.addEventListener('DOMContentLoaded', () => {
    const options = {
        autoplay: true,
        smooth: true,
        particles: {
            number: {
                value: 20
            },
            position: {
                x: { min: 0, max: 100 },
                y: { min: -100, max: -50 }
            },
            move: {
                enable: true,
                speed: { min: 5, max: 10 },
                direction: "bottom",
                random: false,
                straight: true,
                warp: false,
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
                    speed: 0.4,
                    minimumValue: 0.2,
                    sync: false
                }
            },
            stroke: {
                color: "#ffffff",
                width: 5
            },
            rotate: {
                value: 0,
                direction: "random",
                animation: {
                    enable: true,
                    speed: { min: 50, max: 75 },
                    sync: false
                }
            }
        },
        // interactivity: {
        //     events: {
        //         onClick: {
        //             enable: true,
        //             mode: "attract"
        //         },
        //         onHover: {
        //             enable: true,
        //             mode: "bubble"
        //         }
        //     },
        //     modes: {
        //         bubble: {
        //             distance: 100,
        //             duration: 0.4,
        //             size: 10,
        //             opacity: 1
        //         }
        //     }
        // }
    };

    tsParticles.load("tsparticles", options);
});
