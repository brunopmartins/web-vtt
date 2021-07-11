import React, { useState } from "react";
import "./../../styles/UserHomePage.module.css";
import logo from "../../public/beeholder.png"
const InputText = (props) => {
  return (
    <>
      <input
        className="inputText"
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
      <div className={"InputSubmit"}>
        <InputText
          value={input}
          placeholder={props.placeholder}
          handleChange={handleChange}
        />
        <button
          className={"buttonfixedSize"}
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
      <div className={"image-holder"}>
        <img src={logo} className={"image " + props.size} />
      </div>
    </>
  );
};
const VTTName = () => {
  return (
    <>
      <div className={"VTT-name"}>
        <ImageHolder size="medium" />
        <h3>Beer Holder VTT</h3>
      </div>
    </>
  );
};
const UserProfileAcess = () => {
  return (
    <>
      <div className={"profile-acess-div  flex-align-center"}>
        <ImageHolder size="small" />
        <button
          className={"buttonFit"}
          onClick={() => {
            console.log("hehe");
          }}
        >
          User Options
        </button>
        <button
          className={"buttonFit"}
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
      <div className={"flex-column"}>
        <h3 className={"flex-align-center"}>Suas Fichas</h3>
        <PJSheetList pjs={["estes", "estes", "estes", "estes"]} />
      </div>
    </>
  );
};

const PJSheet = (props) => {
  return (
    <>
      <div className={"VTT-name"}>
        <ImageHolder size="small" />
        <h2>{props.name}</h2>
      </div>
    </>
  );
};
const PJSheetList = (props) => {
  return (
    <>
      <ul>
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
      <div className={"SessionAcess"}>
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
    "estes"
  ];
  return (
    <div className={"sessions-grid"}>
      {sessions.map((session) => {
        return <SessionItem name={session} />;
      })}
    </div>
  );
};

const SessionItem = (props) => {
  return (
    <>
      <div className={"flex-column flex-align-center"}>
        <div id={"session-name"}>{props.name}</div>
        <ImageHolder size={"big"} />
      </div>
    </>
  );
};

export default function Home() {
  return (
    <div className={"root"}>
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
