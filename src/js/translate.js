document.addEventListener('DOMContentLoaded', () => {
    const translateTextButtons = document.getElementsByClassName('translate-text-button');

    const englishTextElements = document.querySelectorAll('.english-text');
    const japaneseTextElements = document.querySelectorAll('.japanese-text');

    if (!translateTextButtons || !englishTextElements || !japaneseTextElements) {
        return;
    }
        
    function hideJapaneseTextOnStartup(){
        japaneseTextElements.forEach((element) => {
            element.style.display = 'none';
        });
    }

    hideJapaneseTextOnStartup();
        
    let isJapanese = false;

    Array.from(translateTextButtons).forEach((button) => {
        button.addEventListener('click', () => {
            isJapanese = !isJapanese;

            japaneseTextElements.forEach((element) => {
                const displayStyle = element.getAttribute('data-display') || 'block';
                element.style.display = isJapanese ? displayStyle : 'none';
            });

            englishTextElements.forEach((element) => {
                const displayStyle = element.getAttribute('data-display') || 'block';
                element.style.display = isJapanese ? 'none' : displayStyle;
            });
        });
    });
});
