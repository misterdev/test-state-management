import React from "react";
import { StrictMode, useState } from "react";
import ReactDOM from "react-dom";

import ReduxApp from "./redux";
import ZustandApp from './zustand';

import "./styles.css";

const TOOLS = [
  "Redux",
  "Zustand",
  // "Recoil",
  // "Akita",
  // "Reatom"
];

const App = () => {
  const [currentTab, setCurrentTab] = useState(TOOLS[0]);

  return (
    <div className="App">
      <div
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {TOOLS.map((name) => (
          <button onClick={() => setCurrentTab(name)}>{name}</button>
        ))}
      </div>

      <div style={{ marginTop: 60 }}>
        <h1>{`Todos with ${currentTab}`}</h1>

        {currentTab === "Redux" && <ReduxApp />}

        {currentTab === 'Zustand' && <ZustandApp />}

        {/* {currentTab === 'Recoil' && <RecoilApp />} */}

        {/* {currentTab === 'Akita' && <AkitaApp />} */}

        {/* {currentTab === 'Reatom' && <ReatomApp />} */}
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
