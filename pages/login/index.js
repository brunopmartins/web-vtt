import Head from "next/head";
import { useRouter } from "next/router";
import { Button, Form, Input } from "antd";
import { css } from "@emotion/react";

const paginaStyle = css`
  display: grid;
  grid-template-columns: auto 600px auto;
  grid-template-rows: 100vh;
`;

const loginStyle = css`
  padding: 30vh 0 0 0;
  margin: 0;
  grid-column: 2;
  place-content: center;
  text-align: center;
`;

const logoStyle = css`
  width: 100px;
`;

const formItemStyle = {
  marginBottom: 16,
};

export default function Login() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <div css={paginaStyle}>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      <main css={loginStyle}>
        <img
          css={logoStyle}
          width={100}
          height={100}
          src="/img/beeholder-logo.png"
          alt="Ícone com a ilustração de um beholder amarelo e preto (cores de abelha)"
        />
        <h2>Bem-vindo ao BeeHolder!</h2>
        <h3>Faça login para jogar com seus amigos.</h3>

        <Form
          css={{ marginTop: 40 }}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          onFinish={handleSubmit}
        >
          <Form.Item
            css={formItemStyle}
            label="E-mail"
            name="email"
            rules={[
              { required: true, message: "Por favor digite seu e-mail!" },
            ]}
          >
            <Input type="email" placeholder="E-mail" />
          </Form.Item>
          <Form.Item
            css={formItemStyle}
            label="Senha"
            name="password"
            rules={[{ required: true, message: "Por favor digite sua senha!" }]}
          >
            <Input type="password" placeholder="Senha" />
          </Form.Item>
          <Button size="large" type="primary" htmlType="submit">
            Entrar
          </Button>
        </Form>
      </main>
    </div>
  );
}
