import Head from "next/head";
import { css } from "@emotion/react";

function CanvasMap({teste}) {
    return (
        <div>{teste}</div>
    )
}

const compendiumStyle = css`
  display: grid;
  grid-template-columns: auto 400px;
  grid-template-rows: 100vh;
`;

const painelLateralStyle = css`
  padding: 0;
  margin: 0;
  grid-column: 2;
  place-content: center;
  text-align: center;
  background-color: var(--cor-dos-frames);
`;

const listaCompendioStyle = css`
  display: flex;
  background-color: var(--cor-dos-frames);
  margin: 1em;
  text-align: justify;
`;


export default function Compendium() {
    return (
        <div css={compendiumStyle}>
            <Head>
                <title>Compêndio</title>
                <link rel="icon" href="/img/beeholder-logo.png" />
            </Head>
            <CanvasMap teste="Jesus"/>
            <div css={painelLateralStyle}>
                <img
                    css={listaCompendioStyle}
                    width={100}
                    height={100}
                    src="/img/beeholder-logo.png"
                    alt="Ícone com a ilustração de um beholder amarelo e preto (cores de abelha)"
                />
            </div>
        </div>
    );
}
