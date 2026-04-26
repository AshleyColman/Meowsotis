document.addEventListener('DOMContentLoaded', () => {
    const translateTextButtons = document.getElementsByClassName('translate-text-button');
    const englishText = document.getElementById('english-text');
    const japaneseText = document.getElementById('japanese-text');

    if (!translateTextButtons || !englishText || !japaneseText) {
        return;
    }

    let isJapanese = false;

    Array.from(translateTextButtons).forEach((el) => {
        el.addEventListener('click', () => {
            isJapanese = !isJapanese;
            japaneseText.style.display = isJapanese ? 'flex' : 'none';
            englishText.style.display = isJapanese ? 'none' : 'flex';
        });
    });

});
