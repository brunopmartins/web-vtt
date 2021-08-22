import Head from "next/head";
import { useSpellListQuery } from "../../components/queries/useSpellListQuery";
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
  const { isLoading, error, data } = useSpellListQuery();
  const spellList = data?.results;
  return (
    <div css={compendiumStyle}>
      <Head>
        <title>Compêndio</title>
        <link rel="icon" href="/img/beeholder-logo.png" />
      </Head>
      <div css={painelLateralStyle}>
        <img
          css={{ width: 100 }}
          width={100}
          height={100}
          src="/img/beeholder-logo.png"
          alt="Ícone com a ilustração de um beholder amarelo e preto (cores de abelha)"
        />
        <h1>Câmara do conhecimento</h1>
        <div id="selecao-compendio">
          <Colmeia objects={COMPENDIUM_ITEMS} scale={20}/>
        </div>
        <div css={listaCompendioStyle}>
          <ul>
            {spellList?.map((spell) => (
                <a href={"https://www.dnd5eapi.co" + spell.url} target="_blank"> <li>{spell.name}</li> </a>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
