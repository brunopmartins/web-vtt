import {Typography} from "antd";
import React from "react";
import { css } from "@emotion/react";

const { Title, Paragraph } = Typography;

function getScoreModifier(score) {
    let mod = Math.floor((score - 10)/2);
    if (mod >= 0) {
        mod = `+${mod}`
    }
    return mod
}

const cardStyle = css`
p {
    padding: 0 0 0.5em;
    margin: 0;
}

h1, .card-main p {
    padding: 0;
    margin: 0;
}

h3 {
    margin: 0;
    padding: 0 0 1em;
}

h2 {
    margin-top: 0;
}

.card {
    width: 600px;
}

header, section {
    border-bottom: 2px solid;
    padding-bottom: 0.5em;
    padding-top: 0.5em;
}

#stats-bar {
    justify-content: space-between;
    display: flex;
    flex-direction: row;
    padding: 0.5em;
    text-align: center;
}

#stats-bar div {
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    padding: 0;
}

.no-section-h3 {
    padding: 1em 0 1em 0;
}

table {
    border-spacing: 0;
    width: 100%;
    text-align: center;
    margin-bottom: 1em;

}

th {
    background-color: var(--cor-dos-frames);
    border-bottom: 3px solid var(--cor-das-bordas);
    border-collapse: collapse;
}

td {
    border-bottom: 1px solid var(--cor-das-bordas);
}

ul {
    padding-left: 2em;
}

li {
    padding-bottom: 0.5em;
}
.first-of-section {
    margin-top: 0 !important;
    padding-top: 0 !important;
}

/* Specific to Class Card */

#card-classe {
     width: 1200px;
}

#card-classe h3 {
    margin: 0;
    padding-top: 0.5em;
    padding-bottom: 0;
}

#card-handout #handout-picture img {
    display: block;
    max-height: 400px;
    margin: 10px auto 10px auto;
}
`


function DefaultItem({ item }) {
    return (
        <>
            <Title>{item.name}</Title>
            <Paragraph>{item.desc}</Paragraph>
        </>
    );
}

function SpellItem({ item }) {
    let level_suffix = "th"
    if (item.level === 1) {
        level_suffix = "st";
    } else if (item.level === 2){
        level_suffix = "nd";
    } else if (item.level === 3){
        level_suffix = "rd";
    }
    return (
        <>
            <header>
                <Title>{item.name}</Title>
                <Paragraph id="level-type"><em>{item.level}{level_suffix}-level {item.school.name}</em></Paragraph>
            </header>
            <section id="time-range-components-duration" className="card-main">
                <p><strong>Casting Time</strong> {item.casting_time} {item.ritual && "(Can be cast as Ritual)"}</p>
                <p><strong>Range</strong> {item.range}</p>
                <p><strong>Components</strong> {item.components.join(" ")}</p>
                <p><strong>Duration</strong> {item.duration} {item.concentration && "(Concentration)"}</p>
            </section>
            <section id="description">
                <Paragraph css={{whiteSpace: "pre-wrap"}}>{item.desc.join("\n")}</Paragraph>
            </section>
            <section id="who-casts">
                <p><strong>Classes: </strong> {item.classes.map(classe => classe.name).join(", ")}</p>
                {!!item.subclasses?.length && <p><strong>Subclasses: </strong> {item.subclasses.map(subclasse => subclasse.name).join(", ")}</p>}
            </section>
        </>
    );
}

function MonsterItem({ item }) {
    console.log(item);
    return (
        <>
            <header>
                <Title>{item.name}</Title>
                <Paragraph><em>{item.size} {item.type}, {item.alignment}</em></Paragraph>
            </header>
            <section id="ac-hp-speed" className="card-main">
                <p><strong>Armor Class</strong> {item.armor_class}</p>
                <p><strong>Hit Points</strong> {item.hit_points} ({item.hit_dice})</p>
                <p><strong>Speed</strong> {Object.entries(item.speed).map(([type, value]) => `${type} ${value}`).join(", ")}</p>
            </section>
            <section id="stats-bar">
                <div id="str">
                    <span><strong>STR</strong></span>
                    <span id="str-value">{item.strength} ({getScoreModifier(item.strength)})</span>
                </div>
                <div id="dex">
                    <span><strong>DEX</strong></span>
                    <span id="dex-value">{item.dexterity} ({getScoreModifier(item.dexterity)})</span>
                </div>
                <div id="con">
                    <span><strong>CON</strong></span>
                    <span id="con-value">{item.constitution} ({getScoreModifier(item.constitution)})</span>
                </div>
                <div id="int">
                    <span><strong>INT</strong></span>
                    <span id="int-value">{item.intelligence} ({getScoreModifier(item.intelligence)})</span>
                </div>
                <div id="wis">
                    <span><strong>WIS</strong></span>
                    <span id="wis-value">{item.wisdom} ({getScoreModifier(item.wisdom)})</span>
                </div>
                <div id="cha">
                    <span><strong>CHA</strong></span>
                    <span id="cha-value">{item.charisma} ({getScoreModifier(item.charisma)})</span>
                </div>
            </section>
            {/*Continuar daqui pra frente (ta tudo chumbado)*/}
            <section id="traits">
                <p><strong>Saving Throws</strong> Dex +7, Con +16, Wis +9, Cha +13</p>
                <p><strong>Skills</strong> Perception +16, Stealth +7</p>
                <p><strong>Damage Immunities</strong> fire</p>
                <p><strong>Senses</strong> blindsight 60 ft., darkvision 120 ft., passive Perception 26</p>
                <p><strong>Languages</strong> Common, Draconic</p>
                <p><strong>Challenge</strong> 24 (62,000 XP)</p>
                <p><strong>Legendary Resistance (3/Day).</strong> If the dragon fails a saving throw, it can choose to
                    succeed instead.</p>
            </section>
            <section id="actions">
                <h3>Actions</h3>
                <p><strong>Multiattack.</strong> The dragon can use its Frightful Presence. It then makes three attacks:
                    one with its bite and two with its claws.</p>
                <p><strong>Bite.</strong> Melee Weapon Attack: +17 to hit, reach 15 ft., one target. Hit: 21 (2d10 + 10)
                    piercing damage plus 14 (4d6) fire damage.</p>
                <p><strong>Claw.</strong> Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 17 (2d6 + 10)
                    slashing damage.</p>
                <p><strong>Tail.</strong> Melee Weapon Attack: +17 to hit, reach 20 ft., one target. Hit: 19 (2d8 + 10)
                    bludgeoning damage.</p>
                <p><strong>Frightful Presence.</strong> Each creature of the dragon's choice that is within 120 feet of
                    the dragon and aware of it must succeed on a DC 21 Wisdom saving throw or become frightened for 1
                    minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on
                    itself on a success. If a creature's saving throw is successful or the effect ends for it, the
                    creature is immune to the dragon's Frightful Presence for the next 24 hours.</p>
                <p><strong>Fire Breath (Recharge 5–6).</strong> The dragon exhales fire in a 90-foot cone. Each creature
                    in that area must make a DC 24 Dexterity saving throw, taking 91 (26d6) fire damage on a failed
                    save, or half as much damage on a successful one.</p>
            </section>
            <section id="legendary-actions">
                <h3>Legendary Actions</h3>
                <p>The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action
                    can be used at a time and only at the end of another creature's turn. The dragon regains spent
                    legendary actions at the start of its turn.</p>
                <p><strong>Detect.</strong> The dragon makes a Wisdom (Perception) check.</p>
                <p><strong>Tail Attack.</strong> The dragon makes a tail attack.</p>
                <p><strong>Wing Attack (Costs 2 Actions).</strong> The dragon beats its wings. Each creature within 15
                    feet of the dragon must succeed on a DC 25 Dexterity saving throw or take 17 (2d6 + 10) bludgeoning
                    damage and be knocked prone. The dragon can then fly up to half its flying speed.</p>
            </section>
            <section id="lair-actions">
                <h3>Lair Actions</h3>
                <p>On initiative count 20 (losing initiative ties), the dragon takes a lair action to cause one of the
                    following effects; the dragon can't use the same effect two rounds in a row:</p>
                <ul>
                    <li>Magma erupts from a point on the ground the dragon can see within 120 feet of it, creating a
                        20-foot-high, 5-foot-radius geyser. Each creature in the geyser's area must make a DC 15
                        Dexterity saving throw, taking 21 (6d6) fire damage on a failed save, or half as much damage on
                        a successful one.
                    </li>
                    <li>A tremor shakes the lair in a 60-foot radius around the dragon. Each creature other than the
                        dragon on the ground in that area must succeed on a DC 15 Dexterity saving throw or be knocked
                        prone.
                    </li>
                    <li>Volcanic gases form a cloud in a 20-foot-radius sphere centered on a point the dragon can see
                        within 120 feet of it. The sphere spreads a round corners, and its area is lightly obscured. It
                        lasts until initiative count 20 on the next round. Each creature that starts its turn in the
                        cloud must succeed on a DC 13 Constitution saving throw or be poisoned until the end of its
                        turn. While poisoned in this way, a creature is incapacitated.
                    </li>
                </ul>
            </section>
            <section id="regional-effects">
                <h3>Regional Effects</h3>
                <p>The region containing a legendary red dragon's lair is warped by the dragon's magic, which creates
                    one or more of the following effects:</p>
                <ul>
                    <li>Small earthquakes are common within 6 miles of the dragon's lair.</li>
                    <li>Water sources within 1 mile of the lair are supernaturally warm and tainted by sulfur.</li>
                    <li>Rocky fissures within 1 mile of the dragon's lair form portals to the Elemental Plane of Fire,
                        allowing creatures of elemental fire into the world to dwell nearby.
                    </li>
                </ul>
                <p>If the dragon dies, these effects fade over the course of 1d10 days.</p>
            </section>
        </>
    );
}

const CategoryComponents = {
    spells: SpellItem,
    monsters: MonsterItem,
};

export function CompendiumItem({ category, item }) {
    if (!item || !category) return null;

    const CategoryComponent = CategoryComponents[category] ?? DefaultItem;
    return (
        <div css={cardStyle}>
            <CategoryComponent item={item} />
        </div>
    );
}
