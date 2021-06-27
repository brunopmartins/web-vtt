function calculateModifier(score) {
    return Math.floor((score - 10)/2);
}


function chooseScreen (screenId) {
    const screens = document.querySelectorAll('.screen');
    for (const screen of screens) {
        screen.classList.remove('active');
    }
    const currentScreen = document.querySelector(screenId);
    currentScreen.classList.add('active');
}

const screenSelectors = document.querySelectorAll('#menu a');
for (const screenSelector of screenSelectors) {
    screenSelector.addEventListener('click', function () {
        const href = this.href.substr(this.href.lastIndexOf('#'));
        chooseScreen(href);
    });
}

if (location.hash) {
    const availableHrefs = Array.from(screenSelectors).map(el => el.href);
    if (availableHrefs.indexOf(location.hash)) chooseScreen(location.hash);
}