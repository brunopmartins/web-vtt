// This calculates modifier based on the ability score
function calculateScoreModifier(score) {
    return Math.floor((score - 10)/2);
}

function updateScoreModifier(att, score) {
    document.querySelectorAll(`.${att}-mod`).forEach(function (input) {
        input.value = calculateScoreModifier(score);
    });
}

function calculateSpellSaveDC(score) {

}

function getProficiencyModifier(level) {
    if (level < 5)  return 2;
    if (level < 9)  return 3;
    if (level < 13) return 4;
    if (level < 17) return 5;
    return 6;
}

function updateProficienteModifier(level) {
    document.querySelector('#proficiency-bonus-input').value = getProficiencyModifier(level);
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
const class_and_level = document.querySelector('#class-and-level-input');
class_and_level.value = 'Cleric 7';
let level = class_and_level.value.match(/(\d+)/)[0];
class_and_level.addEventListener('change', event => {
    updateProficienteModifier(event.target.value.match(/(\d+)/)[0]);
});

document.querySelector('#proficiency-bonus-input').value = `${getProficiencyModifier(level)}`;
document.querySelector('#background-input').value = 'Acolyte';
document.querySelector('#race-input').value = 'Half-Elf';
document.querySelector('#alignment-input').value = 'Lawful Neutral';
document.querySelector('#xp-input').value = '0';

document.querySelector('#armor-class-input').value = 16;
document.querySelector('#speed-input').value = 30;
document.querySelector('#max-hp-input').value = 44;
document.querySelector('#current-hp-input').value = 44;

// inject bio info
document.querySelector('#bio-picture img').src = '../images/sheet_bio_img.png';
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
const scores = [
    {'att': 'str', 'value': 8},
    {'att': 'dex', 'value': 12},
    {'att': 'con', 'value': 15},
    {'att': 'int', 'value': 14},
    {'att': 'wis', 'value': 18},
    {'att': 'cha', 'value': 12}
];

for (score of scores) {
    const score_input = document.querySelector(`#${score.att}-score-input`);
    score_input.value = score.value;
    score_input.score_att = score.att;
    let att = score.att.valueOf();
    score_input.addEventListener('change', (event) => {
        updateScoreModifier(att, event.target.value);
    });
    updateScoreModifier(score.att, score.value);
}

// inject spells info
document.querySelector('#spellcasting-class-input').value = 'Cleric';
document.querySelector('#spellcasting-ability-input').value = 'wis';

let cantrip_tbody = document.querySelector('#cantrips table tbody');
for (let j = 1; j <= 5; j++) {
    let new_row = cantrip_tbody.insertRow(-1);
    let new_spell = document.createTextNode(`The ${j}o cantrip`);
    new_row.appendChild(new_spell);
}

for (let i = 1; i <= 9; i++) {
    let tbody = document.querySelector(`#spells-lvl-${i} table tbody`);
    for (let j = 1; j <= 5; j++) {
        let new_row = tbody.insertRow(-1);
        let new_spell = document.createTextNode(`The ${j}o level ${i} Spell`);
        new_row.appendChild(new_spell);
    }
}