import Head from "next/head";
import styles from "../../styles/Login.module.css";

export default function Login() {
  return (
    <div className={styles.pagina}>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.login}>
        <img
          className={styles.logo}
          width={100}
          height={100}
          src="/beeholder-logo.png"
          alt="Ícone com a ilustração de um beholder amarelo e preto (cores de abelha)"
        />
        <h2>Bem-vindo ao Beerholders!</h2>
        <h3>Faça login para jogar com seus amigos.</h3>
        <form className={styles.formulario} action="" method="post">
          <div className={styles.campoFormulario}>
            <label>E-mail:</label>
            <input type="email" required />
          </div>
          <div className={styles.campoFormulario}>
            <label>Senha:</label>
            <input type="password" required />
          </div>
          <input type="submit" value="Entrar" />
        </form>
      </main>
    </div>
  );
}
