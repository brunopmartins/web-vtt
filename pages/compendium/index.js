import Head from "next/head";
import { useSpellQuery } from "../../components/queries/useSpellQuery";
import { css } from "@emotion/react"
import Colmeia from "../../components/colmeia";
import { faMagic, faDragon, faHatWizard, faUsers, faRing, faPortrait, faSkullCrossbones, faBible, faAward, faFeather } from '@fortawesome/free-solid-svg-icons'
const COMPENDIUM_ITEMS = [
    {"id": "1", "name": "Spells", "src": faMagic, "type": "icon"},
    {"id": "2", "name": "Monsters", "src": faDragon, "type": "icon"},
    {"id": "3", "name": "Classes", "src": faHatWizard, "type": "icon"},
    {"id": "4", "name": "Races", "src": faUsers, "type": "icon"},
    {"id": "5", "name": "Items", "src": faRing, "type": "icon"},
    {"id": "6", "name": "Backgrounds", "src": faPortrait, "type": "icon"},
    {"id": "7", "name": "Conditions", "src": faSkullCrossbones, "type": "icon"},
    {"id": "8", "name": "Deities", "src": faBible, "type": "icon"},
    {"id": "9", "name": "Feats", "src": faAward, "type": "icon"},
    {"id": "10", "name": "Languages", "src": faFeather, "type": "icon"},
];

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
  const { isLoading, error, data } = useSpellQuery("produce-flame");
  return (
    <div css={compendiumStyle}>
      <Head>
        <title>Compêndio</title>
        <link rel="icon" href="/beeholder-logo.png" />
      </Head>
      <div css={painelLateralStyle}>
        <img
          css={{ width: 100 }}
          width={100}
          height={100}
          src="/beeholder-logo.png"
          alt="Ícone com a ilustração de um beholder amarelo e preto (cores de abelha)"
        />
        <h1>Câmara do conhecimento.</h1>
        <div id="selecao-compendio">
          {/* TODO: transformar colmeia em componente */}
          <Colmeia objects={COMPENDIUM_ITEMS} scale={20}/>
        </div>
        <div css={listaCompendioStyle}>
          <ul>
            <li>Wish</li>
            <li>Produce Flame</li>
            <li>Cure Wounds</li>
            <li>Healing Word</li>
            <li>Meld Into Stone</li>
            <li>Polymorph</li>
            <li>Speak With Plants</li>
            <li>Plant Growth</li>
            <li>Beast Bond</li>
            <li>Charm Person</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
