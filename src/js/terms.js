document.addEventListener('DOMContentLoaded', () => {
    const translateTextButtons = document.getElementsByClassName('translate-text-button');

    const englishTextElements = document.querySelectorAll('.english-text');
    const japaneseTextElements = document.querySelectorAll('.japanese-text');

    if (!translateTextButtons || !englishTextElements || !japaneseTextElements) {
        return;
    }

    let isJapanese = false;

    Array.from(translateTextButtons).forEach((button) => {
        button.addEventListener('click', () => {
            isJapanese = !isJapanese;

            japaneseTextElements.forEach((element) => {
                element.style.display = isJapanese ? 'block' : 'none';
            });

            englishTextElements.forEach((element) => {
                element.style.display = isJapanese ? 'none' : 'block';
            });
        });
    });
});
