import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { css } from "@emotion/react"

const colmeiaStyle = (scale, n_cols, n_rows) => css`
    --escala: calc(${scale}vw/${n_cols*2});
    --altura: calc(0.5*var(--escala));
    --largura: calc(.5*1.73205*var(--escala));
    box-sizing: border-box;
    display: grid;
    place-content: center;
    grid-template: repeat(${n_rows}, var(--escala))/repeat(${n_cols*2+1}, var(--largura));
    grid-gap: var(--altura) 0;
    overflow: hidden;
    margin: 0;
    padding: var(--altura) 0;
`
const hexCellStyle = n_cols => css`
    &:nth-of-type(${n_cols*2}n+${n_cols+1}) {grid-column-start: 2}
    overflow: hidden;
    grid-column-end: span 2;
    margin: calc(-1*var(--altura)) 0;
    transform: scale(0.95);
    clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
`
const hexCellContentStyle = css`
    --altura: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: flex;
    transform: scale(calc(1 + var(--altura)));
    transition: .2s;
    background-color: var(--cor-dos-titulos);
    color: var(--cor-do-background);
    &:hover {--altura: 0.1;}
`
const hexCellIconStyle = css`
    height: var(--escala);
    display: block;
    margin: auto;
`
function ColmeiaContent(props) {
    if (props.type === "img") {
        return (
            <img layout="fill" src={props.src} alt={props.name} css={hexCellContentStyle}/>
        )
    }
    else if (props.type === "icon") {
        return (
            <FontAwesomeIcon icon={props.src} css={[hexCellContentStyle, hexCellIconStyle]} style={{width: "100%"}}/>
        )
    }
    return (
        <img layout="fill" src={"./beeholder-logo.png"} css={hexCellContentStyle}/>
    )

}

export default function Colmeia(props) {
    const objects = props.objects;
    const scale = props.scale ? props.scale : 20;
    const n_cols = props.n_cols ? props.n_cols : 5;
    const n_rows = Math.ceil(objects.length / n_cols);
    return (
        <div css={colmeiaStyle(scale, n_cols, n_rows)}>
            {objects.map((item) => (
                <div key={item.id} css={hexCellStyle(n_cols)}>
                    <div css={hexCellContentStyle}>
                        <ColmeiaContent type={item.type} src={item.src} alt={item.name}/>
                    </div>
                </div>
            ))}
        </div>
    )
}
