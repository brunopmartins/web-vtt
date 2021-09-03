import React, { useState } from "react";
import cx from "classnames";
import Colmeia from "../components/colmeia";
import Link from "next/link";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const CAMPANHAS = [
  { id: "123", name: "Rasimash", src: "./img/RasimashWpp.jpg", type: "img" },
  { id: "124", name: "Subversão", src: "/img/SubersãoIcon.jpg", type: "img" },
  { id: "125", name: "Eberrão", src: "/img/EberronParty.jpg", type: "img" },
  { id: "126", name: "Phandelver", src: "/img/Phandelver.jpg", type: "img" },
  { id: "127", name: "Teste", src: "/img/beeholder-logo.png", type: "img" },
  { id: "0", name: "Adicionar", src: faPlus, type: "icon" },
];
import styles from "../styles/UserHomePage.module.css";
import { Button, List, Space } from "antd";

const ImageHolder = (props) => {
  return (
    <>
      <div className={styles.imageHolder}>
        <img
          src={props.src}
          className={cx(styles.image, styles[props.size], styles[props.format])}
        />
      </div>
    </>
  );
};
const VTTName = () => {
  return (
    <>
      <Link href="/">
        <div css={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <ImageHolder size="medium" src={"img/beeholder-logo.png"} />
          <h3 css={{ fontSize: 28, marginBottom: 0 }}>BeeHolder</h3>
        </div>
      </Link>
    </>
  );
};
const UserProfileAcess = (props) => {
  return (
    <div {...props}>
      <Space size={8}>
        <Link href="/login">
          <Button size="large">Login</Button>
        </Link>
        <Link href="/compendium">
          <Button size="large">Compendium</Button>
        </Link>
      </Space>
    </div>
  );
};
const PjSheetListHolder = (props) => {
  return (
    <>
      <div className={styles.flexColumn}>
        <h3 className={cx(styles.h3, styles.flexAlignCenter)}>Suas Fichas</h3>
        <PJSheetList
          pjs={[
            { name: "Aratosh", img: "img/Aratosh.png" },
            { name: "Praestes Solis", img: "img/Praestes.png" },
            { name: "Dareon Silvermane", img: "img/Dareon.png" },
            { name: "Uya", img: "img/Uya.png" },
          ]}
        />
      </div>
    </>
  );
};
const PJSheet = (props) => {
  return (
    <>
      <div className={styles.VTTname}>
        <ImageHolder size="small" src={props.src} />
        <h2>{props.name}</h2>
      </div>
    </>
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
const Header = () => {
  return (
    <>
      <div className="header">
        <VTTName />
      </div>
    </>
  );
};
export default function Home() {
  return (
    <div className={styles.root}>
      <div
        css={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Header />
      </div>
      <div
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <UserProfileAcess />
      </div>
      <div className={styles.colmeia}>
        <Colmeia objects={CAMPANHAS} scale={70} n_cols={4} n_rows={10} />
      </div>
      <div>
        <PjSheetListHolder className={styles.listHolder} />
      </div>
    </div>
  );
}
