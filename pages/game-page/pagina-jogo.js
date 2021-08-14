import Head from "next/head";
import styles from "../../styles/Compendium.module.css";


function CanvasMap({teste}) {
    return (
        <div>{teste}</div>
    )
}


export default function Compendium() {
    return (
        <div className={styles.compendio}>
            <Head>
                <title>Compêndio</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <CanvasMap teste="Jesus"/>
            <div className={styles.painelLateral}>
                <img
                    className={styles.logo}
                    width={100}
                    height={100}
                    src="/beeholder-logo.png"
                    alt="Ícone com a ilustração de um beholder amarelo e preto (cores de abelha)"
                />
            </div>
        </div>
    );
}
