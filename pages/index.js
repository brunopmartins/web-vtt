import React, { useState } from "react";
import cx from "classnames";
import styles from "./../styles/UserHomePage.module.css";
import logo from "./../public/beeholder-logo.png";

const InputText = (props) => {
  return (
    <>
      <input
        className={styles.inputText}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.handleChange}
      />
    </>
  );
};

const InputSubmit = (props) => {
  const [input, setInput] = useState("");
  const handleChange = (event) => {
    setInput(event.target.value);
  };
  return (
    <>
      <div className={styles.InputSubmit}>
        <InputText
          value={input}
          placeholder={props.placeholder}
          handleChange={handleChange}
        />
        <button
          className={cx(styles.button, styles.buttonfixedSize)}
          onClick={() => {
            props.handleClick(input);
          }}
        >
          {props.buttonText}
        </button>
      </div>
    </>
  );
};
const ImageHolder = (props) => {
  return (
    <>
      <div className={styles.imageHolder}>
        <img
          src={"/beeholder-logo.png"}
          className={cx(styles.image, styles[props.size])}
        />
      </div>
    </>
  );
};
const VTTName = () => {
  return (
    <>
      <div className={styles.VTTname}>
        <ImageHolder size="medium" />
        <h3 className={styles.h3}>Beer Holder VTT</h3>
      </div>
    </>
  );
};
const UserProfileAcess = () => {
  return (
    <>
      <div className={cx(styles.profileAccessDiv, styles.flexAlignCenter)}>
        <ImageHolder size="small" />
        <button
          className={cx(styles.button, styles.buttonFit)}
          onClick={() => {
            console.log("hehe");
          }}
        >
          User Options
        </button>
        <button
          className={cx(styles.button, styles.buttonFit)}
          onClick={() => {
            console.log("hehe");
          }}
        >
          Compendium
        </button>
      </div>
    </>
  );
};

const PjSheetListHolder = (props) => {
  return (
    <>
      <div className={styles.flexColumn}>
        <h3 className={cx(styles.h3, styles.flexAlignCenter)}>Suas Fichas</h3>
        <PJSheetList pjs={["estes", "estes", "estes", "estes"]} />
      </div>
    </>
  );
};

const PJSheet = (props) => {
  return (
    <>
      <div className={styles.VTTname}>
        <ImageHolder size="small" />
        <h2>{props.name}</h2>
      </div>
    </>
  );
};
const PJSheetList = (props) => {
  return (
    <>
      <ul className={styles.ul}>
        {props.pjs.map((pj) => {
          return (
            <li>
              <PJSheet name={pj} />
            </li>
          );
        })}
      </ul>
    </>
  );
};
const Header = () => {
  return (
    <>
      <div className="header">
        <VTTName />
        <SessionAcess />
      </div>
    </>
  );
};

const SessionAcess = () => {
  return (
    <>
      <div className={styles.SessionAcess}>
        <InputSubmit
          handleClick={(value) => {
            console.log(value);
          }}
          placeholder="Nome da sala"
          buttonText={"Criar sala"}
        />
        <InputSubmit
          handleClick={(value) => {
            console.log(value);
          }}
          placeholder="ID da sala"
          buttonText={"Acessar Sala"}
        />
      </div>
    </>
  );
};

const SessionList = (props) => {
  const sessions = [
    "estes",
    "estes",
    "estes",
    "estes",
    "estes",
    "estes",
    "estes",
  ];
  return (
    <div className={styles.sessionsGrid}>
      {sessions.map((session) => {
        return <SessionItem name={session} />;
      })}
    </div>
  );
};

const SessionItem = (props) => {
  return (
    <>
      <div className={cx(styles.flexColumn, styles.flexAlignCenter)}>
        <div className={styles.sessionName}>{props.name}</div>
        <ImageHolder size={"big"} />
      </div>
    </>
  );
};

export default function Home() {
  return (
    <div className={styles.root}>
      <div>
        <Header />
      </div>
      <div>
        <UserProfileAcess />
      </div>
      <div>
        <SessionList />
      </div>
      <div>
        <PjSheetListHolder />
      </div>
    </div>
  );
}
