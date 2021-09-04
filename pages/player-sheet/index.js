import Head from 'next/head';
import React, { useReducer } from 'react';
import { merge } from 'lodash';
import { Input } from 'antd';
// import styles from '../../styles/playerSheet.css';

function getScoreModifier(score) {
  return Math.floor((score - 10)/2);
}

function getProficiencyModifier(level) {
  return Math.ceil((level/4) + 1);
}

let bioInfo = {
  img: './beeholder-logo.png',
  bio: 'O BeeHolder é uma criatura lendária.',
  notes: 'Ele tem a capacidade de segurar abelhas, ou cervejas, a depender do humor dele.'
}

let characterInfo = {
  name: 'Praestes Solis',
  class: 'Cleric',
  level: 7,
  background: 'Acolyte',
  race: 'Half-Elf',
  alignment: 'Lawful Neutral',
  xp: 0,
  traits: {
    personality: "I believe that anything worth doing is worth doing right. I can't help it- I'm a perfectionist.",
    ideals: "Generosity. My talents were given to me so that I could use them to benefit the world.",
    bonds: "I created a great work for someone, and then found them unworthy to receive it. I'm still looking for someone worthy.",
    flaws: "I'm never satisfied with what I have- I always want more."
  },
  attributes: {
    scores: {
      str: 8,
      dex: 12,
      con: 15,
      int: 14,
      wis: 18,
      cha: 12
    },
    AC: 16,
    speed: 30,
    max_hp: 44,
    current_hp: 44,
    temporary_hp: 0
  },
  attacks_and_spellcasting: [
    {
      name: 'Mace',
      attack_bonus: 'str',
      damage: '1d6',
      type: 'bludgeoning'
    },
    {
      name: 'Shortsword',
      attack_bonus: 'dex',
      damage: '1d6',
      type: 'slashing'
    },
    {
      name: 'Fireball',
      attack_bonus: '0',
      damage: '8d6',
      type: 'fire'
    }
  ]
}

function SheetHeader({character, onChange}) {
  return (
    <header className={'SheetHeader'}>
      <section id={'character-name'}>
        <label htmlFor='character-name-input'>Character Name</label>
        <Input type="text" id="character-name-input" value={character.name} onChange={(e) => onChange({name: e.target.value})}/>
      </section>
      <section id={'character-main-info'}>
        <ul>
          <li class='double-column'>
            <label htmlFor='class-and-level-input'>Class & Level</label>
            <Input type='text' id='class-and-level-input' value={character.class + ' ' + character.level}/>
          </li>
          <li>
            <label htmlFor='background-input'>Background</label>
            <Input type='text' id='background-input' value={character.background} onChange={(e) => onChange({background: e.target.value})}/>
          </li>
          <li>
            <label htmlFor='race-input'>Race</label>
            <Input type='text' id='race-input' value={character.race} onChange={(e) => onChange({race: e.target.value})}/>
          </li>
          <li>
            <label htmlFor='alignment-input'>Alignment</label>
            <Input type='text' id='alignment-input' value={character.alignment} onChange={(e) => onChange({alignment: e.target.value})}/>
          </li>
          <li>
            <label htmlFor='xp-input'>Experience Points</label>
            <Input type='text' id='xp-input' value={character.xp} onChange={(e) => onChange({xp: e.target.value})}/>
          </li>
        </ul>
      </section>
    </header>    
  );
}

function SheetMenu() {
  return (
    <nav id="menu">
      <ul>
          <li><a href="#bio-main"><h3>Bio & Notes</h3></a></li>
          <li><a href="#sheet-main"><h3>Sheet</h3></a></li>
          <li><a href="#spells-main"><h3>Spells</h3></a></li>
      </ul>
    </nav>
  );
}

function Bio({bio, onChange}) {
  return (
    <main id="bio-main" class="screen">
      <section id="bio">
        <section id="bio-picture">
            <img src={bio.img} alt="Foto do personagem"/>
        </section>
        <section id="bio-text">
            <textarea value={bio.bio} onChange={(e) => onChange({bio: e.target.value})}/>
        </section>
      </section>
      <section id="notes">
        <h3>Notes</h3>
        <textarea value={bio.notes} onChange={(e) => onChange({notes: e.target.value})}/>
      </section>                
    </main>
  )
}

function Sheet({character, onChange}) {
  return (
    <main id="sheet-main" class="screen active">
      <section class="outer-section">
        <section id="attributes">
          <section id="att-scores">
            <ul>
              <li>
                <div class="score">
                  <label htmlFor="str-score-input">Strength</label>
                  <Input type="number" id="str-score-input" value={character.attributes.scores.str} onChange={(e) => onChange({attributes: {scores: {str: e.target.value}}})}/>
                </div>
                <div class="modifier">
                  <input type="text" id="str-mod-input" value={getScoreModifier(character.attributes.scores.str)} class="str-mod" readonly/>
                </div>
              </li>
              <li>
                <div class="score">
                  <label htmlFor="dex-score-input">Dexterity</label>
                  <Input type="number" id="dex-score-input" value={character.attributes.scores.dex} onChange={(e) => onChange({attributes: {scores: {dex: e.target.value}}})}/>
                </div>
                <div class="modifier">
                  <input type="text" id="dex-mod-input" value={getScoreModifier(character.attributes.scores.dex)} class="dex-mod" readonly/>
                </div>
              </li>
              <li>
                <div class="score">
                  <label htmlFor="con-score-input">Constitution</label>
                  <Input type="number" id="con-score-input" value={character.attributes.scores.con} onChange={(e) => onChange({attributes: {scores: {con: e.target.value}}})}/>
                </div>
                <div class="modifier">
                  <input type="text" id="con-mod-input" value={getScoreModifier(character.attributes.scores.con)} class="con-mod" readonly/>
                </div>
              </li>
              <li>
                <div class="score">
                  <label htmlFor="int-score-input">Intelligence</label>
                  <Input type="number" id="int-score-input" value={character.attributes.scores.int} onChange={(e) => onChange({attributes: {scores: {int: e.target.value}}})}/>
                </div>
                <div class="modifier">
                  <input type="text" id="int-mod-input" value={getScoreModifier(character.attributes.scores.int)} class="int-mod" readonly/>
                </div>
              </li>
              <li>
                <div class="score">
                  <label htmlFor="wis-score-input">Wisdom</label>
                  <Input type="number" id="wis-score-input" value={character.attributes.scores.wis} onChange={(e) => onChange({attributes: {scores: {wis: e.target.value}}})}/>
                </div>
                <div class="modifier">
                  <input type="text" id="wis-mod-input" value={getScoreModifier(character.attributes.scores.wis)} class="wis-mod" readonly/>
                </div>
              </li>
              <li>
                <div class="score">
                  <label htmlFor="cha-score-input">Charisma</label>
                  <Input type="number" id="cha-score-input" value={character.attributes.scores.cha} onChange={(e) => onChange({attributes: {scores: {cha: e.target.value}}})}/>
                </div>
                <div class="modifier">
                  <input type="text" id="cha-mod-input" value={getScoreModifier(character.attributes.scores.cha)} class="cha-mod" readonly/>
                </div>
              </li>
            </ul>
          </section>
          <section id="att-misc">
            <div id="inspiration" class="box">
              <div class="att-label">
                <label htmlFor="inspiration-input">Inspiration</label>
              </div>
              <Input type="checkbox" id="inspiration-input"/>
            </div>
            <div id="proficiency-bonus" class="box">
              <div class="att-label">
                <label htmlFor="proficiency-bonus-input">Proficiency Bonus</label>
              </div>
              <input type="text" id="proficiency-bonus-input" value={getProficiencyModifier(character.level)} readonly/>
            </div>
            <div id="saves" class="box list-section">
              <ul>
                <li>
                  <label htmlFor="str-save-input">Strength</label>
                  <Input type="text" id="str-save-input" class="str-mod" value={getScoreModifier(character.attributes.scores.str)}/>
                  <Input type="checkbox" id="str-save-prof"/>
                </li>
                <li>
                  <label htmlFor="dex-save-input">Dexterity</label>
                  <Input type="text" id="dex-save-input" class="dex-mod" value={getScoreModifier(character.attributes.scores.dex)}/>
                  <Input type="checkbox" id="dex-save-prof"/>
                </li>
                <li>
                  <label htmlFor="con-save-input">Constitution</label>
                  <Input type="text" id="con-save-input" class="con-mod" value={getScoreModifier(character.attributes.scores.con)}/>
                  <Input type="checkbox" id="con-save-prof"/>
                </li>
                <li>
                  <label htmlFor="int-save-input">Intelligence</label>
                  <Input type="text" id="int-save-input" class="int-mod" value={getScoreModifier(character.attributes.scores.int)}/>
                  <Input type="checkbox" id="int-save-prof"/>
                </li>
                <li>
                  <label htmlFor="wis-save-input">Wisdom</label>
                  <Input type="text" id="wis-save-input" class="wis-mod" value={getScoreModifier(character.attributes.scores.wis)}/>
                  <Input type="checkbox" id="wis-save-prof"/>
                </li>
                <li>
                  <label htmlFor="cha-save-input">Charisma</label>
                  <Input type="text" id="cha-save-input" class="cha-mod" value={getScoreModifier(character.attributes.scores.cha)}/>
                  <Input type="checkbox" id="cha-save-prof"/>
                </li>
              </ul>
              <div class="label">Saving Throws</div>
            </div>
            <div id="skills" class="box list-section">
              <ul>
                <li>
                  <label htmlFor="acrobatics">Acrobatis <span class="skill-span">(Dex)</span></label>
                  <Input type="text" id="acrobatics" class="dex-mod" value={getScoreModifier(character.attributes.scores.dex)} readonly/>
                  <Input type="checkbox" id="acrobatics-prof"/>
                </li>
                <li>
                  <label htmlFor="animal-handling">Animal Handling <span class="skill-span">(Wis)</span></label>
                  <Input type="text" id="animal-handling" class="wis-mod" value={getScoreModifier(character.attributes.scores.wis)} readonly/>
                  <Input type="checkbox" id="animal-handling-prof"/>
                </li>
                <li>
                  <label htmlFor="arcana">Arcana <span class="skill-span">(Int)</span></label>
                  <Input type="text" id="arcana" class="int-mod" value={getScoreModifier(character.attributes.scores.int)} readonly/>
                  <Input type="checkbox" id="arcana-prof"/>
                </li>
                <li>
                  <label htmlFor="athletics">Athletics <span class="skill-span">(Str)</span></label>
                  <Input type="text" id="athletics" class="str-mod" value={getScoreModifier(character.attributes.scores.str)} readonly/>
                  <Input type="checkbox" id="athletics-prof"/>
                </li>
                <li>
                  <label htmlFor="deception">Deception <span class="skill-span">(Cha)</span></label>
                  <Input type="text" id="deception" class="cha-mod" value={getScoreModifier(character.attributes.scores.cha)} readonly/>
                  <Input type="checkbox" id="deception-prof"/>
                </li>
                <li>
                  <label htmlFor="history">History <span class="skill-span">(Int)</span></label>
                  <Input type="text" id="history" class="int-mod" value={getScoreModifier(character.attributes.scores.int)} readonly/>
                  <Input type="checkbox" id="history-prof"/>
                </li>
                <li>
                  <label htmlFor="insight">Insight <span class="skill-span">(Wis)</span></label>
                  <Input type="text" id="insight" class="wis-mod" value={getScoreModifier(character.attributes.scores.wis)} readonly/>
                  <Input type="checkbox" id="insight-prof"/>
                </li>
                <li>
                  <label htmlFor="intimidation">Intimidation <span class="skill-span">(Cha)</span></label>
                  <Input type="text" id="intimidation" class="cha-mod" value={getScoreModifier(character.attributes.scores.cha)} readonly/>
                  <Input type="checkbox" id="intimidation-prof"/>
                </li>
                <li>
                  <label htmlFor="medicine">Medicine <span class="skill-span">(Wis)</span></label>
                  <Input type="text" id="medicine" class="wis-mod" value={getScoreModifier(character.attributes.scores.wis)} readonly/>
                  <Input type="checkbox" id="medicine-prof"/>
                </li>
                <li>
                  <label htmlFor="nature">Nature <span class="skill-span">(Int)</span></label>
                  <Input type="text" id="nature" class="int-mod" value={getScoreModifier(character.attributes.scores.int)} readonly/>
                  <Input type="checkbox" id="nature-prof"/>
                </li>
                <li>
                  <label htmlFor="perception">Perception <span class="skill-span">(Wis)</span></label>
                  <Input type="text" id="perception" class="wis-mod" value={getScoreModifier(character.attributes.scores.wis)} readonly/>
                  <Input type="checkbox" id="perception-prof"/>
                </li>
                <li>
                  <label htmlFor="performance">Performance <span class="skill-span">(Cha)</span></label>
                  <Input type="text" id="performance" class="cha-mod" value={getScoreModifier(character.attributes.scores.cha)} readonly/>
                  <Input type="checkbox" id="performance-prof"/>
                </li>
                <li>
                  <label htmlFor="persuasion">Persuasion <span class="skill-span">(Cha)</span></label>
                  <Input type="text" id="persuasion" class="cha-mod" value={getScoreModifier(character.attributes.scores.cha)} readonly/>
                  <Input type="checkbox" id="persuasion-prof"/>
                </li>
                <li>
                  <label htmlFor="religion">Religion <span class="skill-span">(Int)</span></label>
                  <Input type="text" id="religion" class="int-mod" value={getScoreModifier(character.attributes.scores.int)} readonly/>
                  <Input type="checkbox" id="religion-prof"/>
                </li>
                <li>
                  <label htmlFor="sleight-of-hand">Sleight of Hand <span class="skill-span">(Dex)</span></label>
                  <Input type="text" id="sleight-of-hand" class="dex-mod" value={getScoreModifier(character.attributes.scores.dex)} readonly/>
                  <Input type="checkbox" id="sleight-of-hand-prof"/>
                </li>
                <li>
                  <label htmlFor="stealth">Stealth <span class="skill-span">(Dex)</span></label>
                  <Input type="text" id="stealth" class="dex-mod" value={getScoreModifier(character.attributes.scores.dex)} readonly/>
                  <Input type="checkbox" id="stealth-prof"/>
                </li>
                <li>
                  <label htmlFor="survival">Survival <span class="skill-span">(Wis)</span></label>
                  <Input type="text" id="survival" class="wis-mod" value={getScoreModifier(character.attributes.scores.wis)} readonly/>
                  <Input type="checkbox" id="survival-prof"/>
                </li>
              </ul>
              <div class="label">Skills</div>
            </div>
          </section>
        </section>
        <section id="passive-perception" class="box">
          <div class="att-label">
            <label htmlFor="passive-perception">Passive Wisdom (Perception)</label>
          </div>
          <Input type="number" id="passive-perception-input" class="wis-mod" value={10 + getScoreModifier(character.attributes.scores.wis)} readonly/>
        </section>
        <section id="other-profs" class="box text-box">
          <label htmlFor="other-profs-input">Other Proficiences and Languages</label>
          <textarea id="other-profs-input"></textarea>
        </section>
      </section>
      <section class="outer-section">
        <section id="physical-attr">
          <div class="armor-class ac-init-speed">
            <div>
              <label htmlFor="armor-class-input">Armor Class</label>
              <Input type="number" id="armor-class-input" value={character.attributes.AC}/>
            </div>
          </div>
          <div class="initiative ac-init-speed">
            <div>
              <label htmlFor="initiative-input">Initiative</label>
              <Input type="number" id="initiative-input" class="dex-mod" value={getScoreModifier(character.attributes.scores.dex)}/>
            </div>
          </div>
          <div class="speed ac-init-speed">
            <div>
              <label htmlFor="speed-input">Speed</label>
              <Input type="number" id="speed-input" value={character.attributes.speed}/>
            </div>
          </div>
          <div class="hp">
            <div class="regular-hp">
              <div class="max-hp">
                <label htmlFor="max-hp-input">Hit Point Maximum</label>
                <Input type="number" id="max-hp-input" value={character.attributes.max_hp}/>
              </div>
              <div class="current-hp">
                <label htmlFor="current-hp-input">Current Hit Points</label>
                <Input type="number" id="current-hp-input" value={character.attributes.current_hp}/>
              </div>
            </div>
            <div class="temporary-hp">
              <label htmlFor="temporary-hp-input">Temporary Hit Points</label>
              <Input type="number" id="temporary-hp-input" value={character.attributes.temporary_hp}/>
            </div>
          </div>
          <div class="hitdice">
            <div class="hd-ds">
              <div class="total">
                <label htmlFor="total-hd">Total</label>
                <Input type="text" id="total-hd" placeholder="3d8"/>
              </div>
              <div class="remaining">
                <label htmlFor="remaining-hd">Hit Dice</label>
                <Input type="text" id="remaining-hd" placeholder="3"/>
              </div>
            </div>
          </div>
          <div class="death-save">
            <div class="hd-ds">
              <div class="label">
                <label>Death Saves</label>
              </div>
              <div class="marks">
                <div class="ds ds-successes">
                  <label>Successes</label>
                  <div class="ds-check">
                    <Input type="checkbox" name="ds-success1"/>
                    <Input type="checkbox" name="ds-success2"/>
                    <Input type="checkbox" name="ds-success3"/>
                  </div>
                </div>
                <div class="ds ds-failures">
                  <label>Failures</label>
                  <div class="ds-check">
                    <Input type="checkbox" name="ds-success1"/>
                    <Input type="checkbox" name="ds-success2"/>
                    <Input type="checkbox" name="ds-success3"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="attacks-and-spellcasting">
          <div>
            <label>Attacks & Spellcasting</label>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Attack Bonus</th>
                  <th>Damage/Type</th>
                </tr>
              </thead>
              <tbody>
                {character.attacks_and_spellcasting.map((item) => (
                  <tr>
                    <td><Input type="text" value={item.name}/></td>
                    <td><Input type="text" value={getScoreModifier(character.attributes.scores[item.attack_bonus]) || ''}/></td>
                    <td><Input type="text" value={item.damage + ' ' + item.type}/></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <textarea></textarea>
          </div>
        </section>
        <section class="equipment">
          <div>
            <label>Equipment</label>
            <div class="money">
              <ul>
                <li>
                  <label htmlFor="cp">cp</label>
                  <Input type="number" id="cp"/>
                </li>
                <li>
                  <label htmlFor="sp">sp</label>
                  <Input type="number" id="sp"/>
                </li>
                <li>
                  <label htmlFor="ep">ep</label>
                  <Input type="number" id="ep"/>
                </li>
                <li>
                  <label htmlFor="gp">gp</label>
                  <Input type="number" id="gp"/>
                </li>
                <li>
                  <label htmlFor="pp">pp</label>
                  <Input type="number" id="pp"/>
                </li>
              </ul>
            </div>
            <textarea placeholder="Equipment list here"></textarea>
          </div>
        </section>
      </section>
      <section class="outer-section">
        <section id="traits">
          <div id="personality">
            <label htmlFor="personality">Personality</label>
            <textarea name="personality" value={character.traits.personality} onChange={(e) => onChange({traits: {personality: e.target.value}})}></textarea>
          </div>
          <div id="ideals">
            <label htmlFor="ideals">Ideals</label>
            <textarea name="ideals" value={character.traits.ideals} onChange={(e) => onChange({traits: {ideals: e.target.value}})}></textarea>
          </div>
          <div id="bonds">
            <label htmlFor="bonds">Bonds</label>
            <textarea name="bonds" value={character.traits.bonds} onChange={(e) => onChange({traits: {bonds: e.target.value}})}></textarea>
          </div>
          <div id="flaws">
            <label htmlFor="flaws">Flaws</label>
            <textarea name="flaws" value={character.traits.flaws} onChange={(e) => onChange({traits: {flaws: e.target.value}})}></textarea>
          </div>
        </section>
        <section id="features">
          <div>
            <label htmlFor="features">Features & Traits</label>
            <textarea name="features"></textarea>
          </div>
        </section>
      </section>
    </main>
  )
}

function Spells() {
  return (
    <main id="spells-main" class="screen">
      <section id="spells-header">
        <ul>
          <li>
            <label htmlFor="spellcasting-class-input">Spellcasting Class</label>
            <Input type="text" id="spellcasting-class-input" placeholder="Druida"/>
          </li>
            <li>
                <label htmlFor="spellcasting-ability-input">Spellcasting Ability</label>
              <select name="spellcasting-ability-input" id="spellcasting-ability-input">
                  <option value="str">Strenght</option>
                  <option value="dex">Dexterity</option>
                  <option value="con">Constitution</option>
                  <option value="int">Intelligence</option>
                  <option value="wis">Wisdom</option>
                  <option value="cha">Charisma</option>
              </select>
            </li>
            <li>
              <label htmlFor="spell-atk-bonus-input">Spell Attack Bonus</label>
              <Input type="text" id="spell-atk-bonus-input" placeholder="+5"/>
            </li>
            <li>
              <label htmlFor="spell-save-dc-input">Spell Save DC</label>
              <Input type="text" id="spell-save-dc-input" placeholder="15"/>
            </li>
        </ul>
      </section>
      <section id="spells-section">
        <section id="cantrips">
            <table>
                <thead>
                    <tr>
                        <th>Cantrips</th>
                    </tr>
                </thead>
                <tbody/>
            </table>
        </section>
        <section id="spells-features">
            <label htmlFor="spells-features-input">Spellcasting Features</label>
            <textarea id="spells-features-input"></textarea>
        </section>
        <section id="spells-material-components">
            <label htmlFor="spells-material-components-input">Component Pouch Inventory</label>
            <textarea id="spells-material-components-input"></textarea>
        </section>
        <section id="spells-lvl-1">
          <table>
            <thead>
              <tr>
                <th>Level 1</th>
              </tr>
            </thead>
            <tbody/>
          </table>
        </section>
        <section id="spells-lvl-2">
          <table>
            <thead>
              <tr>
                <th>Level 2</th>
              </tr>
            </thead>
            <tbody/>
          </table>
        </section>
        <section id="spells-lvl-3">
          <table>
            <thead>
              <tr>
                <th>Level 3</th>
              </tr>
            </thead>
            <tbody/>
          </table>
        </section>
        <section id="spells-lvl-4">
          <table>
            <thead>
              <tr>
                <th>Level 4</th>
              </tr>
            </thead>
            <tbody/>
          </table>
        </section>
        <section id="spells-lvl-5">
          <table>
            <thead>
              <tr>
                <th>Level 5</th>
              </tr>
            </thead>
            <tbody/>
          </table>
        </section>
        <section id="spells-lvl-6">
          <table>
            <thead>
              <tr>
                <th>Level 6</th>
              </tr>
            </thead>
            <tbody/>
          </table>
        </section>
        <section id="spells-lvl-7">
          <table>
            <thead>
              <tr>
                <th>Level 7</th>
              </tr>
            </thead>
            <tbody/>
          </table>
        </section>
        <section id="spells-lvl-8">
          <table>
            <thead>
              <tr>
                <th>Level 8</th>
              </tr>
            </thead>
            <tbody/>
          </table>
        </section>
        <section id="spells-lvl-9">
          <table>
            <thead>
              <tr>
                <th>Level 9</th>
              </tr>
            </thead>
            <tbody/>
          </table>
        </section>
      </section>
  </main>
  )
}

export default function PlayerSheet() {

  const [bio, setBio] = useReducer((currentHeader, changes) => {
    return merge({}, currentHeader, changes)
  }, bioInfo);

  const [character, setCharacter] = useReducer((currentCharacter, changes) => {
    return merge({}, currentCharacter, changes)
  }, characterInfo);

  return (
    <>
    <Head>
      <title>Ficha do Personagem</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <SheetHeader character={character} onChange={setCharacter}/>
    <SheetMenu/>
    <Bio bio={bio} onChange={setBio}/>
    <Sheet character={character} onChange={setCharacter}/>
    <Spells/>
    </>
  );
}
