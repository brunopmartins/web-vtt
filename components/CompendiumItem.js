import {Typography} from "antd";
import React from "react";
import { css } from "@emotion/react";

const { Title, Paragraph } = Typography;

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
    console.log(item);
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

const CategoryComponents = {
    spells: SpellItem,
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
