import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../../styles/Login.module.css";

export default function Login() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <div className={styles.pagina}>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      <main className={styles.login}>
        <img
          className={styles.logo}
          width={100}
          height={100}
          src="/img/beeholder-logo.png"
          alt="Ícone com a ilustração de um beholder amarelo e preto (cores de abelha)"
        />
        <h2>Bem-vindo ao BeeHolder!</h2>
        <h3>Faça login para jogar com seus amigos.</h3>
        <form className={styles.formulario} onSubmit={handleSubmit}>
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
