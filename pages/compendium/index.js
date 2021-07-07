import Head from "next/head";
import styles from "../../styles/Compendium.module.css";

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

export default function Compendium() {
  return (
    <div className={styles.compendio}>
      <Head>
        <title>Compêndio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.painelLateral}>
        <img
          className={styles.logo}
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
        <div className={styles.listaCompendio}>
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
