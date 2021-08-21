import Head from "next/head";
import { useSpellQuery } from "../../components/queries/useSpellQuery";

const COMPENDIUM_ITEMS = [
  "Spells",
  "Monsters",
  "Classes",
  "Races",
  "Items",
  "Backgrounds",
  "Conditions",
  "Deities",
  "Feats",
  "Languages",
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
  console.log(data);
  return (
    <div className={compendiumStyle}>
      <Head>
        <title>Compêndio</title>
        <link rel="icon" href="/beeholder-logo.png" />
      </Head>
      <div className={painelLateralStyle}>
        <img
          css={{ width: "100%" }}
          width={100}
          height={100}
          src="/beeholder-logo.png"
          alt="Ícone com a ilustração de um beholder amarelo e preto (cores de abelha)"
        />
        <h1>Câmara do conhecimento.</h1>
        <div id="selecao-compendio">
          {/* TODO: transformar colmeia em componente */}
          <div className="colmeia">
            {COMPENDIUM_ITEMS.map((itemName) => (
              <div key={itemName} className="hex-cell">
                <div>
                  {/* TODO: Substituir as imagens pelos ícones */}
                  <img src="/beeholder-logo.png" layout="fill" alt={itemName} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={listaCompendioStyle}>
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
