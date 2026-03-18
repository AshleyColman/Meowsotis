// $(document).ready(function () {
//     let currentIndex = 0;
//
//     function getBreakpoint() {
//         return window.innerWidth <= 768 ? 'mobile' : 'desktop';
//     }
//
//     function getImageSet() {
//         const breakpoint = getBreakpoint();
//
//         if (breakpoint === 'mobile') {
//             return $('.models-container').children('.models-image.mobile-only');
//         } else
//             return $('.models-container').children('.models-image.desktop-only');
//     }
//
//     function animateNext() {
//         const modelImages = getImageSet();
//
//         if (!modelImages.length) 
//             return;
//
//         modelImages
//             .eq(currentIndex)
//             .stop(true, true)
//             .fadeIn(1000)
//             .delay(3000)
//             .fadeOut(1000, function () {
//                 currentIndex = (currentIndex + 1) % modelImages.length;
//                 animationTimeout = setTimeout(animateNext, 100);
//             });
//     }
//
//     animateNext();
//
//     $(window).on('resize', function () {
//         if (animationTimeout !== null) {
//             clearTimeout(animationTimeout);
//         }
//         currentIndex = 0;
//         animateNext();
//     });
// });
