// This calculates modifier based on the ability score
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

// inject data in front-end. remove later
// inject header info
document.querySelector('#character-name-input').value = 'Praestes Solis';
document.querySelector('#class-and-level-input').value = 'Cleric 7';
document.querySelector('#background-input').value = 'Acolyte';
document.querySelector('#race-input').value = 'Half-Elf';
document.querySelector('#alignment-input').value = 'Lawful Neutral';
document.querySelector('#xp-input').value = '0';

// inject bio info
document.querySelector('#bio-picture img').src = 'sheet_bio_img.png';
document.querySelector('#bio-text textarea').innerHTML = 
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' + 
    'Vestibulum ultricies sit amet erat eget pulvinar. Vestibulum vel rutrum nibh. ' + 
    'Nunc euismod gravida dolor ac condimentum. Cras ut vestibulum magna. Donec ' + 
    'vitae rhoncus nibh. Mauris a rhoncus massa, nec venenatis enim. Suspendisse ' + 
    'viverra lectus eu blandit placerat. Phasellus diam enim, volutpat nec dui et, ' + 
    'vulputate elementum mauris. Morbi vitae elit a diam porta pharetra. Duis et odio ' + 
    'vulputate, porttitor diam a, finibus velit. Donec leo est, dapibus eu aliquam at, ' + 
    'accumsan ac ante. Donec id justo sit amet nisi pulvinar laoreet. Ut nulla velit, ' + 
    'tempus tristique consectetur ac, fringilla in orci. Praesent tristique nisi quis ' + 
    'quam tincidunt consequat. Sed aliquet felis nec dui sagittis, non hendrerit lectus ornare.';
document.querySelector('#notes textarea').innerHTML = 
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' + 
    'Vestibulum ultricies sit amet erat eget pulvinar. Vestibulum vel rutrum nibh. ' + 
    'Nunc euismod gravida dolor ac condimentum. Cras ut vestibulum magna. Donec ' + 
    'vitae rhoncus nibh. Mauris a rhoncus massa, nec venenatis enim. Suspendisse ' + 
    'viverra lectus eu blandit placerat. Phasellus diam enim, volutpat nec dui et, ' + 
    'vulputate elementum mauris. Morbi vitae elit a diam porta pharetra. Duis et odio ' + 
    'vulputate, porttitor diam a, finibus velit. Donec leo est, dapibus eu aliquam at, ' + 
    'accumsan ac ante. Donec id justo sit amet nisi pulvinar laoreet. Ut nulla velit, ' + 
    'tempus tristique consectetur ac, fringilla in orci. Praesent tristique nisi quis ' + 
    'quam tincidunt consequat. Sed aliquet felis nec dui sagittis, non hendrerit lectus ornare.';

// inject sheet info
let str = document.querySelector('#str-score-input');
str.value = 8;
let dex = document.querySelector('#dex-score-input');
dex.value = 12;
let con = document.querySelector('#con-score-input');
con.value = 15;
let int = document.querySelector('#int-score-input');
int.value = 14;
let wis = document.querySelector('#wis-score-input');
wis.value = 18;
let cha = document.querySelector('#cha-score-input');
cha.value = 12;

const scores = [
    {'att': 'str', 'value': str.value}, 
    {'att': 'dex', 'value': dex.value}, 
    {'att': 'con', 'value': con.value}, 
    {'att': 'int', 'value': int.value}, 
    {'att': 'wis', 'value': wis.value}, 
    {'att': 'cha', 'value': cha.value}
];

for (score of scores) {
    document.querySelectorAll(`.${score.att}-mod`).forEach(function (input) {
        input.value = calculateModifier(score.value);
    });
}
