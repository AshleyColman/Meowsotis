document.addEventListener('DOMContentLoaded', () => {
   
    const navSwitch = document.querySelector('#nav-switch');
    const header = document.querySelector('#header');
    
    console.log(navSwitch);
    
    if (!navSwitch || !header)
        return;
    
    const fadeInClass = 'fadeIn';
    const fadeOutClass = 'fadeOut';
    
    console.log('clicked');
    
    navSwitch.addEventListener('click', () => {
        
        if (!header.classList.contains(fadeInClass) && !header.classList.contains(fadeOutClass)) {
            header.classList.add(fadeInClass);
            return;
        }
        
        if (header.classList.contains(fadeInClass)) {
            header.classList.remove(fadeInClass);
            header.classList.add(fadeOutClass);
        }
        else if (header.classList.contains(fadeOutClass)) {
            header.classList.remove(fadeOutClass);
            header.classList.add(fadeInClass);
        }
    });
});