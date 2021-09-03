import React, { useState } from "react";
import {
  Button,
  List,
  Modal,
  Layout,
  Menu,
  Row,
  Col,
  Form,
  Input,
  Typography,
  InputNumber,
} from "antd";
import { ReadOutlined, UserOutlined } from "@ant-design/icons";
import Head from "next/head";
import Colmeia from "../components/colmeia";
import Link from "next/link";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { ImageHolder } from "../components/ImageHolder";
import { css } from "@emotion/react";

const { Header, Footer, Sider, Content } = Layout;

const CAMPANHAS = [
  { id: "123", name: "Rasimash", src: "./img/RasimashWpp.jpg", type: "img" },
  { id: "124", name: "Subversão", src: "/img/SubersãoIcon.jpg", type: "img" },
  { id: "125", name: "Eberrão", src: "/img/EberronParty.jpg", type: "img" },
  { id: "126", name: "Phandelver", src: "/img/Phandelver.jpg", type: "img" },
  { id: "127", name: "Teste", src: "/img/beeholder-logo.png", type: "img" },
];

const flexColumnStyle = css`
  display: flex;
  flex-direction: column;
`;

const flexAlignCenterStyle = css`
  display: flex;
  align-items: center;
`;

const VTTName = (props) => {
  return (
    <div {...props}>
      <Link href="/">
        <div css={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <ImageHolder size="medium" src={"img/beeholder-logo.png"} />
          <h3 css={{ fontSize: 28, marginBottom: 0 }}>BeeHolder</h3>
        </div>
      </Link>
    </div>
  );
};
const PjSheetListHolder = (props) => {
  return (
    <div css={flexColumnStyle}>
      <h3 css={{ textAlign: "center", fontSize: "2em" }}>Suas Fichas</h3>
      <PJSheetList
        pjs={[
          { name: "Aratosh", img: "img/Aratosh.png" },
          { name: "Praestes Solis", img: "img/Praestes.png" },
          { name: "Dareon Silvermane", img: "img/Dareon.png" },
          { name: "Uya", img: "img/Uya.png" },
        ]}
      />
    </div>
  );
};
const PJSheet = (props) => {
  return (
    <div css={flexAlignCenterStyle}>
      <ImageHolder size="small" src={props.src} />
      <h3 css={{ marginBottom: 0 }}>{props.name}</h3>
    </div>
  );
};
const PJSheetList = ({ pjs }) => {
  return (
    <List
      css={{ paddingRight: 24 }}
      dataSource={pjs}
      renderItem={(pj) => (
        <List.Item>
          <PJSheet name={pj.name} src={pj.img} />
        </List.Item>
      )}
    />
  );
};

function ActionsMenu(props) {
  return (
    <Menu
      {...props}
      theme="dark"
      mode="horizontal"
      triggerSubMenuAction="click"
    >
      <Menu.Item key="compendium" icon={<ReadOutlined />}>
        <Link href="/compendium">
          <a>Compendium</a>
        </Link>
      </Menu.Item>
      <Menu.SubMenu key="user" icon={<UserOutlined />} title="José da Silva">
        <Menu.Item key="logout">
          <Link href="/login">
            <a>Logout</a>
          </Link>
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
}

function CreateGameModal(props) {
  return (
    <Modal {...props} title="Adicionar ou Acessar uma Sala" footer={null}>
      <Typography.Title level={4}>Criar uma nova sala</Typography.Title>
      <Form layout="inline" css={{ marginBottom: 30 }}>
        <Form.Item label="Nome da Sala">
          <Input placeholder="Nome da Sala" />
        </Form.Item>
        <Button type="primary">Criar</Button>
      </Form>
      <Typography.Title level={4}>Acessar uma sala existente</Typography.Title>
      <Form layout="inline">
        <Form.Item label="ID da Sala">
          <InputNumber placeholder="ID da Sala" />
        </Form.Item>
        <Button type="primary">Acessar</Button>
      </Form>
    </Modal>
  );
}

const colmeiaStyle = css`
  margin: 0.5em 2em 2em;
  padding: 2em;
  height: 800px;
  border-radius: 5%;
  background-color: var(--cor-dos-frames);
`;

export default function Home() {
  const [isCreateGameModalVisible, setIsCreateGameModalVisible] =
    useState(false);
  return (
    <Layout>
      <Head>
        <title>BeeHolder</title>
      </Head>
      <Header>
        <Row justify="space-between">
          <Col span={8}>
            <VTTName css={{ float: "left" }} />
          </Col>
          <Col span={16} push={12}>
            <ActionsMenu />
          </Col>
        </Row>
      </Header>
      <Layout css={{ marginTop: 40 }}>
        <Content>
          <div css={colmeiaStyle}>
            <Colmeia
              objects={[
                ...CAMPANHAS,
                {
                  id: "0",
                  name: "Adicionar",
                  src: faPlus,
                  type: "icon",
                  onClick: () => setIsCreateGameModalVisible(true),
                },
              ]}
              scale={70}
              n_cols={4}
              n_rows={10}
            />
          </div>
          <CreateGameModal
            visible={isCreateGameModalVisible}
            onCancel={() => setIsCreateGameModalVisible(false)}
          />
        </Content>
        <Sider
          css={{
            backgroundColor: "inherit",
            maxHeight: 800,
            overflow: "auto",
          }}
          width={300}
        >
          <PjSheetListHolder />
        </Sider>
      </Layout>
    </Layout>
  );
}
